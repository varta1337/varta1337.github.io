const { useState } = React;

function Navbar(){
  return (
    <div className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <div className="brand-logo"/>
          <div className="brand-name">varta<em>1337</em></div>
        </div>
        <nav className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/varta1337" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </div>
  );
}

function Hero(){
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h1 className="title-xl">Hi, I’m <span style={{color:'var(--teal-400)'}}>varta1337</span></h1>
          <h3 className="subtitle">Frontend / Full‑Stack Developer</h3>
          <p className="lead">
            I craft fast, beautiful interfaces with React. Experience with Node.js, databases,
            responsive design, and Bash automation. Dark UI with teal highlights is my vibe.
          </p>
          <div className="cta">
            <a className="btn btn-primary" href="#projects">View work</a>
            <a className="btn btn-ghost" href="#contact">Contact me</a>
          </div>
        </div>
        <div className="card-stack">
          <div className="card">
            <span className="tag">UX • visual polish</span>
            <h4>Crisp typography</h4>
            <p className="muted">Soft shadows, glass panels, balanced contrast.</p>
          </div>
          <div className="card">
            <span className="tag">React</span>
            <h4>Modern stack</h4>
            <p className="muted">React 18, modular architecture, tasteful animations.</p>
          </div>
          <div className="card">
            <span className="tag">Performance</span>
            <h4>Speed focus</h4>
            <p className="muted">Optimized media, lazy sections, sensible effects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const skills = [
  { name:'HTML', level:'Semantics, accessibility' },
  { name:'CSS', level:'Responsive, Flex/Grid, animations' },
  { name:'JavaScript', level:'ES2023+, async patterns' },
  { name:'TypeScript', level:'Types, tooling, safer code' },
  { name:'React', level:'Hooks, components, state' },
  { name:'Tailwind CSS', level:'Utility-first, theming' },
  { name:'Node.js', level:'REST, Express, APIs' },
  { name:'Python (Flask, Django)', level:'REST APIs, business logic' },
  { name:'C# (ASP.NET Core)', level:'REST APIs, backend services' },
  { name:'SQL (PostgreSQL, MySQL)', level:'Schema design, queries' },
  { name:'ORM', level:'Data access layers, patterns' },
  { name:'APIs', level:'Design, integration, error handling' },
  { name:'Git & GitHub', level:'Branching, PRs, reviews' },
  { name:'npm', level:'Scripts, dependency management' },
  { name:'DevOps & CI/CD', level:'Basics, pipelines, deploys' },
  { name:'Bash', level:'Scripting & automation' },
];

function Skills(){
  return (
    <section id="skills" className="container">
      <h3 className="section-title">Skills</h3>
      <div className="grid cols-3">
        {skills.map((s)=> (
          <div className="tile" key={s.name}>
            <h4>{s.name}</h4>
            <p className="muted">{s.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const demoProjects = [
  { title:'Glass UI Landing', text:'Dark theme, glass cards, responsive.', link:'#' },
  { title:'API Dashboard', text:'React + Charts, theming, filters.', link:'#' },
  { title:'Node.js Service', text:'Express REST, JWT, logging.', link:'#' },
  { title:'DB Schema Design', text:'SQL/NoSQL models, indexes, migrations.', link:'#' },
  { title:'Portfolio v1', text:'Animations, routing, optimizations.', link:'#' },
  { title:'CLI Tools (Bash)', text:'Deploy and build scripts.', link:'#' },
];

function Projects(){
  return (
    <section id="projects" className="container">
      <h3 className="section-title">Projects</h3>
      <div className="grid cols-3">
        {demoProjects.map((p)=> (
          <a className="tile" href={p.link} key={p.title}>
            <h4>{p.title}</h4>
            <p className="muted">{p.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact(){
  return (
    <section id="contact" className="container">
      <h3 className="section-title">Contact</h3>
      <div className="grid cols-2">
        <div className="tile">
          <h4>Write me</h4>
          <p className="muted">Open to new projects and collaboration.</p>
          <a className="btn btn-primary" href="mailto:varta1337@proton.me">varta1337@proton.me</a>
        </div>
        <form className="tile" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! I will get back to you.')}}>
          <label>
            <span>Your email</span>
            <input style={{width:'100%',padding:'10px',borderRadius:'10px',border:'1px solid rgba(255,255,255,.12)',background:'rgba(255,255,255,.04)',color:'var(--text-0)',marginTop:6}} type="email" required />
          </label>
          <label style={{display:'block',marginTop:12}}>
            <span>Message</span>
            <textarea style={{width:'100%',padding:'10px',borderRadius:'10px',border:'1px solid rgba(255,255,255,.12)',background:'rgba(255,255,255,.04)',color:'var(--text-0)',marginTop:6,minHeight:120}} required />
          </label>
          <button className="btn btn-primary" style={{marginTop:12}} type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer>
      <div className="container">© {new Date().getFullYear()} varta1337 — All rights reserved</div>
    </footer>
  );
}

function App(){
  return (
    <>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


