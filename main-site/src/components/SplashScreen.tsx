import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 800); // fade out duration
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="splash-screen"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        visibility: progress >= 100 ? 'hidden' : 'visible',
      }}
    >
      <div className="splash-logo">
        <img
          src="/img/dtv-logo.jpg"
          alt="DTV"
          width="100"
          height="100"
          style={{
            width: '100px',
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(232, 140, 42, 0.4)',
          }}
        />
        <div className="splash-text">
          Digital<em>Twin Verse</em>
        </div>
      </div>
      <div className="splash-loader">
        <div
          className="splash-loader-bar"
          id="splash-loader-bar"
          style={{
            width: `${progress}%`,
            background: '#37d7ff',
            boxShadow: '0 0 15px #37d7ff',
          }}
        ></div>
      </div>
    </div>
  );
};

export default SplashScreen;
