import { DetailedCareer } from '../../utils/mockCareerDetails';
import { 
  X as _X, Star as _Star, ArrowRight as _ArrowRight, 
  Trophy as _Trophy, BookOpen as _BookOpen, Play as _Play, 
  Globe as _Globe, Lightbulb as _Lightbulb 
} from 'lucide-react';

const X = _X as any;
const Star = _Star as any;
const ArrowRight = _ArrowRight as any;
const Trophy = _Trophy as any;
const BookOpen = _BookOpen as any;
const Play = _Play as any;
const Globe = _Globe as any;
const Lightbulb = _Lightbulb as any;

interface CareerDetailModalProps {
  career: DetailedCareer;
  onClose: () => void;
}

export default function CareerDetailModal({ career, onClose }: CareerDetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto pt-24 pb-12">
      <div className="relative w-full max-w-6xl bg-[#0a0a0a] rounded-2xl border border-gray-800 shadow-2xl my-auto">
        
        {/* Header Section */}
        <div className="p-8 border-b border-gray-800 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg flex items-center gap-2 transition-colors"
          >
            <X size={16} /> Close
          </button>
          
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-gray-400">💻</span> {career.title}
            </h1>
          </div>
          <p className="text-gray-400 mb-6 max-w-3xl leading-relaxed">{career.description}</p>
          
          <div className="flex flex-wrap gap-3 text-xs font-medium">
            <span className="px-3 py-1.5 bg-orange-900/30 text-orange-400 border border-orange-900/50 rounded flex items-center gap-1.5">
               💰 India: {career.salary} | Global: {career.globalSalary}
            </span>
            <span className="px-3 py-1.5 bg-emerald-900/30 text-emerald-400 border border-emerald-900/50 rounded flex items-center gap-1.5">
               📈 Demand: {career.demandStatus}
            </span>
            <span className="px-3 py-1.5 bg-yellow-900/30 text-yellow-400 border border-yellow-900/50 rounded flex items-center gap-1.5">
               ⏱ Entry: {career.entryTime} | Diff: 🔥 {career.difficulty}
            </span>
            <span className="px-3 py-1.5 bg-blue-900/30 text-blue-400 border border-blue-900/50 rounded flex items-center gap-1.5">
               💼 {career.category}
            </span>
            <span className="px-3 py-1.5 bg-gray-800 text-gray-300 border border-gray-700 rounded flex items-center gap-1.5">
               {career.remoteFlexibility}
            </span>
            <span className="px-3 py-1.5 bg-gray-800 text-gray-300 border border-gray-700 rounded flex items-center gap-1.5">
               {career.wlb}
            </span>
          </div>
        </div>

        <div className="p-8">
          {/* AI Career Prediction */}
          <div className="mb-8 bg-[#111111] border border-orange-900/40 rounded-xl p-6 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex-shrink-0 text-center">
              <Star className="text-orange-500 mx-auto mb-2" fill="currentColor" size={32} />
              <div className="text-3xl font-extrabold text-orange-500">{career.aiScore}/100</div>
              <div className="text-orange-400 text-sm font-medium">(Premium AI Career Fit)%</div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-white font-bold text-lg mb-1">AI Career Prediction & Future Outlook</h3>
              <p className="text-gray-400 text-sm mb-4">Possible Match based on market demand, your skill progress, and profile alignment.</p>
              
              <div className="space-y-2 text-sm text-gray-300">
                <p><span className="text-white font-semibold">⚡ AI Impact:</span> {career.aiImpact}</p>
                <p><span className="text-white font-semibold">🛡️ Automation Risk:</span> {career.automationRisk}</p>
                <p><span className="text-white font-semibold">🚀 2035 Outlook:</span> {career.outlook2035}</p>
              </div>
              
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 bg-emerald-900/40 text-emerald-400 border border-emerald-800/50 rounded text-xs">High Demand</span>
                <span className="px-2 py-1 bg-red-900/40 text-red-400 border border-red-800/50 rounded text-xs">Needs Prep</span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between text-sm font-bold text-white mb-2">
              <span>Skills Progress</span>
              <span>0%</span>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 w-0"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <div className="space-y-10">
              
              <section>
                <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
                  <span className="text-orange-500">—</span> 💡 What You Will Learn
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {career.whatYouWillLearn}
                </p>
              </section>

              <section>
                <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
                  <span className="text-orange-500">—</span> ⏰ A Day in the Life
                </h3>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                  {career.dayInTheLife.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
                  <span className="text-orange-500">—</span> 💻 Technical & Software Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {career.technicalSkills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-blue-900/20 text-blue-400 border border-blue-900/50 rounded-lg text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
                  <span className="text-orange-500">—</span> 🤝 Soft Skills & Traits
                </h3>
                <div className="flex flex-wrap gap-2">
                  {career.softSkills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
                  <span className="text-orange-500">—</span> 🛠️ Skills to Master (Checklist)
                </h3>
                <div className="space-y-3">
                  {career.checklist.map((item, i) => (
                    <label key={i} className="flex items-center justify-between p-3 border border-gray-800 rounded-lg hover:bg-gray-800/50 cursor-pointer transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded border border-gray-600 group-hover:border-orange-500 transition-colors"></div>
                        <span className="text-gray-300 text-sm font-medium">{item.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded border ${
                        item.importance === 'Core' ? 'bg-blue-900/30 text-blue-400 border-blue-800/50' :
                        item.importance === 'Advanced' ? 'bg-purple-900/30 text-purple-400 border-purple-800/50' :
                        'bg-gray-800 text-gray-400 border-gray-700'
                      }`}>
                        {item.importance}
                      </span>
                    </label>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
                  <span className="text-orange-500">—</span> 🔬 Projects, Internships & Portfolio
                </h3>
                <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                  <p><span className="text-white font-semibold flex items-center gap-2 mb-1">📁 Projects:</span> {career.projects}</p>
                  <p><span className="text-white font-semibold flex items-center gap-2 mb-1">💼 Internships:</span> {career.internships}</p>
                  <p><span className="text-white font-semibold flex items-center gap-2 mb-1">🌐 Portfolio Building:</span> {career.portfolio}</p>
                </div>
              </section>

              <section>
                <h3 className="text-gray-400 font-bold text-xs uppercase tracking-wider mb-3">Your Notes & Remarks</h3>
                <textarea 
                  className="w-full h-32 bg-gray-900 border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-orange-500 resize-none mb-3"
                  placeholder="Write progress notes, targets, or plans here..."
                ></textarea>
                <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-lg flex items-center gap-2 transition-colors">
                   Save Notes
                </button>
              </section>

              <section className="bg-blue-950/20 border border-blue-900/50 rounded-xl p-6">
                <h3 className="text-blue-400 font-bold flex items-center gap-2 mb-4">
                  🤖 AI Suggestions for You
                </h3>
                <ul className="space-y-3">
                  {career.aiSuggestions.map((sug, i) => (
                    <li key={i} className="text-blue-200 text-sm flex items-start gap-2">
                      <ArrowRight size={16} className="mt-0.5 flex-shrink-0 text-blue-500" />
                      {sug}
                    </li>
                  ))}
                </ul>
              </section>
              
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              
              <section>
                <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
                  <span className="text-orange-500">—</span> 🎓 Academics & Eligibility
                </h3>
                <div className="space-y-4">
                  <p className="text-sm text-gray-300">
                    <span className="text-white font-semibold">Eligibility:</span> {career.eligibility}
                  </p>
                  <div>
                    <span className="text-white font-semibold text-sm block mb-2">Exams:</span>
                    <div className="flex flex-wrap gap-2">
                      {career.exams.map((ex, i) => (
                        <span key={i} className="px-3 py-1 bg-green-900/20 text-green-400 border border-green-900/50 rounded-lg text-xs font-medium">{ex}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm block mb-2">Degrees:</span>
                    <div className="flex flex-wrap gap-2">
                      {career.degrees.map((deg, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-900/20 text-blue-400 border border-blue-900/50 rounded-lg text-xs font-medium">{deg}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm block mb-2">Top Certifications:</span>
                    <div className="space-y-2">
                      {career.certifications.map((cert, i) => (
                        <div key={i} className="p-3 border border-orange-900/30 bg-orange-900/10 rounded-lg text-orange-300 text-sm flex items-center gap-3">
                          <Trophy size={16} className="text-orange-500" /> {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
                  <span className="text-orange-500">—</span> 📍 Comprehensive Step-by-Step Roadmap
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="p-4 border border-gray-800 rounded-xl bg-[#111111] flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-1">Beg</div>
                    <p className="text-sm text-gray-300 leading-relaxed"><strong className="text-white">Beginner:</strong> {career.roadmap.beginner}</p>
                  </div>
                  <div className="p-4 border border-gray-800 rounded-xl bg-[#111111] flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-1">Int</div>
                    <p className="text-sm text-gray-300 leading-relaxed"><strong className="text-white">Intermediate:</strong> {career.roadmap.intermediate}</p>
                  </div>
                  <div className="p-4 border border-gray-800 rounded-xl bg-[#111111] flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-1">Adv</div>
                    <p className="text-sm text-gray-300 leading-relaxed"><strong className="text-white">Advanced:</strong> {career.roadmap.advanced}</p>
                  </div>
                </div>
                
                <div className="space-y-2 pl-2">
                  {career.roadmap.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 border border-gray-800 rounded-lg">
                      <div className="w-6 h-6 rounded-full border border-orange-500 text-orange-500 flex items-center justify-center text-xs font-bold">{i + 1}</div>
                      <span className="text-sm text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
                  <span className="text-orange-500">—</span> 🏢 Hiring & Market Opportunities
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {career.hiring.map((company, i) => (
                    <span key={i} className="px-3 py-1 bg-green-950 text-green-400 border border-green-900 rounded text-xs font-bold">
                      {company}
                    </span>
                  ))}
                </div>
                <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                  <p><strong className="text-gray-300">🏛 Government Opportunities:</strong> Direct recruitment through central civil service commissions and strategic national public sector units.</p>
                  <p><strong className="text-gray-300">💻 Freelance & Remote:</strong> Command premium hourly billing contracts on elite global consulting talent networks like Toptal and Upwork.</p>
                  <p><strong className="text-gray-300">🚀 Startup & Innovation:</strong> Launch a highly specialized digital SaaS platform automating key bottlenecks in {career.title}.</p>
                </div>
              </section>

              <section>
                <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
                  <span className="text-orange-500">—</span> 📈 Career & Salary Trajectory
                </h3>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
                  {career.trajectories.map((traj, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#0a0a0a] bg-orange-500 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                      <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl border border-gray-800 bg-[#111111]">
                        <div className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-1">{traj.level}</div>
                        <div className="text-white font-bold mb-1">{traj.title}</div>
                        <div className="text-gray-400 text-sm">{traj.salary}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
                  <span className="text-orange-500">—</span> 📚 Recommended Learning Resources
                </h3>
                <div className="space-y-4 text-sm">
                  <p className="text-gray-400 leading-relaxed"><strong className="text-blue-400 flex items-center gap-2 mb-1"><BookOpen size={16}/> General Resources:</strong> {career.resources.general}</p>
                  <p className="text-gray-400 leading-relaxed"><strong className="text-orange-400 flex items-center gap-2 mb-1"><BookOpen size={16}/> Top Books:</strong> {career.resources.books}</p>
                  <p className="text-gray-400 leading-relaxed"><strong className="text-blue-400 flex items-center gap-2 mb-1"><Play size={16}/> YouTube Channels & Courses:</strong> {career.resources.youtube}</p>
                  <p className="text-gray-400 leading-relaxed"><strong className="text-blue-400 flex items-center gap-2 mb-1"><Globe size={16}/> Essential Websites:</strong> {career.resources.websites}</p>
                </div>
              </section>

              <section>
                <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
                  <span className="text-orange-500">—</span> 🔗 Related Careers
                </h3>
                <div className="flex flex-wrap gap-3">
                  {career.related.map((rel, i) => (
                    <button key={i} className="px-4 py-2 border border-blue-900 text-blue-400 rounded-lg hover:bg-blue-900/20 text-sm font-medium transition-colors">
                      {rel}
                    </button>
                  ))}
                </div>
              </section>

              <div className="p-6 border border-orange-900/50 bg-orange-950/20 rounded-xl mt-8">
                <h4 className="text-orange-400 font-bold flex items-center gap-2 mb-2">
                  <Lightbulb size={16} /> Best Suited For
                </h4>
                <p className="text-gray-300 text-sm mb-4">{career.bestSuitedFor}</p>
                <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-lg transition-colors">
                  Ask AI for Detailed Plan
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
