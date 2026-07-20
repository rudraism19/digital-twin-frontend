import React, { useState, useRef, useEffect } from 'react';

const AIChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Hello! I am your AI Career Advisor. How can I help you map out your future today?' }
  ]);
  const [input, setInput] = useState('');
  const [activeMode, setActiveMode] = useState('advisor');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const currentInput = input;
    setInput('');

    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: `As your ${activeMode}, I recommend exploring this further. This is a simulated response to: "${currentInput}"` 
      }]);
    }, 1000);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        title="Talk to Career AI"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
          color: 'white',
          fontSize: '1.8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 10px 25px rgba(37, 99, 235, 0.5)',
          zIndex: 9999,
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: isOpen ? 'scale(0)' : 'scale(1)',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = isOpen ? 'scale(0)' : 'scale(1)')}
      >
        🤖
        <div style={{
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          background: '#ef4444',
          color: 'white',
          fontSize: '0.65rem',
          fontWeight: 'bold',
          padding: '2px 6px',
          borderRadius: '10px',
          border: '2px solid #0f172a'
        }}>
          AI
        </div>
      </button>

      {/* Chat Panel */}
      <div
        style={{
          position: 'fixed',
          bottom: isOpen ? '2rem' : '-100%',
          right: '2rem',
          width: '380px',
          height: '600px',
          maxHeight: '80vh',
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
          zIndex: 10000,
          display: 'flex',
          flexDirection: 'column',
          transition: 'bottom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem',
          background: 'rgba(255, 255, 255, 0.03)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem'
            }}>🤖</div>
            <div>
              <div style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem' }}>Career AI Advisor</div>
              <div style={{ color: '#10b981', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontSize: '0.5rem' }}>●</span> Online · Multi-Agent
              </div>
            </div>
          </div>
          <button 
            onClick={toggleChat}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              fontSize: '1.25rem',
              cursor: 'pointer',
              padding: '0.25rem',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            ✕
          </button>
        </div>

        {/* AI Modes / Agents */}
        <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', gap: '0.5rem', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {[
            { id: 'advisor', label: '🎯 Advisor' },
            { id: 'mentor', label: '📚 Mentor' },
            { id: 'coach', label: '🎤 Coach' },
            { id: 'predictor', label: '🔮 Predictor' }
          ].map(mode => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              style={{
                background: activeMode === mode.id ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                border: `1px solid ${activeMode === mode.id ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
                color: activeMode === mode.id ? '#60a5fa' : '#94a3b8',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div style={{ flex: 1, padding: '1.25rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%',
              background: msg.role === 'user' ? '#2563eb' : 'rgba(255, 255, 255, 0.05)',
              color: 'white',
              padding: '0.75rem 1rem',
              borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              fontSize: '0.9rem',
              lineHeight: 1.5,
              border: msg.role === 'ai' ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
            }}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about your career..."
              style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '0.75rem 1rem',
                color: 'white',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            <button 
              onClick={handleSend}
              style={{
                background: '#2563eb',
                border: 'none',
                color: 'white',
                width: '42px',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#1d4ed8')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#2563eb')}
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatButton;
