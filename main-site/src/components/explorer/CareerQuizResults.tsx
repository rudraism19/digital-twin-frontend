import { useState } from 'react';
import { RankedCareer } from '../../utils/matchingEngine';
import { TraitVector } from '../../config/quizConfig';
import CareerGridCard from './CareerGridCard';
import CareerDetailModal from './CareerDetailModal';
import { generateMockCareerDetails, DetailedCareer } from '../../utils/mockCareerDetails';
import { RotateCcw as _RotateCcw, ChevronDown as _ChevronDown, CheckCircle2 as _CheckCircle2 } from 'lucide-react';

const RotateCcw = _RotateCcw as any;
const ChevronDown = _ChevronDown as any;
const CheckCircle2 = _CheckCircle2 as any;

interface CareerQuizResultsProps {
  rankedMatches: RankedCareer[];
  userTraits: TraitVector;
  onRetake: () => void;
}

export default function CareerQuizResults({ rankedMatches, userTraits, onRetake }: CareerQuizResultsProps) {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedCareer, setSelectedCareer] = useState<DetailedCareer | null>(null);

  // Determine dominant trait for headline
  const entries = Object.entries(userTraits);
  entries.sort((a, b) => b[1] - a[1]);
  const primaryTrait = entries[0]?.[0] || 'balanced';
  const secondaryTrait = entries[1]?.[0] || 'adaptable';
  
  const formatTrait = (t: string) => t === 'peopleOriented' ? 'People-Oriented' : t.charAt(0).toUpperCase() + t.slice(1);

  const headline = `You are highly ${formatTrait(primaryTrait)} and ${formatTrait(secondaryTrait)}.`;

  const handleCardClick = (career: any) => {
    setSelectedCareer(generateMockCareerDetails(career));
  };

  return (
    <div className="w-full">
      {selectedCareer && (
        <CareerDetailModal 
          career={selectedCareer} 
          onClose={() => setSelectedCareer(null)} 
        />
      )}

      {/* Results Header */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl mb-12 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 font-bold text-sm mb-6 uppercase tracking-widest">
            <CheckCircle2 size={16} /> DNA Match Complete
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            {headline}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            We've analyzed your trait vector against 6000+ career paths. Here are your personalized top matches sorted by mathematical similarity.
          </p>

          <button 
            onClick={onRetake}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-white font-bold rounded-xl transition-colors"
          >
            <RotateCcw size={18} /> Retake Quiz
          </button>
        </div>
      </div>

      {/* Ranked Grid */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          Your Top Matches <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium">{rankedMatches.length} analyzed</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rankedMatches.slice(0, visibleCount).map((ranked) => (
            <div key={ranked.career.id} className="relative group h-full">
              {/* Match Score Badge */}
              <div className="absolute -top-3 -right-3 z-20 px-3 py-1 bg-orange-500 text-black font-black rounded-xl shadow-lg border-2 border-gray-950 flex items-center gap-1 group-hover:scale-110 transition-transform">
                {ranked.matchPercentage}% <span className="text-[10px] uppercase font-bold tracking-tighter">Match</span>
              </div>
              
              <div className="h-full pt-2">
                <CareerGridCard 
                  career={ranked.career} 
                  onClick={handleCardClick}
                />
              </div>
            </div>
          ))}
        </div>
        
        {visibleCount < rankedMatches.length && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#111] hover:bg-gray-800 border border-gray-800 text-white font-bold rounded-xl transition-colors shadow-lg"
            >
              See more matches <ChevronDown size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
