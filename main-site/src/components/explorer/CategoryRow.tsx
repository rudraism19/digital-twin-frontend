import React from 'react';
import { Career } from './CareerSwipeCard';
import { ChevronRight } from 'lucide-react';

interface CategoryRowProps {
  title: string;
  subtitle?: string;
  careers: Career[];
}

const CategoryRow: React.FC<CategoryRowProps> = ({ title, subtitle, careers }) => {
  return (
    <div className="mb-12">
      <div className="flex items-end justify-between mb-4 px-4 md:px-8">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{title}</h3>
          {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
        </div>
        <button className="flex items-center text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors">
          {/* @ts-ignore */}
          View All <ChevronRight size={16} className="ml-1" />
        </button>
      </div>

      <div className="flex overflow-x-auto pb-6 px-4 md:px-8 gap-4 scrollbar-hide snap-x">
        {careers.map((career) => (
          <div 
            key={career.id} 
            className="flex-none w-[280px] md:w-[320px] h-[400px] rounded-2xl overflow-hidden relative group cursor-pointer snap-start border border-gray-800 hover:border-gray-600 transition-colors"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${career.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end h-full">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2 block">
                  {career.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-2 leading-tight">
                  {career.title}
                </h4>
                <p className="text-sm text-gray-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {career.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryRow;
