import React, { useState } from 'react';
import { PaymentModal } from '../components/PaymentModal';

const Pricing: React.FC = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <main className="page active" id="page-main" style={{ backgroundColor: '#0f172a' }}>
      <section className="sec" style={{ paddingTop: '8rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="wrap" style={{ width: '100%', maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
              Unlock DigitalTwin Verse <span style={{ color: '#f59e0b' }}>Premium</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Experience full AI Advisory capabilities, unlimited Career Exploration, advanced Parent Portal insights, and exclusive real-time guidance sessions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            
            {/* 1 Month Plan */}
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em' }}>1 MONTH PLAN</span>
                <span style={{ background: '#334155', color: '#cbd5e1', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>STARTER</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff' }}>₹29</span>
                <span style={{ color: '#94a3b8', fontSize: '1rem' }}> / mo</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1, color: '#cbd5e1', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '1rem' }}>✓ <strong>Full Access</strong> to AI Advisor</li>
                <li style={{ marginBottom: '1rem' }}>✓ Unlimited Career Simulations</li>
                <li style={{ marginBottom: '1rem' }}>✓ Standard Progress Analytics</li>
                <li style={{ marginBottom: '1rem' }}>✓ <strong>Active Parent Portal Link</strong></li>
                <li style={{ marginBottom: '1rem' }}>✓ Daily Career Guidance Tips</li>
              </ul>
              <button 
                onClick={() => setShowPaymentModal(true)}
                style={{ width: '100%', background: '#334155', color: '#ffffff', padding: '1rem', borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', marginTop: '2rem', transition: 'background 0.2s' }}
                onMouseOver={(e) => (e.currentTarget.style.background = '#475569')}
                onMouseOut={(e) => (e.currentTarget.style.background = '#334155')}
              >
                Subscribe Now
              </button>
            </div>

            {/* 6 Months Plan */}
            <div style={{ background: '#1e293b', border: '2px solid #8b5cf6', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', transform: 'scale(1.05)', zIndex: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ color: '#c4b5fd', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em' }}>6 MONTHS PLAN</span>
                <span style={{ background: '#a78bfa', color: '#1e1b4b', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800 }}>⭐ MOST POPULAR</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: 800, color: '#ffffff' }}>₹119</span>
                <span style={{ color: '#94a3b8', fontSize: '1rem' }}> / 6 mos</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1, color: '#cbd5e1', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '1rem' }}>✓ Everything in 1 Month</li>
                <li style={{ marginBottom: '1rem' }}>✓ <strong>Active Parent Portal Link</strong></li>
                <li style={{ marginBottom: '1rem' }}>✓ Advanced Skill Mapping</li>
                <li style={{ marginBottom: '1rem' }}>✓ Comprehensive Reports</li>
                <li style={{ marginBottom: '1rem' }}>✓ Priority Mentor QA Access</li>
              </ul>
              <button 
                onClick={() => setShowPaymentModal(true)}
                style={{ width: '100%', background: '#4c1d95', color: '#ffffff', padding: '1rem', borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', marginTop: '2rem', transition: 'background 0.2s' }}
                onMouseOver={(e) => (e.currentTarget.style.background = '#5b21b6')}
                onMouseOut={(e) => (e.currentTarget.style.background = '#4c1d95')}
              >
                Subscribe Now
              </button>
            </div>

            {/* 12 Months Plan */}
            <div style={{ background: '#1e293b', border: '1px solid #f59e0b', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ color: '#fcd34d', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em' }}>12 MONTHS PLAN</span>
                <span style={{ background: '#f59e0b', color: '#451a03', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800 }}>🚀 BEST VALUE</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff' }}>₹249</span>
                <span style={{ color: '#94a3b8', fontSize: '1rem' }}> / yr</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1, color: '#cbd5e1', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '1rem' }}>✓ <strong>All Premium Features</strong></li>
                <li style={{ marginBottom: '1rem' }}>✓ <strong>Active Parent Portal Link</strong></li>
                <li style={{ marginBottom: '1rem' }}>✓ Dedicated AI Career Advisor</li>
                <li style={{ marginBottom: '1rem' }}>✓ Real-time Guidance Sessions</li>
                <li style={{ marginBottom: '1rem' }}>✓ VIP 24/7 Priority Support</li>
              </ul>
              <button 
                onClick={() => setShowPaymentModal(true)}
                style={{ width: '100%', background: '#f59e0b', color: '#1e1b4b', padding: '1rem', borderRadius: '12px', fontWeight: 800, border: 'none', cursor: 'pointer', marginTop: '2rem', transition: 'background 0.2s' }}
                onMouseOver={(e) => (e.currentTarget.style.background = '#fbbf24')}
                onMouseOut={(e) => (e.currentTarget.style.background = '#f59e0b')}
              >
                Subscribe Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {showPaymentModal && <PaymentModal onClose={() => setShowPaymentModal(false)} />}
    </main>
  );
};

export default Pricing;
