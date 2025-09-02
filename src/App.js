import logo from './logo.svg';
import './App.css';

// === Navbar ===
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Josia</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-blue-600">Accueil</a></li>
          <li><a href="#about" className="hover:text-blue-600">À propos</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projets</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Compétences</a></li>
          <li><a href="#certifications" className="hover:text-blue-600">Certifications</a></li>
          <li><a href="#languages" className="hover:text-blue-600">Langues</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

// === Sections ===
function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <h1 className="text-5xl font-bold">Josia Arole</h1>
      <p className="mt-4 text-xl">Conceptrice & Développeuse Web et Mobile</p>
      <div className="mt-6 flex gap-4">
        <a href="/cv.pdf" className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow hover:bg-gray-200">
          📄 Télécharger CV
        </a>
        <a href="#contact" className="bg-yellow-400 text-black px-6 py-2 rounded-lg shadow hover:bg-yellow-300">
          ✉️ Me contacter
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold">À propos</h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-700">
        Développeuse passionnée, je conçois des applications web et mobiles
        innovantes. Je combine créativité, rigueur technique et sens de l’ergonomie
        pour offrir des solutions performantes et intuitives. 
        Mes projets incluent <strong>MemorizBible</strong>, <strong>Ezer Services</strong> et <strong>Proxymus</strong>.
      </p>
    </section>
  );
}

function ProjectCard({ titre, description, lien }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <h3 className="text-xl font-bold text-gray-800">{titre}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a href={lien} className="text-blue-600 hover:underline mt-4 block">
        Voir sur GitHub
      </a>
    </div>
  );
}

function Projects() {
  const projets = [
    {
      titre: "MemorizBible",
      description: "Application mobile de mémorisation biblique (QCM, dictée, recitation, multijoueur).",
      lien: "https://github.com/Arolejosia/memoriz_bible",
    },
    {
      titre: "Ezer Services",
      description: "Plateforme web & mobile de mise en relation clients–prestataires.",
      lien: "https://github.com/Arolejosia/Ezer",
    },
    {
      titre: "Panel Admin",
      description: "Application mobile de mise en relation conducteurs–dépanneurs.",
      lien: "https://github.com/Arolejosia/Brilliant_Agent",
    },
    {
      titre: "",
      description: "Application mobile de mise en relation conducteurs–dépanneurs.",
      lien: "https://github.com/Arolejosia/memoriz-bible-api",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">Projets</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {projets.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const skills = ["Flutter", "Firebase", "React", "FastAPI", "SQL", "GitHub", "Render"];
  return (
    <section id="skills" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold">Compétences</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {skills.map((s, i) => (
          <span key={i} className="px-4 py-2 bg-gray-200 rounded-lg shadow">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  const certifs = [
    { nom: "TSSA G3", annee: "2024" },
    { nom: "Flutter & Firebase Bootcamp", annee: "2025 (prévu)" },
    { nom: "AWS Machine Learning Specialty", annee: "2025 (prévu)" },
    { nom: "Oracle Database SQL Certified Associate (1Z0-071)", annee:"2025 (prévu)"  }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold">Certifications</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {certifs.map((c, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl px-6 py-4 w-64 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{c.nom}</h3>
            <p className="text-gray-600">{c.annee}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Languages() {
  const langues = [
    { nom: "Français", niveau: "Langue maternelle" },
    { nom: "Anglais", niveau: "Avancé (professionnel)" },
  ];

  return (
    <section id="languages" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold">Langues</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {langues.map((l, i) => (
          <div
            key={i}
            className="bg-gray-100 shadow rounded-xl px-6 py-4 w-64 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{l.nom}</h3>
            <p className="text-gray-600">{l.niveau}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-4 text-gray-700">📧 aroletella@gmial.com</p>
      <p className="mt-2 text-gray-700">
        🌐 <a href="https://github.com/tonpseudo" className="text-blue-600 hover:underline">GitHub</a> |
        <a href="https://linkedin.com/in/tonprofil" className="text-blue-600 hover:underline ml-2">LinkedIn</a>
      </p>
    </section>
  );
}

// === App ===
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Languages />
      <Contact />
    </div>
  );
}

export default App;

