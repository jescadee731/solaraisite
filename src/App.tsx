import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    // Animation du progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setShowContent(true);
          // Redirection instantanée dès que le chargement est terminé
          window.location.href = 'https://apps.apple.com/us/app/solar-ai-tanning-assistant/id6745706560';
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="App">
      <div className="loading-container">
        <div className="solar-icon">
          <div className="sun">
            <div className="sun-rays">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={`ray ray-${i + 1}`}></div>
              ))}
            </div>
            <div className="sun-center">☀️</div>
          </div>
        </div>
        
        <h1 className="app-title">Solar AI</h1>
        <p className="app-subtitle">Tanning Assistant</p>
        
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="progress-text">{progress}%</p>
        </div>
        
        {showContent && (
          <div className="redirect-message">
            <p>🌟 Get Tan Fast & Skin Glow</p>
            <p>Redirecting to App Store...</p>
            <div className="features">
              <div className="feature">🔍 Scan your face to detect skin type</div>
              <div className="feature">📱 Personalized tanning routine</div>
              <div className="feature">⏰ Guided timers and reminders</div>
            </div>
          </div>
        )}
        
        <div className="download-hint">
          <p>Available on the App Store</p>
        </div>
      </div>
    </div>
  );
}

export default App;
