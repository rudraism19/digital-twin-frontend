import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AIAnalysisPreviewCardProps {
  onOpenModal: () => void;
}

interface ProfileData {
  id: string;
  name: string;
  score: number;
  match: string;
  phases: { name: string; bg: string; border: string; color: string }[];
  tags: string[];
}

const PROFILES: ProfileData[] = [
  {
    id: 'aiml',
    name: 'AI & Machine Learning',
    score: 87,
    match: 'AI / ML Engineer',
    phases: [
      { name: 'Foundation', bg: 'rgba(79,142,247,.15)', border: 'rgba(79,142,247,.3)', color: '#93c5fd' },
      { name: 'Specialise', bg: 'rgba(167,139,250,.15)', border: 'rgba(167,139,250,.3)', color: '#c4b5fd' },
      { name: 'Internship', bg: 'rgba(34,211,153,.12)', border: 'rgba(34,211,153,.3)', color: '#6ee7b7' },
      { name: 'Job Ready', bg: 'rgba(251,191,36,.12)', border: 'rgba(251,191,36,.3)', color: '#fde68a' }
    ],
    tags: ['Python', 'PyTorch', 'Data Structures', 'Git', 'MLOps']
  },
  {
    id: 'robotics',
    name: 'Robotics & Hardware',
    score: 91,
    match: 'Robotics Systems Architect',
    phases: [
      { name: 'Circuits', bg: 'rgba(251,191,36,.12)', border: 'rgba(251,191,36,.3)', color: '#fde68a' },
      { name: 'C/C++ & ROS', bg: 'rgba(79,142,247,.15)', border: 'rgba(79,142,247,.3)', color: '#93c5fd' },
      { name: 'Control Systems', bg: 'rgba(167,139,250,.15)', border: 'rgba(167,139,250,.3)', color: '#c4b5fd' },
      { name: 'Industry 4.0', bg: 'rgba(34,211,153,.12)', border: 'rgba(34,211,153,.3)', color: '#6ee7b7' }
    ],
    tags: ['STM32', 'C/C++', 'ROS2', 'Kinematics', 'Sensors']
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Software',
    score: 85,
    match: 'Cloud Software Engineer',
    phases: [
      { name: 'Frontend', bg: 'rgba(167,139,250,.15)', border: 'rgba(167,139,250,.3)', color: '#c4b5fd' },
      { name: 'Backend APIs', bg: 'rgba(79,142,247,.15)', border: 'rgba(79,142,247,.3)', color: '#93c5fd' },
      { name: 'Cloud & DevOps', bg: 'rgba(34,211,153,.12)', border: 'rgba(34,211,153,.3)', color: '#6ee7b7' },
      { name: 'Full Scale', bg: 'rgba(251,191,36,.12)', border: 'rgba(251,191,36,.3)', color: '#fde68a' }
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker']
  }
];

const AIAnalysisPreviewCard: React.FC<AIAnalysisPreviewCardProps> = ({ onOpenModal }) => {
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  const currentProfile = PROFILES[selectedProfileIndex];

  const handleSwitchProfile = (idx: number) => {
    if (idx === selectedProfileIndex && !isScanning) return;
    setIsScanning(true);
    setTimeout(() => {
      setSelectedProfileIndex(idx);
      setIsScanning(false);
    }, 450);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -10,
        scale: 1.025,
        rotateY: 0,
        rotateX: 0,
        boxShadow: '0 32px 90px rgba(123, 47, 255, 0.35), 0 12px 35px rgba(52, 211, 153, 0.2)',
        borderColor: 'rgba(167, 139, 250, 0.55)'
      }}
      className="analyzer-card relative group cursor-pointer"
      style={{
        transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease, border-color 0.4s ease',
        willChange: 'transform, box-shadow'
      }}
    >
      {/* Dynamic Animated Gradient Top Line */}
      <div
        className="card-top-line group-hover:h-1.5 transition-all duration-300"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #2a7de1, #7b2fff, #34d399, #f59e0b)',
          backgroundSize: '200% 100%',
          animation: 'gradientMove 3s ease infinite'
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}
      >
        <div
          style={{
            fontSize: '0.72rem',
            fontWeight: '700',
            letterSpacing: '0.14em',
            color: 'var(--mu, #94a3b8)',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem'
          }}
        >
          <span
            style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399' }}
            className="animate-pulse shadow-sm shadow-emerald-400"
          />
          <span className="group-hover:text-purple-300 transition-colors">AI Analysis Live Preview</span>
        </div>

        {/* Interactive Profile Selector Pills with Micro-Animations */}
        <div style={{ display: 'flex', gap: '0.35rem' }}>
          {PROFILES.map((p, idx) => (
            <motion.button
              key={p.id}
              type="button"
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.94 }}
              onClick={(e) => {
                e.stopPropagation();
                handleSwitchProfile(idx);
              }}
              style={{
                fontSize: '0.68rem',
                fontWeight: '700',
                padding: '0.22rem 0.6rem',
                borderRadius: '8px',
                border: idx === selectedProfileIndex ? '1px solid rgba(167,139,250,.8)' : '1px solid rgba(255,255,255,.1)',
                background: idx === selectedProfileIndex ? 'linear-gradient(135deg, rgba(167,139,250,.35), rgba(79,142,247,.35))' : 'rgba(255,255,255,.04)',
                color: idx === selectedProfileIndex ? '#ffffff' : '#94a3b8',
                boxShadow: idx === selectedProfileIndex ? '0 4px 12px rgba(167,139,250,.3)' : 'none',
                cursor: 'pointer',
                transition: 'border 0.2s ease, background 0.2s ease, color 0.2s ease'
              }}
            >
              {p.id.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', position: 'relative' }}>
        {/* Scanning Overlay Effect */}
        <AnimatePresence>
          {isScanning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 20,
                background: 'rgba(10, 18, 32, 0.88)',
                backdropFilter: 'blur(6px)',
                borderRadius: '14px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                color: '#a78bfa',
                border: '1px solid rgba(167,139,250,0.3)'
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  border: '3px solid rgba(167,139,250,.2)',
                  borderTopColor: '#34d399',
                  borderRadius: '50%',
                  animation: 'spin 0.6s linear infinite'
                }}
              />
              <span style={{ fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.05em' }}>
                🧠 AI Scanning Vector Credentials...
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stat 1: Confidence Score */}
        <motion.div
          whileHover={{ x: 6, scale: 1.015, borderColor: 'rgba(52, 211, 153, 0.45)', backgroundColor: 'rgba(15, 28, 48, 0.85)' }}
          className="glass-stat"
          style={{
            transition: 'transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--wh2, #f8fafc)' }}>
            AI Confidence Score
          </span>
          <motion.strong
            key={currentProfile.score}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ fontSize: '1.35rem', color: '#34d399', fontWeight: '800', textShadow: '0 0 12px rgba(52, 211, 153, 0.4)' }}
          >
            {currentProfile.score}%
          </motion.strong>
        </motion.div>

        {/* Stat 2: Best Career Match */}
        <motion.div
          whileHover={{ x: 6, scale: 1.015, borderColor: 'rgba(91, 163, 245, 0.45)', backgroundColor: 'rgba(15, 28, 48, 0.85)' }}
          className="glass-stat"
          style={{
            transition: 'transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--wh2, #f8fafc)' }}>
            Best Career Match
          </span>
          <motion.strong
            key={currentProfile.match}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ fontSize: '0.92rem', color: '#5ba3f5', fontWeight: '700', textShadow: '0 0 10px rgba(91, 163, 245, 0.3)' }}
          >
            {currentProfile.match}
          </motion.strong>
        </motion.div>

        {/* Stat 3: Roadmap Phases */}
        <motion.div
          whileHover={{ borderColor: 'rgba(167, 139, 250, 0.35)', backgroundColor: 'rgba(167,139,250,.12)' }}
          style={{
            padding: '0.8rem 1rem',
            background: 'rgba(167,139,250,.07)',
            border: '1px solid rgba(167,139,250,.18)',
            borderRadius: '12px',
            transition: 'all 0.3s ease'
          }}
        >
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: '700',
              color: 'var(--mu, #94a3b8)',
              marginBottom: '0.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>ROADMAP PHASES</span>
            <span style={{ fontSize: '0.68rem', color: '#34d399', fontWeight: '700' }}>✓ AI Verified</span>
          </div>
          <div className="glass-tags">
            {currentProfile.phases.map((ph, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.12, y: -2, boxShadow: '0 6px 16px rgba(0,0,0,0.3)' }}
                className="glass-tag"
                style={{
                  background: ph.bg,
                  borderColor: ph.border,
                  color: ph.color,
                  cursor: 'pointer',
                  transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                {ph.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stat 4: Top Skills Parsed with Hover Micro-Animations */}
        <motion.div
          whileHover={{ borderColor: 'rgba(255, 255, 255, 0.15)', backgroundColor: 'rgba(15, 23, 42, 0.7)' }}
          style={{
            padding: '0.65rem 0.85rem',
            background: 'rgba(15, 23, 42, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            borderRadius: '10px',
            transition: 'all 0.3s ease'
          }}
        >
          <div style={{ fontSize: '0.68rem', fontWeight: '700', color: '#64748b', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>
            KEY SKILLS IDENTIFIED
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {currentProfile.tags.map((tag, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1, y: -2, backgroundColor: 'rgba(52, 211, 153, 0.15)', borderColor: 'rgba(52, 211, 153, 0.4)', color: '#ffffff' }}
                style={{
                  fontSize: '0.68rem',
                  fontWeight: '600',
                  padding: '0.18rem 0.5rem',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,.05)',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255,255,255,.09)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Trigger Interactive Modal with Hover Glow & Slide Arrow */}
        <div style={{ textAlign: 'center', marginTop: '0.3rem' }}>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal();
            }}
            className="btn-reset group/btn"
            style={{
              fontSize: '0.84rem',
              color: 'var(--amb,#e88c2a)',
              fontWeight: '700',
              textDecoration: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 0.8rem',
              borderRadius: '8px',
              background: 'rgba(232, 140, 42, 0.08)',
              border: '1px solid rgba(232, 140, 42, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            <span>Analyze your custom profile</span>
            <motion.span
              className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1"
              style={{ display: 'inline-block' }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default AIAnalysisPreviewCard;
