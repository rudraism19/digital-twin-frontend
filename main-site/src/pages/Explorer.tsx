import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Career } from '../components/explorer/CareerSwipeCard';
import CategoryRow from '../components/explorer/CategoryRow';
import OnboardingQuiz from '../components/explorer/OnboardingQuiz';

// Mock Data for 6000+ Careers Showcase
const MOCK_CAREERS: Career[] = [
  {
    id: '1',
    title: 'Robotics Engineer',
    category: 'Future Tech',
    salary: '₹12L - ₹45L',
    description: 'Design and build machines that can replicate human actions. Shape the future of automation and artificial intelligence.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop',
    tags: ['STEM', 'AI', 'Hardware']
  },
  {
    id: '2',
    title: 'Marine Biologist',
    category: 'Environment',
    salary: '₹6L - ₹20L',
    description: 'Travel the world to study and protect ocean ecosystems, marine life, and underwater environments.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
    tags: ['Outdoors', 'Research', 'Animals']
  },
  {
    id: '3',
    title: 'Game Developer',
    category: 'Creative Tech',
    salary: '₹8L - ₹30L',
    description: 'Create immersive virtual worlds, write game logic, and design experiences that millions of people will play.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop',
    tags: ['Coding', 'Design', 'Gaming']
  },
  {
    id: '4',
    title: 'Data Scientist',
    category: 'High Demand',
    salary: '₹10L - ₹40L',
    description: 'Analyze massive amounts of data to find hidden patterns, make predictions, and solve complex business problems.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    tags: ['Math', 'Analytics', 'Python']
  }
];

const ROW_DATA = [
  {
    id: 'c1',
    title: 'Careers Immune to AI',
    subtitle: 'Jobs that require deep human empathy and physical presence.',
    careers: [MOCK_CAREERS[1], MOCK_CAREERS[0], MOCK_CAREERS[3], MOCK_CAREERS[2]]
  },
  {
    id: 'c2',
    title: 'Because you love Video Games',
    subtitle: 'Turn your passion for gaming into a lucrative career.',
    careers: [MOCK_CAREERS[2], MOCK_CAREERS[3], MOCK_CAREERS[0], MOCK_CAREERS[1]]
  }
];

const getPlaceholderImage = (stream: string) => {
  if (!stream) return 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600';
  const s = stream.toLowerCase();
  if (s.includes('tech') || s.includes('it')) return 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600';
  if (s.includes('health') || s.includes('med')) return 'https://images.unsplash.com/photo-1576091160399-11cb953bffee?q=80&w=600';
  if (s.includes('design') || s.includes('creative')) return 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600';
  if (s.includes('business') || s.includes('manage')) return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600';
  if (s.includes('engineer') || s.includes('hardware')) return 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600';
  if (s.includes('science')) return 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600';
  if (s.includes('law') || s.includes('defense') || s.includes('govt')) return 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600';
  return 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600';
};

export default function Explorer() {
  const [allCards, setAllCards] = useState<Career[]>([]);
  const [hasCompletedQuiz, setHasCompletedQuiz] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  useEffect(() => {
    // Check if user has already completed the quiz
    const completed = localStorage.getItem('dtv_explorer_quiz_completed');
    if (!completed) {
      setHasCompletedQuiz(false);
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
          image: getPlaceholderImage(item.stream),
          tags: item.tier ? item.tier.split(' / ').slice(0, 3) : ['General']
        }));
        
        // Reverse array so the first items are at the top of the stack (end of array)
        const reversed = parsedCareers.reverse();
        setAllCards(reversed);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load careers data', err);
        setAllCards(MOCK_CAREERS.reverse());
        setIsLoading(false);
      });
  }, []);

  const handleQuizComplete = () => {
    localStorage.setItem('dtv_explorer_quiz_completed', 'true');
    setHasCompletedQuiz(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-12">
      <AnimatePresence>
        {!hasCompletedQuiz && <OnboardingQuiz onComplete={handleQuizComplete} />}
      </AnimatePresence>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 font-bold text-sm mb-4 uppercase tracking-widest">
          Discover 6000+ Paths
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Find Your Perfect Career
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Swipe through our massive library of careers or explore curated collections. 
          The more you explore, the smarter your Digital Twin gets.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 text-center sm:text-left">Explore All Careers</h2>
        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center p-12">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <h3 className="text-white font-bold">Loading 6000+ Careers...</h3>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allCards.slice(0, visibleCount).map((career) => (
                <div key={career.id} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col hover:border-orange-500/50 hover:shadow-orange-500/10 transition-all cursor-pointer group p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full -z-10 group-hover:bg-orange-500/10 transition-colors"></div>
                  
                  <div className="mb-4 z-10">
                    <span className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                      {career.category}
                    </span>
                    <h3 className="text-2xl font-black text-white leading-tight group-hover:text-orange-400 transition-colors tracking-tight">
                      {career.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-4 leading-relaxed z-10">
                    {career.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/80 mt-auto z-10">
                    <span className="text-green-400 font-bold text-sm bg-green-400/10 px-3 py-1 rounded-full">{career.salary}</span>
                    <span className="text-orange-500 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Explore <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {visibleCount < allCards.length && (
              <div className="mt-12 text-center">
                <button 
                  onClick={() => setVisibleCount(prev => prev + 24)}
                  className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-orange-500/20"
                >
                  Load More Careers
                </button>
                <p className="text-gray-500 text-sm mt-3">Showing {visibleCount} of {allCards.length}</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Netflix-Style Categories Section */}
      <div className="pt-12 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          {ROW_DATA.map((row) => (
            <CategoryRow 
              key={row.id}
              title={row.title}
              subtitle={row.subtitle}
              careers={row.careers}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
