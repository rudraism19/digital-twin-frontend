import React, { useState } from 'react';

interface PaymentModalProps {
  onClose: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  const [showProofModal, setShowProofModal] = useState(false);

  return (
    <>
      <div
        id="rzp-payment-modal"
        className="wa-redirect-ov"
        style={{
          display: 'flex',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflowY: 'auto',
          padding: '3rem 1rem',
          justifyContent: 'center',
          alignItems: 'flex-start',
          zIndex: 9999999,
          backdropFilter: 'blur(20px)',
          background: 'rgba(5, 7, 12, 0.85)',
        }}
      >
        <div
          className="mod-wrap"
          style={{
            margin: 'auto',
            maxWidth: '450px',
            width: '100%',
            textAlign: 'center',
            padding: '2.5rem',
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(232, 140, 42, 0.4)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
            borderRadius: '24px',
          }}
        >
          <div
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #f5a94e, #e88c2a)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.2rem',
              margin: '0 auto 1.5rem',
              boxShadow: '0 10px 25px rgba(232, 140, 42, 0.4)',
            }}
          >
            💎
          </div>
          <h2 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Secure Payment Gateway
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '2rem' }}>
            Click the secure Razorpay button below to complete your payment via UPI, QR Code Scanner, or Card.
          </p>

          <div
            style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '80px',
              marginBottom: '1.5rem',
            }}
          >
            {/* Razorpay buttons go here */}
            <span style={{ color: '#e2e8f0' }}>Razorpay Integration Pending</span>
          </div>

          <div
            style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              padding: '1.2rem',
              borderRadius: '16px',
              textAlign: 'left',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.3rem', marginRight: '0.5rem' }}>⚠️</span>
              <strong style={{ color: '#fca5a5', fontSize: '1rem' }}>Important UPI Payment Notice</strong>
            </div>
            <p style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: 1.4, marginBottom: '0.8rem' }}>
              If clicking <strong>PhonePe / GPay / Paytm</strong> inside Razorpay shows <em>"Confirming Payment..."</em>{' '}
              without automatically opening your UPI app, your browser/webview is blocking external app popups.
            </p>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.4 }}>
              <strong>👉 Guaranteed Fix:</strong> When Razorpay opens, choose <strong>"Show All Options" &rarr; "QR Code" / "UPI ID"</strong>{' '}
              to scan/pay directly. Once paid, click <strong>"✅ I've Paid! Upload Payment Proof"</strong> below for instant activation!
            </p>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '1rem' }}>
              Already completed your payment? Upload your receipt to instantly update your plan tracker & access expiry.
            </p>
            <button
              type="button"
              className="tool-btn"
              style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                border: 'none',
                color: '#fff',
                width: '100%',
                padding: '1rem',
                borderRadius: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
                marginBottom: '1rem',
                fontSize: '1rem',
              }}
              onClick={() => setShowProofModal(true)}
            >
              ✅ I've Paid! Upload Payment Proof
            </button>
          </div>

          <button
            type="button"
            className="tool-btn"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              padding: '0.8rem 2rem',
              borderRadius: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>

      {showProofModal && (
        <div
          id="payment-proof-modal"
          className="wa-redirect-ov"
          style={{
            display: 'flex',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflowY: 'auto',
            padding: '3rem 1rem',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999999,
            backdropFilter: 'blur(20px)',
            background: 'rgba(5, 7, 12, 0.85)',
          }}
        >
          <div
            className="mod-wrap"
            style={{
              maxWidth: '500px',
              width: '100%',
              textAlign: 'left',
              padding: '2.5rem',
              background: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
              borderRadius: '24px',
            }}
          >
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.2rem',
                margin: '0 auto 1.5rem',
                boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)',
                textAlign: 'center',
              }}
            >
              🛡️
            </div>
            <h2 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem', textAlign: 'center' }}>
              Verify Payment Proof
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '2rem', textAlign: 'center' }}>
              Securely upload your payment screenshot/PDF along with your details. Our backend will instantly verify and update your plan expiry tracker.
            </p>

            <form
              id="proof-upload-form"
              onSubmit={(e) => {
                e.preventDefault();
                setShowProofModal(false);
                onClose();
              }}
            >
              {/* Form Fields */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.2rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your mobile number"
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.2rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Select Plan Duration *
                </label>
                <select
                  required
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.2rem',
                    background: 'rgba(15, 23, 42, 1)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                  }}
                >
                  <option value="1m">Starter Plan (1 Month)</option>
                  <option value="6m">Most Popular Plan (6 Months)</option>
                  <option value="12m">Best Value Plan (12 Months)</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Transaction ID / Reference No. *
                </label>
                <input
                  type="text"
                  required
                  placeholder="UPI Ref / Transaction ID"
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.2rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Payment Proof (Screenshot or PDF) *
                </label>
                <input
                  type="file"
                  required
                  accept="image/*,.pdf"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px dashed rgba(16, 185, 129, 0.4)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  className="tool-btn"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    padding: '0.8rem 2rem',
                    borderRadius: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => setShowProofModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="tool-btn"
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    border: 'none',
                    color: '#fff',
                    padding: '0.8rem 2.5rem',
                    borderRadius: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Submit Verification →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
