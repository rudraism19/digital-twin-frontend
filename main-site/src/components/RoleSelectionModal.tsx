import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelectionModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user has already selected a role
    const hasSelectedRole = localStorage.getItem('dtv_role_selected');
    if (!hasSelectedRole) {
      setIsOpen(true);
    }
  }, []);

  const handleRoleSelect = (role: string) => {
    localStorage.setItem('dtv_role_selected', role);
    setIsOpen(false);
    
    if (role === 'parent') {
      navigate('/parent');
    }
    // If student, they stay on the current flow, personalized dashboard logic would pick up the local storage value.
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        padding: '1rem',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '2.5rem',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#ffffff', fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          Welcome to Digital Twin Verse
        </h2>
        <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '2rem' }}>
          First question: Are you a school student or a college student? Choose one to personalize your dashboard.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button
            onClick={() => handleRoleSelect('school')}
            style={{
              background: 'rgba(30, 58, 138, 0.4)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              color: '#ffffff',
              padding: '1rem',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(30, 58, 138, 0.6)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(30, 58, 138, 0.4)')}
          >
            School Student (Class 5-12)
          </button>
          
          <button
            onClick={() => handleRoleSelect('college')}
            style={{
              background: 'rgba(63, 63, 70, 0.4)',
              border: '1px solid rgba(113, 113, 122, 0.3)',
              color: '#ffffff',
              padding: '1rem',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(63, 63, 70, 0.6)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(63, 63, 70, 0.4)')}
          >
            College Student
          </button>

          <button
            onClick={() => handleRoleSelect('parent')}
            style={{
              background: 'rgba(67, 56, 202, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: '#a78bfa',
              padding: '1rem',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(67, 56, 202, 0.2)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(67, 56, 202, 0.1)')}
          >
            Parent Portal
          </button>
        </div>

        <p style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '2rem' }}>
          Your selection only saves on this device.
        </p>
      </div>
    </div>
  );
};

export default RoleSelectionModal;
