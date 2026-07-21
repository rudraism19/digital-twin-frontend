import { useState, useEffect } from 'react';
import GalaxyCanvas from '../components/galaxy/GalaxyCanvas';
import GalaxyUI from '../components/galaxy/GalaxyUI';

interface CareerPath {
  id: string;
  name: string;
  hook: string;
  tags: string[];
  salaryRange: string;
  growthTrend: string;
}

export default function CareerGalaxy() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredStar, setHoveredStar] = useState<{ star: CareerPath; x: number; y: number } | null>(null);
  const [selectedStar, setSelectedStar] = useState<CareerPath | null>(null);
  const [pinnedPaths, setPinnedPaths] = useState<string[]>([]);

  // Load pinned paths from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('dtv_pinned_careers');
    if (saved) {
      try {
        setPinnedPaths(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse pinned paths");
      }
    }
  }, []);

  const handleTogglePin = (id: string) => {
    setPinnedPaths(prev => {
      const next = prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id];
      localStorage.setItem('dtv_pinned_careers', JSON.stringify(next));
      return next;
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans">
      
      {/* 3D Canvas Layer */}
      <GalaxyCanvas 
        searchQuery={searchQuery}
        pinnedPaths={pinnedPaths}
        onHoverStar={(star, x, y) => setHoveredStar(star ? { star, x, y } : null)}
        onClickStar={star => setSelectedStar(star)}
      />

      {/* 2D UI Overlay Layer */}
      <GalaxyUI 
        hoveredStar={hoveredStar}
        selectedStar={selectedStar}
        pinnedPaths={pinnedPaths}
        onSearchChange={setSearchQuery}
        onCloseModal={() => setSelectedStar(null)}
        onTogglePin={handleTogglePin}
      />

    </div>
  );
}
