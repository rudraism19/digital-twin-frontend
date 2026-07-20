import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Lucide from 'lucide-react';

const Cpu = Lucide.Cpu as any;
const Heart = Lucide.Heart as any;
const Palette = Lucide.Palette as any;
const Microscope = Lucide.Microscope as any;
const Coffee = Lucide.Coffee as any;
const Map = Lucide.Map as any;
const Code = Lucide.Code as any;
const Users = Lucide.Users as any;
const Lightbulb = Lucide.Lightbulb as any;

interface OnboardingQuizProps {
  onComplete: () => void;
}

type Question = {
  id: number;
  title: string;
  options: {
    id: string;
    label: string;
    icon: React.ReactNode;
    color: string;
  }[];
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "What excites you the most?",
    options: [
      { id: 'tech', label: 'Building Technology', icon: <Cpu size={32} />, color: 'blue' },
      { id: 'people', label: 'Helping People', icon: <Heart size={32} />, color: 'red' },
      { id: 'creative', label: 'Creating Art & Design', icon: <Palette size={32} />, color: 'purple' },
    ]
  },
  {
    id: 2,
    title: "Choose your ideal workspace:",
    options: [
      { id: 'lab', label: 'High-Tech Lab', icon: <Microscope size={32} />, color: 'cyan' },
      { id: 'home', label: 'Cozy Home Office', icon: <Coffee size={32} />, color: 'orange' },
      { id: 'outdoors', label: 'The Great Outdoors', icon: <Map size={32} />, color: 'green' },
    ]
  },
  {
    id: 3,
    title: "How do you prefer to solve problems?",
    options: [
      { id: 'logic', label: 'Logic & Data', icon: <Code size={32} />, color: 'indigo' },
      { id: 'empathy', label: 'Empathy & Chat', icon: <Users size={32} />, color: 'pink' },
      { id: 'innovation', label: 'Out-of-box Ideas', icon: <Lightbulb size={32} />, color: 'yellow' },
    ]
  }
];

const colorClasses: Record<string, string> = {
  blue: 'border-blue-500/50 hover:border-blue-500 bg-blue-500/10 text-blue-400',
  red: 'border-red-500/50 hover:border-red-500 bg-red-500/10 text-red-400',
  purple: 'border-purple-500/50 hover:border-purple-500 bg-purple-500/10 text-purple-400',
  cyan: 'border-cyan-500/50 hover:border-cyan-500 bg-cyan-500/10 text-cyan-400',
  orange: 'border-orange-500/50 hover:border-orange-500 bg-orange-500/10 text-orange-400',
  green: 'border-green-500/50 hover:border-green-500 bg-green-500/10 text-green-400',
  indigo: 'border-indigo-500/50 hover:border-indigo-500 bg-indigo-500/10 text-indigo-400',
  pink: 'border-pink-500/50 hover:border-pink-500 bg-pink-500/10 text-pink-400',
  yellow: 'border-yellow-500/50 hover:border-yellow-500 bg-yellow-500/10 text-yellow-400',
};

const OnboardingQuiz: React.FC<OnboardingQuizProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleOptionSelect = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Finished all questions
      setIsAnalyzing(true);
      setTimeout(() => {
        onComplete();
      }, 2500); // Fake 2.5s analyzing delay
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 backdrop-blur-xl">
      <div className="w-full max-w-2xl px-4">
        
        <AnimatePresence mode="wait">
          {!isAnalyzing ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <div className="text-center mb-8">
                <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">
                  Question {currentStep + 1} of {QUESTIONS.length}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                  {QUESTIONS[currentStep].title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {QUESTIONS[currentStep].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={handleOptionSelect}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-200 transform hover:scale-105 ${colorClasses[option.color]}`}
                  >
                    <div className="mb-4">
                      {option.icon}
                    </div>
                    <span className="font-bold text-center text-sm">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center space-y-6"
            >
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
                {/* @ts-ignore */}
                <Cpu size={40} className="text-orange-400 animate-pulse" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-white mb-2">Analyzing your traits...</h2>
                <p className="text-gray-400">Curating 6000+ career paths to find your perfect match.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </div>
  );
};

export default OnboardingQuiz;
