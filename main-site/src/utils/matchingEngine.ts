import { Career } from '../components/explorer/CareerSwipeCard';
import { TraitVector } from '../config/quizConfig';

// --- DATA PREPARATION: FLAG ---
// The true database lacks the 'traits' vector for careers.
// Until the one-time batch enrichment pass is done, we generate deterministic
// pseudo-random trait vectors based on a hash of the career title and category.
export const getCareerTraits = (career: Career): TraitVector => {
  const str = career.title + career.category;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Create deterministic values between 0 and 10 based on hash
  const getVal = (offset: number) => Math.abs((hash ^ (offset * 31337)) % 11);
  
  // We can bias the hash a little based on category words to make the mock data slightly smarter
  const cat = career.category.toLowerCase();
  
  let techBias = 0;
  if (cat.includes('tech') || cat.includes('engineer')) techBias = 4;
  
  let anaBias = 0;
  if (cat.includes('science') || cat.includes('data')) anaBias = 4;
  
  let creaBias = 0;
  if (cat.includes('creative') || cat.includes('design')) creaBias = 4;
  
  let peopBias = 0;
  if (cat.includes('health') || cat.includes('manage') || cat.includes('education')) peopBias = 4;
  
  let entBias = 0;
  if (cat.includes('business') || cat.includes('emerging')) entBias = 4;
  
  let structBias = 0;
  if (cat.includes('law') || cat.includes('govt')) structBias = 4;

  return {
    technical: Math.min(10, getVal(1) + techBias),
    analytical: Math.min(10, getVal(2) + anaBias),
    creative: Math.min(10, getVal(3) + creaBias),
    peopleOriented: Math.min(10, getVal(4) + peopBias),
    entrepreneurial: Math.min(10, getVal(5) + entBias),
    structured: Math.min(10, getVal(6) + structBias)
  };
};

// --- ALGORITHM: COSINE SIMILARITY ---
const calculateCosineSimilarity = (v1: TraitVector, v2: TraitVector): number => {
  const keys = Object.keys(v1) as (keyof TraitVector)[];
  
  let dotProduct = 0;
  let mag1 = 0;
  let mag2 = 0;
  
  for (const k of keys) {
    dotProduct += v1[k] * v2[k];
    mag1 += v1[k] * v1[k];
    mag2 += v2[k] * v2[k];
  }
  
  mag1 = Math.sqrt(mag1);
  mag2 = Math.sqrt(mag2);
  
  if (mag1 === 0 || mag2 === 0) return 0;
  return dotProduct / (mag1 * mag2);
};

export type RankedCareer = {
  career: Career;
  matchScore: number;
  matchPercentage: number;
};

// --- RANKING ENGINE ---
export const rankCareers = (
  allCareers: Career[], 
  userTraits: TraitVector, 
  userDomains: string[]
): RankedCareer[] => {
  const ranked = allCareers.map(career => {
    const careerTraits = getCareerTraits(career);
    
    // 1. Base Cosine Similarity (-1 to 1, but mostly 0 to 1 with non-negative vectors)
    let similarity = calculateCosineSimilarity(userTraits, careerTraits);
    
    // Normalize to 0-1 range to be safe
    similarity = Math.max(0, Math.min(1, similarity));
    
    // 2. Soft Domain Boost
    // If the career's category overlaps with any chosen user domains, give a 15% boost.
    let boost = 0;
    const cat = career.category.toLowerCase();
    if (userDomains.some(d => {
      const lowerD = d.toLowerCase();
      // Simple word match due to imperfect category taxonomy
      const words = lowerD.split(' & ').flatMap(w => w.split(' '));
      return words.some(w => w.length > 3 && cat.includes(w));
    })) {
      boost = 0.15;
    }
    
    let finalScore = similarity + boost;
    
    // Clamp to max 99% for realism (100% is too perfect)
    finalScore = Math.min(0.99, finalScore);
    
    return {
      career,
      matchScore: finalScore,
      matchPercentage: Math.round(finalScore * 100)
    };
  });
  
  // Sort descending by score
  ranked.sort((a, b) => b.matchScore - a.matchScore);
  
  return ranked;
};

// --- NORMALIZATION ---
export const normalizeUserTraits = (rawWeights: TraitVector): TraitVector => {
  const keys = Object.keys(rawWeights) as (keyof TraitVector)[];
  let max = 0;
  for (const k of keys) {
    if (rawWeights[k] > max) max = rawWeights[k];
  }
  
  // Scale so the highest trait is exactly 10, preventing 0-division
  const factor = max > 0 ? 10 / max : 1;
  
  const normalized: any = {};
  for (const k of keys) {
    normalized[k] = Math.round(Math.max(0, rawWeights[k] * factor));
  }
  
  return normalized as TraitVector;
};
