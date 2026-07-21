import { Career } from '../components/explorer/CareerSwipeCard'; // Might need to update this import later

export interface DetailedCareer extends Career {
  yoyGrowth: string;
  demandStatus: string;
  globalSalary: string;
  entryTime: string;
  difficulty: string;
  remoteFlexibility: string;
  wlb: string;
  aiScore: number;
  aiImpact: string;
  automationRisk: string;
  outlook2035: string;
  whatYouWillLearn: string;
  dayInTheLife: string[];
  technicalSkills: string[];
  softSkills: string[];
  checklist: { name: string; importance: string }[];
  projects: string;
  internships: string;
  portfolio: string;
  aiSuggestions: string[];
  eligibility: string;
  exams: string[];
  degrees: string[];
  certifications: string[];
  roadmap: {
    beginner: string;
    intermediate: string;
    advanced: string;
    steps: string[];
  };
  hiring: string[];
  trajectories: { level: string; title: string; salary: string }[];
  resources: {
    general: string;
    books: string;
    youtube: string;
    websites: string;
  };
  related: string[];
  bestSuitedFor: string;
}

export const generateMockCareerDetails = (career: Career): DetailedCareer => {
  // Use a pseudo-random hash of the id/title to make the mock data consistent per career
  const hash = career.title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const techSkillsPool = ['Python/C++', 'Cloud Architecture', 'System Design', 'API Integration', 'Data Structures', 'React/Node.js', 'SQL/NoSQL', 'Machine Learning'];
  const softSkillsPool = ['Effective Communication', 'Cross-functional Leadership', 'Critical Thinking', 'Negotiation & Strategy', 'Adaptability'];
  
  return {
    ...career,
    yoyGrowth: `${(15 + (hash % 15))}% YoY Growth`,
    demandStatus: `Exponential Growth (${20 + (hash % 15)}%+ YoY Demand)`,
    globalSalary: '$90,000 - $180,000 / year',
    entryTime: '3 - 6 months',
    difficulty: 'Rigorous to Hard (Requires unyielding discipline and deep consistency)',
    remoteFlexibility: 'Remote: High',
    wlb: 'Flexible / Good',
    aiScore: 85 + (hash % 15),
    aiImpact: 'Highly Synergistic: Artificial intelligence acts as a powerful multiplier, accelerating daily research, analysis, and routine workflow execution.',
    automationRisk: 'Low Risk: Requires deep human empathy, strategic complex judgment, creative problem solving, and adaptive multi-variable decision making.',
    outlook2035: 'Extremely bright and resilient; highly integrated with next-generation artificial intelligence, autonomous automation grids, and global digital integration.',
    whatYouWillLearn: `Master the end-to-end theoretical principles, deep analytical frameworks, and practical real-world production execution required for ${career.title}.`,
    dayInTheLife: [
      'Write and test scalable code using modern frameworks',
      'Review pull requests and optimize architecture',
      'Collaborate with PMs to deliver new user features'
    ],
    technicalSkills: techSkillsPool.slice(0, 3 + (hash % 3)),
    softSkills: softSkillsPool.slice(0, 3 + (hash % 3)),
    checklist: [
      { name: 'Data Structures & Algorithms', importance: 'Core' },
      { name: 'Web/App Development', importance: 'Core' },
      { name: 'System Design', importance: 'Advanced' },
      { name: 'Version Control (Git)', importance: 'Essential' },
      { name: 'Database Management', importance: 'Important' }
    ],
    projects: `Architect an end-to-end full-scale real-world implementation addressing a core challenge in ${career.title}. Integrate advanced artificial intelligence APIs or data automation scripts to streamline manual workflows. Compile a comprehensive, empirically verified case study with complete financial and efficiency metrics.`,
    internships: 'Target elite tier-1 multinational enterprise summer internship programs and technical academies. Apply to fast-growing, highly innovative venture-backed startups for intense hands-on ownership. Pursue structured academic research assistantships under veteran university professors or national institutes.',
    portfolio: 'Create an ultra-clean personal portfolio website showcasing complete end-to-end working case studies. Ensure every project details the exact problem statement, architectural solution, and measurable business ROI. Maintain an active, highly professional LinkedIn and GitHub presence detailing continuous daily upskilling.',
    aiSuggestions: [
      'Learn System Design on Educative.io (free tier available)',
      'Build a full-stack project using React + Node.js + PostgreSQL',
      'Solve 3 LeetCode medium problems daily for 30 days',
      'Get AWS Cloud Practitioner cert to stand out',
      'Follow "Coding with Mosh" on YouTube for practical skills'
    ],
    eligibility: 'B.Tech / B.Sc / BCA / Proven open-source GitHub contributions and practical portfolio. | Stream: Science (PCM) or Formal Logic / Computer Science background preferred.',
    exams: ['GATE / JEE Advanced', 'BITSAT / State Engineering Exams', 'Direct Portfolio / Skill Screening'],
    degrees: ['B.Tech in Computer Science / IT', 'B.Sc / M.Sc in Mathematics & Computing', 'BCA / MCA Specializations'],
    certifications: ['AWS Certified Developer', 'Meta Frontend Professional', 'CKAD'],
    roadmap: {
      beginner: `Acquire fundamental theoretical principles and clear basic academic qualifications for ${career.title}. Engage with structured online specializations, textbooks, and interactive problem-solving modules. Join top industry community platforms, student forums, and professional networking groups.`,
      intermediate: 'Attain advanced tool mastery, earn accredited certifications, and secure foundational internships. Collaborate on real-world team capstone projects to build a verifiable, highly competitive portfolio. Participate in national-level competitions, hackathons, or rigorous institutional screenings.',
      advanced: 'Deliver high-impact production execution in senior leadership or specialist technical roles. Continuously integrate breakthrough artificial intelligence tools to multiply daily workflow efficiency. Publish empirical case studies, deliver keynote presentations, and mentor incoming junior talent.',
      steps: [
        'Learn Python or Java — build 2 small projects',
        'Master DSA on LeetCode (medium level)',
        'Build 3 portfolio projects with GitHub',
        'Apply for software internships',
        'Target product companies for placement'
      ]
    },
    hiring: ['Google', 'Microsoft', 'Amazon', 'Atlassian', 'Startups'],
    trajectories: [
      { level: 'ENTRY-LEVEL', title: `Junior ${career.title}`, salary: '₹6–9 LPA' },
      { level: 'MID-LEVEL', title: `Senior ${career.title}`, salary: '₹10–22 LPA' },
      { level: 'SENIOR-LEVEL', title: 'Lead/Director', salary: '₹22–45+ LPA' }
    ],
    resources: {
      general: 'Coursera Flagship Specializations, Udemy Premium Masterclasses, MIT OpenCourseWare Academic Lectures, NPTEL Core Engineering Streams',
      books: '"Mastering the Fundamentals of Software Engineering" by Leading Domain Veterans, "Atomic Habits" by James Clear (For deep practice consistency), "Deep Work" by Cal Newport (For extreme focus and cognitive productivity)',
      youtube: 'FreeCodeCamp (Tech Mastery), Veritasium (Science & Logic), Y Combinator (Business Strategy), Domain-Specific Masterclass Channels',
      websites: 'Roadmap.sh (Career Pathways), Medium / Towards Data Science (Case Studies), Official Corporate & Governmental Documentation Portals'
    },
    related: ['AI Solutions Architect ↗', 'Cloud DevOps Commander ↗'],
    bestSuitedFor: 'Logical problem-solvers who love building products'
  };
};
