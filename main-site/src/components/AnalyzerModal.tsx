import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnalyzerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProfileResult {
  score: number;
  matchRole: string;
  salary: string;
  demand: string;
  strengths: string[];
  gaps: string[];
  roadmap: { phase: string; title: string; desc: string }[];
}

const SAMPLE_PROFILES: Record<string, { label: string; role: string; profile: ProfileResult }> = {
  cs: {
    label: '💻 Computer Science & AI',
    role: 'AI / ML Engineer',
    profile: {
      score: 92,
      matchRole: 'AI & Machine Learning Engineer',
      salary: '₹14L - ₹38L / yr',
      demand: '🔥 Extremely High (Top 2% Growth)',
      strengths: ['Python & PyTorch', 'Data Structures', 'Git & MLOps basics'],
      gaps: ['Distributed Training', 'Docker & Kubernetes', 'System Design'],
      roadmap: [
        { phase: 'Year 1', title: 'Foundations & Math', desc: 'Linear Algebra, Probability, Data Structures in Python' },
        { phase: 'Year 2', title: 'Deep Learning & Projects', desc: 'CNNs, Transformers, LLM fine-tuning on PyTorch' },
        { phase: 'Year 3', title: 'Internship & Portfolio', desc: 'Deploy model APIs with Docker, 6-month AI internship' }
      ]
    }
  },
  ece: {
    label: '⚡ Electronics & Robotics',
    role: 'Robotics Systems Architect',
    profile: {
      score: 88,
      matchRole: 'Robotics & Embedded Systems Specialist',
      salary: '₹12L - ₹32L / yr',
      demand: '⚡ High Growth in Industry 4.0',
      strengths: ['Microcontrollers (C/C++)', 'Circuit Design', 'ROS2 Basics'],
      gaps: ['Computer Vision (OpenCV)', 'Control Systems Math', 'PCB Layout'],
      roadmap: [
        { phase: 'Year 1', title: 'Hardware & Microcontrollers', desc: 'STM32, ESP32 programming & sensor integration' },
        { phase: 'Year 2', title: 'ROS2 & Kinematics', desc: 'Autonomous navigation, SLAM, Gazebo simulation' },
        { phase: 'Year 3', title: 'Hardware-in-Loop Project', desc: 'Build autonomous rover & complete industrial internship' }
      ]
    }
  },
  stem: {
    label: '🚀 High School STEM Explorer',
    role: 'Data Science & Tech Trainee',
    profile: {
      score: 84,
      matchRole: 'Future Data Scientist & Software Architect',
      salary: '₹10L - ₹28L / yr',
      demand: '🌟 Emerging Career Pathway',
      strengths: ['High Math Aptitude', 'Problem Solving', 'Python Intro'],
      gaps: ['Algorithmic Logic', 'SQL & Databases', 'Git Version Control'],
      roadmap: [
        { phase: 'Phase 1', title: 'Programming Foundations', desc: 'Master Python fundamentals, logic building & Git' },
        { phase: 'Phase 2', title: 'STEM Stream Selection', desc: 'Choose CS / AI specialization & build first web app' },
        { phase: 'Phase 3', title: 'Hackathons & Portfolio', desc: 'Participate in hackathons & secure early summer internship' }
      ]
    }
  }
};

