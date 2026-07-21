import { Monitor, Briefcase, HeartPulse, PenTool, Lightbulb, GraduationCap, Microchip, Shield, FlaskConical } from 'lucide-react';
import { Career } from './CareerSwipeCard';
import { generateMockCareerDetails } from '../../utils/mockCareerDetails';

interface CareerGridCardProps {
  career: Career;
  onClick: (career: Career) => void;
}

export default function CareerGridCard({ career, onClick }: CareerGridCardProps) {
  // Use mock details to get the extra badges like YoY growth and demand
  const details = generateMockCareerDetails(career);
  
  // Choose an icon based on category/stream
  const cat = career.category.toLowerCase();
  let _Icon = Monitor;
  if (cat.includes('business') || cat.includes('manage')) _Icon = Briefcase;
  else if (cat.includes('health')) _Icon = HeartPulse;
  else if (cat.includes('creative') || cat.includes('design')) _Icon = PenTool;
  else if (cat.includes('education')) _Icon = GraduationCap;
  else if (cat.includes('engineer') || cat.includes('hardware')) _Icon = Microchip;
  else if (cat.includes('science')) _Icon = FlaskConical;
  else if (cat.includes('law') || cat.includes('govt')) _Icon = Shield;
  else if (cat.includes('emerging')) _Icon = Lightbulb;
  
  const Icon = _Icon as any;

  return (
    <div 
      onClick={() => onClick(career)}
      className="bg-[#111111] border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-gray-400 group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
        <span className="px-3 py-1 bg-orange-950/40 text-orange-400 border border-orange-900/50 rounded-full text-[10px] font-bold uppercase tracking-wider">
          {career.category}
        </span>
      </div>
      
      <h3 className="text-white font-bold text-lg mb-2 leading-tight">{career.title}</h3>
      
      <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
        {career.description}
      </p>
      
      <div className="mt-auto space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="text-orange-400 font-bold text-sm flex items-center gap-1">
             💰 {career.salary}
          </span>
          <span className="px-2 py-0.5 bg-emerald-950/40 text-emerald-400 border border-emerald-900/50 rounded text-xs font-bold flex items-center gap-1">
             🚀 {details.yoyGrowth}
          </span>
        </div>
        
        <p className="text-gray-500 text-xs">
          Demand: 🚀 <span className="text-gray-400">{details.demandStatus}</span>
        </p>
        
        <div className="pt-3 border-t border-gray-800 text-center mt-2">
          <span className="text-orange-500 text-sm font-bold group-hover:text-orange-400 transition-colors">
            Explore →
          </span>
        </div>
      </div>
    </div>
  );
}
