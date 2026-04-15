const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '10+', label: 'Expert Team' },
  { value: '99%', label: 'Client Satisfaction' },
]

const processSteps = [
  {
    id: '01',
    title: 'Discovery & Strategy',
    description:
      'We deeply understand your business goals, target audience, and competitive landscape before touching any design or code.',
  },
  {
    id: '02',
    title: 'Design & Prototype',
    description:
      'UI/UX wireframes and interactive prototypes that visualize your product before a single line of production code is written.',
  },
  {
    id: '03',
    title: 'Build & Test',
    description:
      'Agile sprints with weekly demos, automated tests, and rigorous QA to ensure production-grade quality every release.',
  },
  {
    id: '04',
    title: 'Launch & Support',
    description:
      'Seamless deployment, monitoring, and ongoing support so your product keeps performing at its best long after go-live.',
  },
]

const testimonials = [
  {
    quote:
      'Xenfirm built our entire e-commerce platform in just 6 weeks. The code quality and design were outstanding. Highly recommend them to any business looking for reliable IT partners.',
    initials: 'RK',
    name: 'Rajesh Kumar',
    role: 'Founder, ShopEasy India',
  },
  {
    quote:
      'The AI integration they built for our CRM has saved us 20 hours per week. The team was professional, communicative, and genuinely invested in our success.',
    initials: 'PM',
    name: 'Priya Menon',
    role: 'CTO, GrowthLab',
  },
  {
    quote:
      'Our organic traffic tripled in 4 months after Xenfirm took over our digital marketing. Their SEO and content strategy is data-driven and results-focused.',
    initials: 'AV',
    name: 'Arjun Venkat',
    role: 'CEO, AgroSmart Solutions',
  },
]

function App() {
  return (
    <div className="page">
      <header className="hero container">
        <p className="eyebrow">Leading IT Company</p>
        <h1>
          Turning Ideas
          <br />
          Into Digital
          <br />
          Reality
        </h1>
        <p className="lead">
          We engineer high-quality web applications, mobile apps, AI-powered SaaS products, and digital marketing
          strategies for businesses that want to grow.
        </p>
        <div className="actions">
          <a href="#contact" className="btn primary">
            Start Your Project
          </a>
          <a href="#contact" className="btn ghost">
            Get Free Consultation
          </a>
        </div>
        <p className="support">✓ Free Consultation &nbsp; ✓ No Hidden Costs &nbsp; ✓ 24/7 Dedicated Support</p>
      </header>

      <section className="container panel stats">
        {stats.map((item) => (
          <article key={item.label}>
            <p className="value">{item.value}</p>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="container split services">
        <div>
          <p className="eyebrow">What We Do</p>
          <h2>Our Core Services</h2>
          <p>End-to-end digital solutions built with the latest technology and delivered with precision.</p>
          <a className="text-link" href="#services">
            View All Services →
          </a>
        </div>
        <div className="logo-grid">
          <div>Trusted by growing businesses</div>
          <div className="logos">
            <span>Client</span>
            <span>Client</span>
            <span>Client</span>
            <span>Client</span>
          </div>
        </div>
      </section>

      <section className="container process">
        <p className="eyebrow">How We Work</p>
        <h2>Our Proven Process</h2>
        <p className="section-copy">
          From first conversation to final launch — a transparent, structured approach that ensures quality at every
          step.
        </p>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article key={step.id} className="process-card">
              <p className="step-id">{step.id}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container testimonials">
        <p className="eyebrow">Client Stories</p>
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <p className="stars">★★★★★</p>
              <p>{item.quote}</p>
              <div className="person">
                <span>{item.initials}</span>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="container panel cta">
        <h2>Ready to Build Something Great?</h2>
        <p>Get a free consultation and project estimate from our team. No obligations.</p>
        <div className="actions">
          <a href="#" className="btn primary">
            Get Free Consultation
          </a>
          <a href="#services" className="btn ghost">
            Explore Services
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