const AnalyzerModal: React.FC<AnalyzerModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'preset'>('preset');
  const [selectedPresetKey, setSelectedPresetKey] = useState<string>('cs');
  const [file, setFile] = useState<File | null>(null);
  const [manualText, setManualText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scanStep, setScanStep] = useState<string>('');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<ProfileResult | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const runScanAnimation = (targetResult: ProfileResult) => {
    setIsAnalyzing(true);
    setResult(null);
    setProgress(0);

    const steps = [
      { text: '🔍 Parsing credentials & skill tokens...', pct: 25 },
      { text: '🧠 Querying 1,800+ career vector embeddings...', pct: 55 },
      { text: '📊 Computing confidence score & gap analysis...', pct: 85 },
      { text: '✨ Generating personalized 3-year roadmap...', pct: 100 }
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setScanStep(step.text);
        setProgress(step.pct);
        if (idx === steps.length - 1) {
          setTimeout(() => {
            setIsAnalyzing(false);
            setResult(targetResult);
          }, 400);
        }
      }, (idx + 1) * 600);
    });
  };

  const handleStartPresetScan = () => {
    const preset = SAMPLE_PROFILES[selectedPresetKey]?.profile;
    if (preset) {
      runScanAnimation(preset);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleStartUploadScan = () => {
    const customResult: ProfileResult = {
      score: 89,
      matchRole: manualText ? 'Custom Profile AI Specialist' : (file ? `${file.name.split('.')[0]} Specialist` : 'Software & AI Architect'),
      salary: '₹12L - ₹35L / yr',
      demand: '⚡ High Market Demand',
      strengths: manualText ? manualText.split(',').slice(0, 3) : ['Analytical Reasoning', 'Project Management', 'Technical Literacy'],
      gaps: ['Cloud Architecture (AWS)', 'Advanced System Design'],
      roadmap: [
        { phase: 'Phase 1', title: 'Skill Augmentation', desc: 'Bridge identified technical gaps in cloud and databases' },
        { phase: 'Phase 2', title: 'Portfolio Build', desc: 'Create 2 production-ready projects demonstrating core strengths' },
        { phase: 'Phase 3', title: 'Placement Drive', desc: 'Resume Optimization & AI Interview Simulations' }
      ]
    };
    runScanAnimation(customResult);
  };

  const handleDownloadReport = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header Gradient Top Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full w-8 h-8 flex items-center justify-center transition-colors z-10"
          >
            ✕
          </button>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 rounded-xl bg-purple-500/20 text-purple-400 text-xl border border-purple-500/30">
                🧠
              </span>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  AI Achievement Analyzer
                </h2>
                <p className="text-xs text-purple-300/80 font-medium">
                  Instant AI Career Diagnosis &amp; Skill Gap Roadmap
                </p>
              </div>
            </div>

            {!result && !isAnalyzing && (
              <>
                <div className="flex gap-2 p-1 bg-slate-800/80 rounded-xl border border-slate-700/60 my-6">
                  <button
                    onClick={() => setActiveTab('preset')}
                    className={`flex-1 py-2.5 px-4 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                      activeTab === 'preset'
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    ⚡ Demo Profiles
                  </button>
                  <button
                    onClick={() => setActiveTab('upload')}
                    className={`flex-1 py-2.5 px-4 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                      activeTab === 'upload'
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    📤 Upload Resume / Input Skills
                  </button>
                </div>

                {activeTab === 'preset' ? (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-300">
                      Select a sample student profile to test the AI analyzer engine:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {Object.entries(SAMPLE_PROFILES).map(([key, item]) => (
                        <div
                          key={key}
                          onClick={() => setSelectedPresetKey(key)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            selectedPresetKey === key
                              ? 'border-purple-500 bg-purple-900/30 shadow-lg shadow-purple-500/20'
                              : 'border-slate-800 bg-slate-800/40 hover:border-slate-700'
                          }`}
                        >
                          <div className="text-sm font-bold text-white mb-1">{item.label}</div>
                          <div className="text-xs text-purple-400 font-medium">Match: {item.role}</div>
                          <div className="text-[11px] text-emerald-400 font-semibold mt-2">
                            Score: {item.profile.score}%
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleStartPresetScan}
                      className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all"
                    >
                      🚀 Run AI Analysis Simulation →
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Upload Document (Resume, Certificates, Transcript)
                      </label>
                      <div className="border-2 border-dashed border-purple-500/30 hover:border-purple-500/60 bg-slate-800/40 rounded-xl p-6 text-center cursor-pointer transition-colors relative">
                        <input
                          type="file"
                          accept=".pdf,.docx,.png,.jpg"
                          onChange={handleFileUpload}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <span className="text-3xl block mb-2">📄</span>
                        <p className="text-sm font-medium text-slate-200">
                          {file ? file.name : 'Drag & drop your file here, or click to browse'}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">Supports PDF, DOCX, PNG (Max 10MB)</p>
                      </div>
                    </div>

                    <div className="text-center text-xs text-slate-500 font-semibold uppercase">Or</div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Type / Paste Skills &amp; Projects
                      </label>
                      <textarea
                        value={manualText}
                        onChange={(e) => setManualText(e.target.value)}
                        placeholder="e.g. 3rd year CSE student, skilled in Python, React, Data Structures, 8.4 CGPA..."
                        className="w-full h-24 bg-slate-800/80 border border-slate-700 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <button
                      onClick={handleStartUploadScan}
                      className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all"
                    >
                      ⚡ Analyze My Custom Profile →
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Scanning State */}
            {isAnalyzing && (
              <div className="py-12 text-center space-y-6">
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin" />
                  <div className="absolute inset-2 rounded-full border-4 border-blue-500/20 border-b-blue-400 animate-spin flex items-center justify-center">
                    <span className="text-2xl animate-pulse">🧠</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{scanStep}</h3>
                  <div className="w-full max-w-md mx-auto h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-400 transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-purple-300 font-semibold mt-2">{progress}% Completed</p>
                </div>
              </div>
            )}

            {/* Analysis Result */}
            {result && !isAnalyzing && (
              <div className="space-y-6 animate-fadeIn">
                {/* Result Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 bg-slate-800/80 border border-slate-700 rounded-xl text-center">
                    <div className="text-xs font-semibold text-slate-400 uppercase">AI Match Score</div>
                    <div className="text-3xl font-black text-emerald-400 mt-1">{result.score}%</div>
                    <div className="text-[11px] text-emerald-400/80 font-medium">High Career Fit</div>
                  </div>

                  <div className="p-4 bg-slate-800/80 border border-slate-700 rounded-xl text-center md:col-span-2">
                    <div className="text-xs font-semibold text-slate-400 uppercase">Top Career Recommendation</div>
                    <div className="text-xl font-bold text-blue-400 mt-1">{result.matchRole}</div>
                    <div className="flex items-center justify-center gap-4 text-xs text-slate-300 mt-1">
                      <span>💰 {result.salary}</span>
                      <span>{result.demand}</span>
                    </div>
                  </div>
                </div>

                {/* Strengths vs Gaps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-xl">
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span>✅</span> Verified Key Strengths
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-200">
                      {result.strengths.map((s, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-amber-950/20 border border-amber-500/20 rounded-xl">
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span>🎯</span> Priority Skill Gaps to Bridge
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-200">
                      {result.gaps.map((g, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* AI Roadmap */}
                <div className="p-4 bg-slate-800/50 border border-purple-500/20 rounded-xl">
                  <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-3">
                    🗺️ Recommended Career Roadmap Phases
                  </h4>
                  <div className="space-y-2.5">
                    {result.roadmap.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-2.5 bg-slate-800/80 border border-slate-700/60 rounded-lg">
                        <span className="px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[11px] font-bold rounded">
                          {step.phase}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-white">{step.title}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleDownloadReport}
                    className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs md:text-sm shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all"
                  >
                    {downloadSuccess ? '✅ Report Saved!' : '📄 Download Full PDF Report'}
                  </button>

                  <button
                    onClick={() => {
                      setResult(null);
                      setIsAnalyzing(false);
                    }}
                    className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-xs md:text-sm border border-slate-700 transition-colors"
                  >
                    🔄 Analyze Another Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AnalyzerModal;
