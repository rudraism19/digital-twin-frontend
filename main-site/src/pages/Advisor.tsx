import React from 'react';

const Advisor: React.FC = () => {
  return (
    <>
<main className="page active" id="page-main">

        <section id="ai-section">
            <div className="ai-wrap wrap">
                <div className="rv">
                    <p className="lbl">Multi-Agent AI System</p>
                    <h1 className="ttl">Your Personal<br /><span className="serif amb">Career AI Advisor</span></h1>
                    <p className="desc">Powered by 4 specialised AI agents — Career Roadmap, Skill Gap, Market Alerts, and
                        Internship — all coordinated by a Manager AI. Chat via text or voice.</p>
                    <div style={{"display":"flex","flexDirection":"column","gap":".6rem","marginTop":"1.8rem"}}>
                        <div style={{"display":"flex","alignItems":"center","gap":".75rem","fontSize":".84rem","color":"var(--mu)"}}>
                            <span style={{"color":"var(--amb)","fontSize":"1rem"}}>⚙</span><strong
                                style={{"color":"var(--wh2)"}}>Manager Agent</strong> — Analyses profile &amp; coordinates
                            guidance
                        </div>
                        <div style={{"display":"flex","alignItems":"center","gap":".75rem","fontSize":".84rem","color":"var(--mu)"}}>
                            <span style={{"color":"var(--blue2)","fontSize":"1rem"}}>🗺</span><strong
                                style={{"color":"var(--wh2)"}}>Roadmap Agent</strong> — 3–5 year career roadmaps with
                            milestones
                        </div>
                        <div style={{"display":"flex","alignItems":"center","gap":".75rem","fontSize":".84rem","color":"var(--mu)"}}>
                            <span style={{"color":"var(--green)","fontSize":"1rem"}}>📊</span><strong
                                style={{"color":"var(--wh2)"}}>Skill Gap Agent</strong> — Identifies missing skills &amp;
                            learning paths
                        </div>
                        <div style={{"display":"flex","alignItems":"center","gap":".75rem","fontSize":".84rem","color":"var(--mu)"}}>
                            <span style={{"color":"var(--amb2)","fontSize":"1rem"}}>🔔</span><strong
                                style={{"color":"var(--wh2)"}}>Alert Agent</strong> — Real-time market trends &amp; demand
                            signals
                        </div>
                        <div style={{"display":"flex","alignItems":"center","gap":".75rem","fontSize":".84rem","color":"var(--mu)"}}>
                            <span style={{"color":"var(--blue)","fontSize":"1rem"}}>💼</span><strong
                                style={{"color":"var(--wh2)"}}>Internship Agent</strong> — Matched opportunities &amp;
                            application tips
                        </div>
                    </div>
                    <div style={{"marginTop":"2rem","display":"flex","gap":".8rem","flexWrap":"wrap"}}>
                        <button className="btn btn-amb btn-sm"
                            onClick={() => {}}>Chat
                            with
                            AI →</button>
                        <button className="btn btn-out btn-sm" onClick={() => {}}>🎤 Voice
                            Chat</button>
                    </div>
                </div>
                <div className="ai-preview rv d1">
                    <div className="ai-header">
                        <div className="ai-brand">
                            <div className="ai-avatar">🤖</div>
                            <div>
                                <div className="ai-name">Career AI Advisor</div>
                                <div className="ai-status"><span className="ai-dot"></span>4 Agents Active</div>
                            </div>
                        </div>
                    </div>
                    <div className="ai-msgs" id="ai-preview-msgs">
                        <div className="ai-bubble bot">👋 Hi! I'm your Digital Twin Verse Career Advisor. Tell me your
                            education background and interests — I'll give you a personalised career plan, skill
                            roadmap, and internship suggestions.</div>
                        <div className="ai-bubble user">I'm a 2nd year B.Tech CSE student interested in AI and Data Science.
                        </div>
                        <div className="ai-bubble bot">Great profile! 🎯 Based on your background, here's what I
                            recommend:<br /><br />📍 <strong>Top Career Path:</strong> AI/ML Engineer (₹12–50 LPA)<br />📊
                            <strong>Skill Gaps:</strong> MLOps, LLMs, System Design<br />💼 <strong>Next Step:</strong>
                            Apply for AI internships on Internshala &amp; LinkedIn<br /><br />Want the full 3-year roadmap?
                        </div>
                    </div>
                    <div className="ai-input-row">
                        <input className="fi" placeholder="Type your question here or click the button above…" readOnly
                            onClick={() => {}} />
                        <button className="ai-send" onClick={() => {}}>➤</button>
                        <button className="ai-voice-btn"
                            onClick={() => {}}>🎤</button>
                    </div>
                </div>
            </div>
        </section>

        {/* ACHIEVEMENT ANALYZER PROMO SECTION */}
        {/* FOOTER */}
        

    
</main>
    </>
  );
};

export default Advisor;
