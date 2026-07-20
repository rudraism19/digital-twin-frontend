import React from 'react';

const Reviews: React.FC = () => {
  return (
    <>
<main className="page active" id="page-main">

        <section id="rev" className="sec">
            <div className="wrap">
                <div className="rev-top rv">
                    <div>
                        <p className="lbl">What People Say</p>
                        <h1 className="ttl">Early Supporters<br />Are Excited</h1>
                    </div>
                    <div className="rscore-box">
                        <div className="rbig">4.9</div>
                        <div>
                            <div className="rstars">★★★★★</div>
                            <div className="rct">Early community rating</div>
                        </div>
                    </div>
                </div>
                <div className="rgrid">
                    <div className="rvc rv d1">
                        <div className="rvc-st">★★★★★</div>
                        <p className="rvc-tx">"This is exactly what I needed in Class 12. If this had existed, I would never
                            have wasted 2 years in the wrong course."</p>
                        <div className="rvc-u">
                            <div className="rav" style={{"background":"linear-gradient(135deg,#2a7de1,#5ba3f5)"}}>A</div>
                            <div>
                                <div className="rnm">Arjun Mehta</div>
                                <div className="rrl">B.Tech Student, Delhi</div>
                            </div>
                        </div>
                    </div>
                    <div className="rvc rv d2">
                        <div className="rvc-st">★★★★★</div>
                        <p className="rvc-tx">"The AI advisor gave me a career plan in minutes — more personalised than any
                            counsellor I've spoken to. The what-if scenarios are brilliant."</p>
                        <div className="rvc-u">
                            <div className="rav" style={{"background":"linear-gradient(135deg,#e88c2a,#f5a94e)"}}>P</div>
                            <div>
                                <div className="rnm">Priya Sharma</div>
                                <div className="rrl">Career Counsellor, Mumbai</div>
                            </div>
                        </div>
                    </div>
                    <div className="rvc rv d3">
                        <div className="rvc-st">★★★★☆</div>
                        <p className="rvc-tx">"Explored 12 career paths in one afternoon. The dashboard with skill tracking
                            is genuinely useful — I check it weekly now."</p>
                        <div className="rvc-u">
                            <div className="rav" style={{"background":"linear-gradient(135deg,#1a7a4a,#2aad6a)"}}>R</div>
                            <div>
                                <div className="rnm">Rohit Verma</div>
                                <div className="rrl">Commerce Student, Jaipur</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="write-box rv">
                    <h3>Share Your Experience</h3>
                    <p>Your feedback helps us build better and inspires other students to take the right step.</p>
                    {/* Primary fields */}
                    <div className="wg">
                        <div className="fg"><label>Your Name *</label><input className="fi" id="rn" type="text"
                                placeholder="e.g. Arjun Sharma" /></div>
                        <div className="fg"><label>Your Role *</label>
                            <select className="fs" id="rr" onClick={() => {}}>
                                <option value="" disabled selected>Select role…</option>
                                <option>School Student (Class 9–12)</option>
                                <option>Undergraduate Student</option>
                                <option>Postgraduate Student</option>
                                <option>Parent</option>
                                <option>Career Counsellor / Teacher</option>
                                <option>Other</option>
                            </select>
                            <div id="rr-other-wrap"><input className="fi" id="rr-other" type="text"
                                    placeholder="Please specify your role…" style={{"marginTop":".4rem"}} /></div>
                        </div>
                        <div className="fg full"><label>Rating *</label>
                            <div className="star-r" id="strow">
                                <button className="sb" onClick={() => {}}>★</button><button className="sb"
                                    onClick={() => {}}>★</button>
                                <button className="sb" onClick={() => {}}>★</button><button className="sb"
                                    onClick={() => {}}>★</button>
                                <button className="sb" onClick={() => {}}>★</button>
                            </div>
                        </div>
                        <div className="fg full"><label>Your Review *</label><textarea className="ft" id="rt" rows={3}
                                placeholder="Share your experience with Digital Twin Verse for Students…"></textarea>
                        </div>
                    </div>
                    {/* Contact fields (at least one required) */}
                    <div className="rev-extra">
                        <div className="fg">
                            <label>Email <span style={{"color":"var(--mu)","fontWeight":"400"}}>(optional)</span></label>
                            <input className="fi" id="rev-email" type="email" placeholder="you@email.com" />
                        </div>
                        <div className="fg">
                            <label>Phone <span style={{"color":"var(--mu)","fontWeight":"400"}}>(optional)</span></label>
                            <input className="fi" id="rev-phone" type="tel" placeholder="+91 XXXXXXXXXX" />
                        </div>
                        <div className="full contact-note" id="contact-note">* Provide at least one — email or phone
                            (required).</div>
                        {/* Strict validation error note — shown when both are empty */}
                        <div className="contact-required-note full" id="contact-req-note">
                            🚫 Enter the mandatory credentials — email or phone is required.
                        </div>
                        {/* WhatsApp Community */}
                        <div className="full">
                            <div className="wa-opt">
                                <input type="checkbox" id="rev-wa" name="rev-wa" />
                                <label htmlFor="rev-wa"><strong>Join our WhatsApp Community</strong> — Get career updates,
                                    guidance, and be part of India's biggest student career network. (Optional)</label>
                            </div>
                        </div>
                    </div>
                    <div style={{"display":"flex","alignItems":"center","flexWrap":"wrap","gap":".9rem","marginTop":"1.2rem"}}>
                        <button className="rev-btn" onClick={() => {}}>Post My Review →</button>
                        <div className="rev-ok" id="rev-ok"><span>✅</span>Your review has been posted. Thank you!</div>
                    </div>
                </div>
                <div id="urlist"></div>
            </div>
        </section>





        {/* WHY DIGITAL TWIN VERSE */}
        <section id="why-dtv" className="sec surf">
            <div className="wrap">
                <div className="rv text-center" style={{"textAlign":"center","maxWidth":"850px","margin":"0 auto 3.5rem"}}>
                    <p className="lbl" style={{"justifyContent":"center"}}>Comprehensive Learning Ecosystem</p>
                    <h2 className="ttl">Why Digital Twin Verse?</h2>
                    <p className="desc" style={{"margin":"0 auto"}}>More than an AI platform—your complete digital learning
                        ecosystem for academic success, career growth, and future-ready skills.</p>
                </div>
                <div className="grid2 rv"
                    style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(320px, 1fr))","gap":"2.5rem"}}>
                    <div className="feat-card" style={{"padding":"2.5rem"}}>
                        <div style={{"fontSize":"2.5rem","marginBottom":"1.2rem"}}>🌐</div>
                        <h3 style={{"color":"var(--wh, #fff)","fontSize":"1.4rem","fontWeight":"700","marginBottom":"1rem"}}>
                            What Digital Twin Verse Is</h3>
                        <p style={{"color":"var(--mu, #94a3b8)","fontSize":"1rem","lineHeight":"1.7"}}>Digital Twin Verse is a
                            revolutionary educational technology platform designed to create a dynamic digital replica
                            of a student's academic profile, skills, and ambitions. By leveraging advanced artificial
                            intelligence, Digital Twin Verse mirrors real-world career pathways, allowing learners to
                            simulate their future before taking critical real-life steps. It is a comprehensive virtual
                            hub where students, parents, and educational institutions unite to make data-driven
                            decisions regarding education and career trajectories.</p>
                    </div>
                    <div className="feat-card" style={{"padding":"2.5rem"}}>
                        <div style={{"fontSize":"2.5rem","marginBottom":"1.2rem"}}>🚀</div>
                        <h3 style={{"color":"var(--wh, #fff)","fontSize":"1.4rem","fontWeight":"700","marginBottom":"1rem"}}>
                            Why Students Should Use It</h3>
                        <p style={{"color":"var(--mu, #94a3b8)","fontSize":"1rem","lineHeight":"1.7"}}>Navigating today's
                            hyper-competitive academic landscape requires more than just traditional textbooks. Students
                            need interactive, real-time insights to discover their true calling. With Digital Twin
                            Verse, learners eliminate the guesswork of course selection and career alignment. By
                            exploring over 1800+ simulated career options, students can experiment with different
                            professional futures, identify their true strengths, and build a customized roadmap that
                            guarantees academic fulfillment and professional confidence.</p>
                    </div>
                    <div className="feat-card" style={{"padding":"2.5rem"}}>
                        <div style={{"fontSize":"2.5rem","marginBottom":"1.2rem"}}>🧠</div>
                        <h3 style={{"color":"var(--wh, #fff)","fontSize":"1.4rem","fontWeight":"700","marginBottom":"1rem"}}>
                            How AI Improves Learning</h3>
                        <p style={{"color":"var(--mu, #94a3b8)","fontSize":"1rem","lineHeight":"1.7"}}>Artificial intelligence
                            acts as an exceptionally intuitive, 24/7 personal mentor. In Digital Twin Verse, our AI
                            Career Advisor continuously tracks student engagement, analyzes academic performance, and
                            identifies knowledge gaps. Rather than providing generic advice, the AI crafts personalized
                            learning interventions, recommends adaptive study routines, and conducts sophisticated
                            'what-if' scenario simulations. This intelligent feedback loop dramatically enhances memory
                            retention, conceptual depth, and analytical thinking.</p>
                    </div>
                    <div className="feat-card" style={{"padding":"2.5rem"}}>
                        <div style={{"fontSize":"2.5rem","marginBottom":"1.2rem"}}>🎯</div>
                        <h3 style={{"color":"var(--wh, #fff)","fontSize":"1.4rem","fontWeight":"700","marginBottom":"1rem"}}>
                            Expert Career Guidance</h3>
                        <p style={{"color":"var(--mu, #94a3b8)","fontSize":"1rem","lineHeight":"1.7"}}>Traditional career
                            counseling often relies on outdated industry trends and static questionnaires. Digital Twin
                            Verse reinvents career guidance by offering immersive, cutting-edge career exploration
                            powered by predictive modeling. Students can evaluate job demand growth, salary projections,
                            and mandatory prerequisite skills for emerging fields like artificial intelligence,
                            aerospace, biotechnology, and financial engineering, ensuring they remain highly competitive
                            in the modern workforce.</p>
                    </div>
                    <div className="feat-card" style={{"padding":"2.5rem"}}>
                        <div style={{"fontSize":"2.5rem","marginBottom":"1.2rem"}}>👪</div>
                        <h3 style={{"color":"var(--wh, #fff)","fontSize":"1.4rem","fontWeight":"700","marginBottom":"1rem"}}>
                            Active Parent Involvement</h3>
                        <p style={{"color":"var(--mu, #94a3b8)","fontSize":"1rem","lineHeight":"1.7"}}>A student's success is
                            deeply rooted in strong parental support. Digital Twin Verse features a highly secure,
                            dedicated Parent Portal that bridges the communication gap between parents and children. By
                            entering a secure Parent Code, parents gain access to real-time analytics, behavioral AI
                            profiles, study routine summaries, and proactive alerts. This ensures parents remain
                            completely aligned with their child's goals, offering constructive encouragement without
                            micromanagement.</p>
                    </div>
                    <div className="feat-card" style={{"padding":"2.5rem"}}>
                        <div style={{"fontSize":"2.5rem","marginBottom":"1.2rem"}}>🏫</div>
                        <h3 style={{"color":"var(--wh, #fff)","fontSize":"1.4rem","fontWeight":"700","marginBottom":"1rem"}}>
                            School Collaboration &amp; Future Skills</h3>
                        <p style={{"color":"var(--mu, #94a3b8)","fontSize":"1rem","lineHeight":"1.7"}}>Digital Twin Verse
                            actively partners with schools, colleges, and educational institutions to enrich standard
                            curricula with practical, future-ready skills. By combining institutional academic rigor
                            with our advanced AI behavioral analysis, educators can monitor cohort performance and
                            provide targeted institutional assistance. Together, we foster personalized learning
                            pathways that cultivate critical thinking, emotional intelligence, and advanced technical
                            prowess for lifelong career success.</p>
                    </div>
                </div>
            </div>
        </section>



        {/* FOOTER */}
        

    
</main>
    </>
  );
};

export default Reviews;
