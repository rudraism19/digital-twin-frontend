import React from 'react';

const Features: React.FC = () => {
  return (
    <>
<main className="page active" id="page-main">

        {/* FEATURES HERO */}
        <section className="sec surf2 sim-grid-bg" style={{"padding":"10rem 0 6rem 0","position":"relative","overflow":"hidden"}}>
            <div className="glow-orb" style={{"--color":"rgba(55, 215, 255, 0.13)","top":"--80px","left":"--80px","width":"400px","height":"400px"} as React.CSSProperties}></div>
            <div className="glow-orb" style={{"--color":"rgba(167, 139, 250, 0.13)","bottom":"--80px","right":"--80px","width":"400px","height":"400px","animationDelay":"-4.5s"} as React.CSSProperties}></div>
            <div className="wrap" style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"4rem","alignItems":"center"}}>
                <div className="rv">
                    <span className="lbl">🔬 Platform Science</span>
                    <h1 className="ttl" style={{"fontSize":"3rem","marginTop":"1rem","lineHeight":"1.15"}}>One Platform.<br /><span className="serif amb">Infinite Career Pathways.</span></h1>
                    <p className="desc" style={{"marginTop":"1.5rem","color":"var(--mu)"}}>
                        Digital Twin Verse compiles student achievements, test grades, and skill attributes to simulate future-ready career trajectories. Predict outcomes, explore simulations, and navigate to target colleges with confidence.
                    </p>
                    <div style={{"marginTop":"2rem","display":"flex","gap":"1rem"}}>
                        <button className="btn-amb" onClick={() => {}}>Get Started Free</button>
                        <a href="#dtv-how" className="btn-out" style={{"display":"inline-flex","alignItems":"center","justifyContent":"center","textDecoration":"none","padding":"0 1.5rem","height":"48px","borderRadius":"var(--r)","border":"1px solid var(--bdr)","color":"#fff","fontWeight":"600"}}>See How It Works</a>
                    </div>
                </div>
                <div className="rv d2" style={{"position":"relative"}}>
                    <div className="glass-panel" style={{"padding":"1rem","borderRadius":"24px","boxShadow":"var(--card-glow)"}}>
                        <img src="/img/dtv_features_hero.png" alt="Digital Twin Verse Dashboard Simulation" style={{"width":"100%","borderRadius":"16px","display":"block","border":"1px solid rgba(255,255,255,0.08)"}} />
                    </div>
                </div>
            </div>
        </section>

        {/* HOW DTV WORKS */}
        <section id="dtv-how" className="sec" style={{"padding":"6rem 0","background":"linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%)"}}>
            <div className="wrap">
                <div className="center-head rv">
                    <span className="lbl">🛠️ Step-by-Step Pathway</span>
                    <h2 className="ttl">From Uncertainty to Clarity<br /><span className="serif">in 5 Simple Steps</span></h2>
                    <p className="desc">Our multi-agent simulation model helps map your achievements to future industry success.</p>
                </div>

                <div style={{"marginTop":"5rem","display":"grid","gridTemplateColumns":"1fr 1.2fr","gap":"5rem","alignItems":"center"}}>
                    <div className="rv">
                        <div className="glass-panel" style={{"padding":"1rem","borderRadius":"24px","boxShadow":"var(--card-glow)"}}>
                            <img src="/img/dtv_features_flow.png" alt="Digital Twin Verse Integration Mesh" style={{"width":"100%","borderRadius":"16px","display":"block","border":"1px solid rgba(255,255,255,0.08)"}} />
                        </div>
                    </div>
                    <div className="rv d2" style={{"display":"flex","flexDirection":"column","gap":"2rem"}}>
                        <div style={{"display":"flex","gap":"1.5rem","alignItems":"flex-start"}}>
                            <div style={{"background":"linear-gradient(135deg, #ffd700, #ffb900)","width":"44px","height":"44px","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontWeight":"800","color":"#000","fontSize":"1.2rem","flexShrink":"0","boxShadow":"0 4px 15px rgba(255, 215, 0, 0.4)"}}>1</div>
                            <div>
                                <h3 style={{"fontSize":"1.3rem","fontWeight":"700","color":"#fff","marginBottom":"0.25rem"}}>Instantiate Digital Twin</h3>
                                <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Create your academic profile. Choose between school (Class 5-12) or university layouts to define your basic tracking template.</p>
                            </div>
                        </div>
                        <div style={{"display":"flex","gap":"1.5rem","alignItems":"flex-start"}}>
                            <div style={{"background":"linear-gradient(135deg, #37d7ff, #0099ff)","width":"44px","height":"44px","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontWeight":"800","color":"#000","fontSize":"1.2rem","flexShrink":"0","boxShadow":"0 4px 15px rgba(55, 215, 255, 0.4)"}}>2</div>
                            <div>
                                <h3 style={{"fontSize":"1.3rem","fontWeight":"700","color":"#fff","marginBottom":"0.25rem"}}>Sync Achievements</h3>
                                <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Feed your accomplishments into the Achievement Analyzer. The system parses your grades, test reports, and extra-curricular inputs instantly.</p>
                            </div>
                        </div>
                        <div style={{"display":"flex","gap":"1.5rem","alignItems":"flex-start"}}>
                            <div style={{"background":"linear-gradient(135deg, #a78bfa, #7b2fff)","width":"44px","height":"44px","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontWeight":"800","color":"#000","fontSize":"1.2rem","flexShrink":"0","boxShadow":"0 4px 15px rgba(167, 139, 250, 0.4)"}}>3</div>
                            <div>
                                <h3 style={{"fontSize":"1.3rem","fontWeight":"700","color":"#fff","marginBottom":"0.25rem"}}>Simulate Pathways</h3>
                                <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Our engine matches your skills against 1800+ career paths, compiling real-world requirements for university courses and top employers.</p>
                            </div>
                        </div>
                        <div style={{"display":"flex","gap":"1.5rem","alignItems":"flex-start"}}>
                            <div style={{"background":"linear-gradient(135deg, #34d399, #10b981)","width":"44px","height":"44px","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontWeight":"800","color":"#000","fontSize":"1.2rem","flexShrink":"0","boxShadow":"0 4px 15px rgba(52, 211, 153, 0.4)"}}>4</div>
                            <div>
                                <h3 style={{"fontSize":"1.3rem","fontWeight":"700","color":"#fff","marginBottom":"0.25rem"}}>AI Tuning Advisor</h3>
                                <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Consult our conversational AI advisor to receive guided instructions, subject selections, and actionable progress summaries.</p>
                            </div>
                        </div>
                        <div style={{"display":"flex","gap":"1.5rem","alignItems":"flex-start"}}>
                            <div style={{"background":"linear-gradient(135deg, #f472b6, #db2777)","width":"44px","height":"44px","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontWeight":"800","color":"#000","fontSize":"1.2rem","flexShrink":"0","boxShadow":"0 4px 15px rgba(244, 114, 182, 0.4)"}}>5</div>
                            <div>
                                <h3 style={{"fontSize":"1.3rem","fontWeight":"700","color":"#fff","marginBottom":"0.25rem"}}>Co-Pilot Portals</h3>
                                <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Generate secure Parent and School sync codes. Keep parents, teachers, and guidance advisors synced with your active roadmap.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CORE FEATURES GRID */}
        <section className="sec surf2" style={{"padding":"6rem 0"}}>
            <div className="wrap">
                <div className="center-head rv">
                    <span className="lbl">🌟 Platform Features</span>
                    <h2 className="ttl">Core Features Built for<br /><span className="serif">Student Success</span></h2>
                    <p className="desc">A summary of the intelligence powering the Digital Twin Verse.</p>
                </div>
                
                <div style={{"marginTop":"5rem","display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(320px, 1fr))","gap":"2.5rem"}}>
                    {/* Card 1: Personalised Dashboard */}
                    <div className="feat-card rv" style={{"borderTop":"2px solid var(--purple2) !important","borderLeft":"1px solid rgba(167, 139, 250, 0.3) !important","boxShadow":"inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -4px 10px rgba(0, 0, 0, 0.6), 0 12px 30px rgba(167, 139, 250, 0.15) !important"}}>
                        <span style={{"position":"absolute","top":"12px","right":"12px","fontSize":"0.65rem","fontWeight":"800","background":"linear-gradient(90deg, #a78bfa, #7b2fff)","color":"#fff","padding":"3px 8px","borderRadius":"20px","textTransform":"uppercase","letterSpacing":"0.5px","zIndex":"10"}}>Customized</span>
                        <div style={{"fontSize":"2.25rem","marginBottom":"1.25rem"}}>🎛️</div>
                        <h3 style={{"fontSize":"1.35rem","fontWeight":"700","color":"#fff","marginBottom":"0.75rem"}}>Personalised Dashboard</h3>
                        <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Access a custom workspace tailored dynamically to your student profile (School or College level), tracking targets, routines, and grade records.</p>
                    </div>

                    {/* Card 2: AI Features */}
                    <div className="feat-card rv d1" style={{"borderTop":"2px solid var(--amb) !important","borderLeft":"1px solid rgba(232, 140, 42, 0.3) !important","boxShadow":"inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -4px 10px rgba(0, 0, 0, 0.6), 0 12px 30px rgba(232, 140, 42, 0.15) !important"}}>
                        <span style={{"position":"absolute","top":"12px","right":"12px","fontSize":"0.65rem","fontWeight":"800","background":"linear-gradient(90deg, #ffd700, #ffb900)","color":"#000","padding":"3px 8px","borderRadius":"20px","textTransform":"uppercase","letterSpacing":"0.5px","zIndex":"10"}}>AI Powered</span>
                        <div style={{"fontSize":"2.25rem","marginBottom":"1.25rem"}}>🤖</div>
                        <h3 style={{"fontSize":"1.35rem","fontWeight":"700","color":"#fff","marginBottom":"0.75rem"}}>AI Features</h3>
                        <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Leverage contextual multi-agent networks, automatic achievement processing, and real-time trajectory forecasting to navigate your future.</p>
                    </div>

                    {/* Card 3: Personalised Guidance */}
                    <div className="feat-card rv d2" style={{"borderTop":"2px solid var(--cyan) !important","borderLeft":"1px solid rgba(55, 215, 255, 0.3) !important","boxShadow":"inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -4px 10px rgba(0, 0, 0, 0.6), 0 12px 30px rgba(55, 215, 255, 0.15) !important"}}>
                        <span style={{"position":"absolute","top":"12px","right":"12px","fontSize":"0.65rem","fontWeight":"800","background":"linear-gradient(90deg, #37d7ff, #0099ff)","color":"#000","padding":"3px 8px","borderRadius":"20px","textTransform":"uppercase","letterSpacing":"0.5px","zIndex":"10"}}>Recommended</span>
                        <div style={{"fontSize":"2.25rem","marginBottom":"1.25rem"}}>🎯</div>
                        <h3 style={{"fontSize":"1.35rem","fontWeight":"700","color":"#fff","marginBottom":"0.75rem"}}>Personalised Guidance</h3>
                        <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Receive exact subject advisories, college checklist items, and exam requirements tailored to match your specific career destinations.</p>
                    </div>

                    {/* Card 4: AI Career Advisor */}
                    <div className="feat-card rv">
                        <div style={{"fontSize":"2.25rem","marginBottom":"1.25rem"}}>🧠</div>
                        <h3 style={{"fontSize":"1.35rem","fontWeight":"700","color":"#fff","marginBottom":"0.75rem"}}>AI Career Advisor</h3>
                        <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Engage in real-time conversational guidance. Our counselor understands your achievements and customizes roadmap milestones.</p>
                    </div>

                    {/* Card 5: Achievement Analyzer */}
                    <div className="feat-card rv d1">
                        <div style={{"fontSize":"2.25rem","marginBottom":"1.25rem"}}>📊</div>
                        <h3 style={{"fontSize":"1.35rem","fontWeight":"700","color":"#fff","marginBottom":"0.75rem"}}>Achievement Analyzer</h3>
                        <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Upload certificates, syllabus outlines, and transcript grades to immediately translate them into quantifiable skill matrices.</p>
                    </div>

                    {/* Card 6: Pathway Simulator */}
                    <div className="feat-card rv d2">
                        <div style={{"fontSize":"2.25rem","marginBottom":"1.25rem"}}>🌐</div>
                        <h3 style={{"fontSize":"1.35rem","fontWeight":"700","color":"#fff","marginBottom":"0.75rem"}}>Pathway Simulator</h3>
                        <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Simulate outcomes over 1800+ career branches to predict college admittance rates and optimal career moves.</p>
                    </div>

                    {/* Card 7: Parent Portal Sync */}
                    <div className="feat-card rv">
                        <div style={{"fontSize":"2.25rem","marginBottom":"1.25rem"}}>👨‍👩‍👦</div>
                        <h3 style={{"fontSize":"1.35rem","fontWeight":"700","color":"#fff","marginBottom":"0.75rem"}}>Parent Portal Sync</h3>
                        <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Provide parents with direct visibility into recommendations, simulation milestones, and secure payment setups.</p>
                    </div>

                    {/* Card 8: School Portal Integration */}
                    <div className="feat-card rv d1">
                        <div style={{"fontSize":"2.25rem","marginBottom":"1.25rem"}}>🏫</div>
                        <h3 style={{"fontSize":"1.35rem","fontWeight":"700","color":"#fff","marginBottom":"0.75rem"}}>School Portal Integration</h3>
                        <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Allow schools and class advisors to view group simulation charts and sync student performance seamlessly.</p>
                    </div>

                    {/* Card 9: Syllabus Tracker */}
                    <div className="feat-card rv d2">
                        <div style={{"fontSize":"2.25rem","marginBottom":"1.25rem"}}>📚</div>
                        <h3 style={{"fontSize":"1.35rem","fontWeight":"700","color":"#fff","marginBottom":"0.75rem"}}>Syllabus Tracker</h3>
                        <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Input details of your current class or stream to align academic study paths directly with real-world requirements.</p>
                    </div>

                    {/* Card 10: Time & Target Sync */}
                    <div className="feat-card rv">
                        <div style={{"fontSize":"2.25rem","marginBottom":"1.25rem"}}>⏰</div>
                        <h3 style={{"fontSize":"1.35rem","fontWeight":"700","color":"#fff","marginBottom":"0.75rem"}}>Time & Target Sync</h3>
                        <p style={{"color":"var(--mu)","lineHeight":"1.6"}}>Log weekly achievements, view time allocation charts, and synchronize your daily academic schedules with major skill goals.</p>
                    </div>
                </div>
            </div>
        </section>
    
</main>
    </>
  );
};

export default Features;
