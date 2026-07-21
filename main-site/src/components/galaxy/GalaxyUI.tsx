import { useState, useRef } from 'react';

interface CareerPath {
  id: string;
  name: string;
  hook: string;
  tags: string[];
  salaryRange: string;
  growthTrend: string;
}

interface GalaxyUIProps {
  hoveredStar: { star: CareerPath; x: number; y: number } | null;
  selectedStar: CareerPath | null;
  pinnedPaths: string[];
  onSearchChange: (query: string) => void;
  onCloseModal: () => void;
  onTogglePin: (id: string) => void;
}

export default function GalaxyUI({ hoveredStar, selectedStar, pinnedPaths, onSearchChange, onCloseModal, onTogglePin }: GalaxyUIProps) {
  const [searchInput, setSearchInput] = useState('');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchInput(val);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearchChange(val);
    }, 300);
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center p-6 pt-24">
      
      {/* Persistent Search Bar */}
      <div className="pointer-events-auto w-full max-w-md relative mt-4">
        <input 
          type="text" 
          value={searchInput}
          onChange={handleSearch}
          placeholder="Search for a career..." 
          className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg placeholder:text-gray-400"
        />
        <svg className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>

      {/* Hover Card */}
      {hoveredStar && !selectedStar && (
        <div 
          className="absolute pointer-events-none transition-all duration-100 ease-out bg-black/80 backdrop-blur-md border border-white/20 rounded-xl p-4 w-64 shadow-2xl"
          style={{ 
            left: Math.min(hoveredStar.x + 15, window.innerWidth - 270), 
            top: Math.min(hoveredStar.y + 15, window.innerHeight - 150) 
          }}
        >
          <h3 className="text-white font-bold text-lg leading-tight mb-1">{hoveredStar.star.name}</h3>
          <p className="text-gray-300 text-xs italic mb-3 line-clamp-2">{hoveredStar.star.hook}</p>
          <div className="flex justify-between items-center text-xs">
            <span className="text-emerald-400 font-semibold">{hoveredStar.star.salaryRange}</span>
            <span className="bg-white/10 px-2 py-1 rounded text-white">{hoveredStar.star.growthTrend}</span>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {selectedStar && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto flex items-center justify-center p-4 animate-in fade-in z-50">
          <div className="bg-[#101415] border border-white/10 rounded-2xl w-full max-w-lg p-8 shadow-2xl relative">
            <button 
              onClick={onCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors"
            >
              ✕
            </button>
            
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-white">{selectedStar.name}</h2>
              <button 
                onClick={() => onTogglePin(selectedStar.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${pinnedPaths.includes(selectedStar.id) ? 'bg-blue-500 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
              >
                {pinnedPaths.includes(selectedStar.id) ? '★ Pinned' : '☆ Pin to Constellation'}
              </button>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">{selectedStar.hook}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Expected Salary</p>
                <p className="text-lg text-emerald-400 font-semibold">{selectedStar.salaryRange}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Growth Trend</p>
                <p className="text-lg text-blue-400 font-semibold">{selectedStar.growthTrend}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedStar.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
