import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { DollarSign, BrainCircuit, X, Heart } from 'lucide-react';

export interface Career {
  id: string;
  title: string;
  category: string;
  salary: string;
  description: string;
  image: string;
  tags: string[];
}

interface CareerSwipeCardProps {
  career: Career;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  isFront: boolean;
}

const CareerSwipeCard: React.FC<CareerSwipeCardProps> = ({ career, onSwipeLeft, onSwipeRight, isFront }) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  
  // Cross icon opacity increases as you drag left
  const crossOpacity = useTransform(x, [-100, 0], [1, 0]);
  // Heart icon opacity increases as you drag right
  const heartOpacity = useTransform(x, [0, 100], [0, 1]);

  const handleDragEnd = (_event: any, info: any) => {
    if (info.offset.x > 100) {
      onSwipeRight();
    } else if (info.offset.x < -100) {
      onSwipeLeft();
    }
  };

  return (
    <motion.div
      style={{
        x,
        opacity,
        rotate,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileTap={isFront ? { scale: 1.05 } : {}}
      className={`absolute w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing border border-gray-800 ${
        isFront ? 'z-20' : 'z-10'
      }`}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: isFront ? 1 : 0.95, opacity: isFront ? 1 : 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${career.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent" />
      
      {/* Swipe Feedback Icons */}
      <motion.div style={{ opacity: crossOpacity }} className="absolute top-8 right-8 bg-red-500/20 p-4 rounded-full border-2 border-red-500 text-red-500">
        {/* @ts-ignore */}
        <X size={40} strokeWidth={3} />
      </motion.div>
      <motion.div style={{ opacity: heartOpacity }} className="absolute top-8 left-8 bg-green-500/20 p-4 rounded-full border-2 border-green-500 text-green-500">
        {/* @ts-ignore */}
        <Heart size={40} strokeWidth={3} />
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full p-6 text-left">
        <div className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/50 text-orange-400 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
          {career.category}
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-2 leading-tight drop-shadow-md">
          {career.title}
        </h2>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
          {career.description}
        </p>
        
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-lg border border-gray-700">
            {/* @ts-ignore */}
            <DollarSign size={14} className="text-green-400" />
            {career.salary}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-lg border border-gray-700">
            {/* @ts-ignore */}
            <BrainCircuit size={14} className="text-purple-400" />
            {career.tags[0]}
          </div>
          {career.tags.slice(1, 3).map(tag => (
            <div key={tag} className="text-xs font-medium text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-lg border border-gray-700">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CareerSwipeCard;
