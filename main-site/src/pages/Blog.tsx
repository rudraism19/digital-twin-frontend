import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Career After 12th (Science, Commerce & Arts) – Complete Guide 2026",
      category: "Featured",
      date: "2026-07-20",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&fm=webp&q=80",
      excerpt: "Discover the best career after 12th in science, commerce, and arts. Complete career guidance after 12th using AI to unlock high-paying jobs in 2026.",
      link: "https://digitaltwinvrs.com/blog/how-to-choose-right-career-after-12th-complete-guide"
    },
    {
      id: 2,
      title: "AI Career Guidance for Students: Complete Guide 2026",
      category: "Career Planning",
      date: "2026-07-19",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&fm=webp&q=80",
      excerpt: "Discover how AI career guidance is revolutionizing student success in 2026. Explore career simulations, avoid common mistakes, and build your Digital Twin.",
      link: "https://digitaltwinvrs.com/blog/ai-career-guidance-students-complete-guide-2026"
    },
    {
      id: 3,
      title: "Best Career Options After 10th in India (Complete Guide)",
      category: "Career Planning",
      date: "2026-07-19",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&fm=webp&q=80",
      excerpt: "Explore the best career options after 10th in India. Discover science, commerce, and arts streams, diploma courses, and AI career guidance for 2026.",
      link: "https://digitaltwinvrs.com/blog/best-career-options-after-10th-india-2026"
    },
    {
      id: 4,
      title: "The Future of AI in Career Guidance for Students",
      category: "Career Planning",
      date: "2026-07-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&fm=webp&q=80",
      excerpt: "Learn how Artificial Intelligence is revolutionizing career counseling and helping students discover their true potential with data-driven insights.",
      link: "https://digitaltwinvrs.com/blog/future-of-ai-career-guidance"
    }
  ];

  return (
    <main className="page active" id="page-main" style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
      <section className="sec" style={{ paddingTop: '8rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="wrap" style={{ width: '100%', maxWidth: '1200px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#f59e0b', fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.9rem', textTransform: 'uppercase' }}>
              Digital Twin Verse Blog
            </span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '1rem', marginBottom: '1rem' }}>
              Insights for Your <span style={{ color: '#3b82f6' }}>Future</span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Latest news, career tips, and insights from the Eco-Novators team to help you navigate your journey.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {blogPosts.map(post => (
              <a 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                key={post.id} 
                style={{
                  background: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.85rem', color: '#a1a1aa' }}>
                    <span style={post.category === 'Featured' ? { background: 'rgba(167,139,250,0.15)', color: '#a78bfa', padding: '0.3rem 0.8rem', borderRadius: '20px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' } : { color: '#60a5fa', fontWeight: 600 }}>
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.8rem', lineHeight: 1.4, color: '#fff' }}>
                    {post.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.2rem', color: '#a1a1aa', fontSize: '0.85rem', marginTop: 'auto' }}>
                    <span>{post.date}</span>
                    <span style={{ color: '#a78bfa', fontWeight: 600 }}>Read Article →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default Blog;
