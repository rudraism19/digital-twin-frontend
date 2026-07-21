import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Career } from '../components/explorer/CareerSwipeCard';
import OnboardingQuiz from '../components/explorer/OnboardingQuiz';
import CareerGridCard from '../components/explorer/CareerGridCard';
import CareerDetailModal from '../components/explorer/CareerDetailModal';
import CareerQuizResults from '../components/explorer/CareerQuizResults';
import { generateMockCareerDetails, DetailedCareer } from '../utils/mockCareerDetails';
import { rankCareers, RankedCareer } from '../utils/matchingEngine';
import { TraitVector } from '../config/quizConfig';
import { Search as _Search } from 'lucide-react';

const Search = _Search as any;

const CATEGORIES = [
  'All Careers', 'Technology', 'Business & Management', 'Creative', 
  'Engineering', 'Healthcare', 'Govt & Law', 'Science & Research', 
  'Education', 'Emerging Fields'
];

export default function Explorer() {
  const [allCards, setAllCards] = useState<Career[]>([]);
  const [filteredCards, setFilteredCards] = useState<Career[]>([]);
  
  const [hasCompletedQuiz, setHasCompletedQuiz] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState<number>(24);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Careers');
  
  const [selectedCareer, setSelectedCareer] = useState<DetailedCareer | null>(null);

  const [userTraits, setUserTraits] = useState<TraitVector | null>(null);
  const [userDomains, setUserDomains] = useState<string[]>([]);
  const [rankedMatches, setRankedMatches] = useState<RankedCareer[]>([]);

  useEffect(() => {
    // Check if user has already completed the quiz
    const completed = localStorage.getItem('dtv_explorer_quiz_completed');
    if (!completed) {
      setHasCompletedQuiz(false);
    } else {
      const traits = localStorage.getItem('dtv_user_traits');
      const domains = localStorage.getItem('dtv_user_domains');
      if (traits) setUserTraits(JSON.parse(traits));
      if (domains) setUserDomains(JSON.parse(domains));
    }

    // Fetch the parsed Excel data
    fetch('/data/careers_data.json')
      .then(res => res.json())
      .then((data: any[]) => {
        const parsedCareers: Career[] = data.map((item, index) => ({
          id: item.id || `career-${index}`,
          title: item.title || 'Unknown Career',
          category: item.stream || 'General',
          salary: item.salary || 'Varies',
          description: item.description || 'No description provided.',
          image: '', // No longer used in grid view
          tags: item.tier ? item.tier.split(' / ').slice(0, 3) : ['General']
        }));
        
        const reversed = parsedCareers.reverse();
        setAllCards(reversed);
        setFilteredCards(reversed);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load careers data', err);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = allCards;
    
    // Filter by Category
    if (selectedCategory !== 'All Careers') {
      result = result.filter(c => {
        const stream = c.category.toLowerCase();
        const cat = selectedCategory.toLowerCase();
        if (cat === 'technology') return stream.includes('tech') || stream.includes('it');
        if (cat === 'business & management') return stream.includes('business') || stream.includes('manage');
        if (cat === 'creative') return stream.includes('creative') || stream.includes('design');
        if (cat === 'engineering') return stream.includes('engineer') || stream.includes('hardware');
        if (cat === 'healthcare') return stream.includes('health') || stream.includes('med');
        if (cat === 'govt & law') return stream.includes('law') || stream.includes('defense') || stream.includes('govt');
        if (cat === 'science & research') return stream.includes('science');
        if (cat === 'education') return stream.includes('education') || stream.includes('teaching');
        if (cat === 'emerging fields') return stream.includes('emerging');
        return stream.includes(cat);
      });
    }

    // Filter by Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c => 
        c.title.toLowerCase().includes(q) || 
        c.category.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
      );
    }

    setFilteredCards(result);
    setVisibleCount(24);
  }, [searchQuery, selectedCategory, allCards]);

  useEffect(() => {
    if (userTraits && allCards.length > 0) {
      setRankedMatches(rankCareers(allCards, userTraits, userDomains));
    }
  }, [allCards, userTraits, userDomains]);

  const handleQuizComplete = () => {
    const traits = localStorage.getItem('dtv_user_traits');
    const domains = localStorage.getItem('dtv_user_domains');
    if (traits) setUserTraits(JSON.parse(traits));
    if (domains) setUserDomains(JSON.parse(domains));
    setHasCompletedQuiz(true);
  };

  const handleRetakeQuiz = () => {
    localStorage.removeItem('dtv_explorer_quiz_completed');
    localStorage.removeItem('dtv_user_traits');
    localStorage.removeItem('dtv_user_domains');
    setHasCompletedQuiz(false);
    setUserTraits(null);
    setUserDomains([]);
    setRankedMatches([]);
  };

  const handleCardClick = (career: Career) => {
    setSelectedCareer(generateMockCareerDetails(career));
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-12 font-sans">
      <AnimatePresence>
        {!hasCompletedQuiz && (
          <OnboardingQuiz 
            onComplete={handleQuizComplete} 
            onClose={() => setHasCompletedQuiz(true)} 
          />
        )}
      </AnimatePresence>
      
      {selectedCareer && (
        <CareerDetailModal 
          career={selectedCareer} 
          onClose={() => setSelectedCareer(null)} 
        />
      )}

      {/* Header / Results Section */}
      {hasCompletedQuiz && userTraits && rankedMatches.length > 0 ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <CareerQuizResults 
            rankedMatches={rankedMatches} 
            userTraits={userTraits} 
            onRetake={handleRetakeQuiz}
          />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Where Do You See Yourself in 5 Years?
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Browse, filter, search, and track 6000+ authentic, cutting-edge, and emerging career opportunities. 
            Save your skill progress, write notes, and build your personalised roadmap — all saved locally on your device.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/galaxy" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 border border-gray-700 hover:bg-gray-800 text-white font-medium rounded-xl transition-all shadow-lg w-full sm:w-auto"
            >
              Open Career Galaxy (3D Map)
            </Link>
            
            <button 
              onClick={handleRetakeQuiz}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-orange-500 border border-orange-600 hover:bg-orange-400 text-black font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto"
            >
              Take Career DNA Quiz
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 bg-[#111] border border-gray-800 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 shadow-xl transition-all"
            placeholder="Search careers (e.g. UPSC, Software Developer, MBA, CA)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === cat 
                  ? 'bg-orange-500 text-black border border-orange-500' 
                  : 'bg-transparent border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Career Grid */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center p-12">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <h3 className="text-white font-bold">Loading 6000+ Careers...</h3>
          </div>
        ) : (
          <>
            {filteredCards.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-xl">No careers found matching your criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All Careers'); }}
                  className="mt-4 text-orange-500 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCards.slice(0, visibleCount).map((career) => (
                  <CareerGridCard 
                    key={career.id} 
                    career={career} 
                    onClick={handleCardClick}
                  />
                ))}
              </div>
            )}
            
            {visibleCount < filteredCards.length && (
              <div className="mt-12 text-center">
                <button 
                  onClick={() => setVisibleCount(prev => prev + 24)}
                  className="px-8 py-3 bg-[#111] hover:bg-gray-800 border border-gray-800 text-white font-bold rounded-xl transition-colors"
                >
                  Load More Careers
                </button>
                <p className="text-gray-600 text-sm mt-3">Showing {visibleCount} of {filteredCards.length}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
