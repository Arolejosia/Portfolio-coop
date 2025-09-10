import React, { useState } from 'react';
import './App.css';

// === Navbar ===
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Josia Arole</h1>
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
        
        <a href="/CV_Arole_FR.pdf" className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow hover:bg-gray-200">
           Télécharger mon CV (FR)
        </a>
        <br />
         <a href="/CV_Arole_EN.pdf" className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow hover:bg-gray-200">
          Download my Resume (EN)
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
        Étudiante en Programmation Informatique au Collège La Cité,Développeuse passionnée, je conçois des applications web et mobiles
        innovantes. Je combine créativité, rigueur technique et sens de l’ergonomie
        pour offrir des solutions performantes et intuitives.Je suis prête à contribuer à des projets stimulants avec énergie et compétence.
        Mes projets incluent <strong>MemorizBible</strong>, <strong>Ezer Services</strong> et <strong>Panel Admin </strong>.
      </p>
    </section>
  );
}

function ImageCarouselModal({ images, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      {/* Bouton fermer */}
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-60"
      >
        ×
      </button>

      {/* Contenu du carousel */}
      <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
        
        {/* Image principale */}
        <div className="relative">
          <img
            src={images[currentImageIndex]}
            alt={`Aperçu ${currentImageIndex + 1} du projet`}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
          
          {/* Boutons navigation (si plusieurs images) */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl font-bold w-12 h-12 rounded-full hover:bg-opacity-75 transition-all"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl font-bold w-12 h-12 rounded-full hover:bg-opacity-75 transition-all"
              >
                →
              </button>
            </>
          )}
        </div>

        {/* Indicateurs (points) si plusieurs images */}
        {images.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        )}

        {/* Compteur d'images */}
        {images.length > 1 && (
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}

// === Project Details Modal ===
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-40 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl p-6 max-w-2xl w-full relative max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.titre}</h2>
        <div className="space-y-4">
          {project.details.map((detail, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg text-gray-800">{detail.title}</h4>
              <div
                className="text-gray-600 prose prose-blue"
                dangerouslySetInnerHTML={{ __html: detail.content.replace(/\n/g, '<br />') }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// === Project Card ===
function ProjectCard({ project, onDetailsClick, onImagesClick }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800">{project.titre}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
        <a href={project.lien} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
          Voir le Code
        </a>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onImagesClick(project.images)}
            className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300 flex items-center gap-1"
          >
            📷 Images {project.images.length > 1 && `(${project.images.length})`}
          </button>
          <button
            onClick={() => onDetailsClick(project)}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Détails
          </button>
        </div>
      </div>
    </div>
  );
}

// === Projects Section ===
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);

  const projets = [
    {
    titre: "Moderne Kanban",
    description: "Application web full-stack de gestion de tâches avec authentification et rappels.",
    lien: "https://github.com/Arolejosia/kanban-fullstack",
    liveLink: "https://modernekanban.netlify.app/",
    imageUrls: ["/images/kanban-1.png", "/images/kanban-2.png"],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "TailwindCSS"],
    details: [
      { 
        title: "Objectif", 
        content: "Créer une application complète et robuste pour la gestion de projets personnels, de l'idée au déploiement." 
      },
      { 
        title: "Fonctionnalités", 
        content: "• Authentification sécurisée par JWT<br />• CRUD complet pour les tâches<br />• Glisser-déposer (drag-and-drop) entre les colonnes<br />• Notifications pour les rappels et les échéances" 
      },
      { 
        title: "Architecture", 
        content: "Frontend React hébergé sur Netlify, communicant avec une API Express.js et une base de données PostgreSQL hébergées sur Render." 
      },
    ],
    },
    {
      titre: "myEzer Services",
      description: "Plateforme web & mobile de mise en relation clients–prestataires.",
      lien: "https://github.com/Arolejosia/myEzer-Services-Vitrine",
      images: [
        "/images/ezer1.png",
        "/images/ezer2.png",
        "/images/ezer3.png",
        "/images/ezer4.png"
      ],
      technologies: ["Flutter", "Firebase", "FastAPI", "PWA","Stripe"],
      details: [
        { title: "Pourquoi ?", content: "myEzer simplifie la mise en relation entre clients et prestataires pour des services du quotidien." },
        { title: "Comment ça marche ?", content: "Trois espaces : client, employé, admin. Commandes en temps réel,Geolocalisation, messagerie et notifications instantanées, tableau de bord admin." },
         
      ],
    },
    {
      titre: "Panel Admin",
      description: "Application mobile de mise en relation conducteurs–dépanneurs.",
      lien: "https://github.com/Arolejosia/Brilliant_Agent",
      images: [
        "https://via.placeholder.com/600x400/F97316/FFFFFF?text=Admin+Dashboard",
        "https://via.placeholder.com/600x400/EC4899/FFFFFF?text=User+Management"
      ],
      technologies: ["Flutter", "Dart", "Firebase"],
      details: [
        { title: "Description", content: "Un panel d'administration robuste pour gérer les utilisateurs et les opérations de l'application Brilliant Agent." },
        { title: "Technologies", content: "Construit avec Flutter et Dart, utilisant Firebase pour la base de données et l'authentification." },
        { title: "Fonctionnalités", content: "• Gestion des utilisateurs<br />• Statistiques en temps réel<br />• Modération de contenu<br />• Système de notifications" }
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">Projets</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {projets.map((p, i) => (
          <ProjectCard
            key={i}
            project={p}
            onDetailsClick={setSelectedProject}
            onImagesClick={setSelectedImages}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ImageCarouselModal
        images={selectedImages}
        onClose={() => setSelectedImages(null)}
      />
    </section>
  );
}

function Skills() {
  const skills = ["Flutter", "Firebase", "React", "FastAPI", "SQL", "GitHub", "Render", "Javasript","Express","SQL", "Figma", "UI/UX Design"];
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

