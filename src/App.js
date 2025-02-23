import './App.css';

function Header() {
  return (
    <header>
      <h1>David Leonel</h1>
      <p>Desarrollador back - DevOvps engineer</p>
    </header>
  );
}

// Componente AboutMe
function AboutMe() {
  return (
    <section id="about-me">
      <h2>Acerca de mí</h2>
      <p>Apasionado por la tecnología con experiencia como Backend Developer y DevOps Engineer,
        combinando habilidades en Java y Python con una sólida experiencia en herramientas de CI/CD como
        Jenkins, SonarQube y Docker. Además, cuento con conocimientos en servicios de AWS.</p>
    </section>
  );
}

function Projects() {
  const proyectos = [
    { nombre: 'SCRAPING AWS', 
      tools: 'Python, AWS(Lambda, S3, CloudFornt, CodePipeline, ACM, Api Gateway, EventBridge)', 
      descripcion: 'Scraping utilizando servicios de AWS',
      enlace:'https://www.leoinfo.es/',
      textoEnlace:'aquí' 
    },
    { nombre: 'Incidencias Pío Baroja', 
      tools: 'TFG. PHP, Javascript, JQuery', 
      descripcion: 'Gestor de incidencias de mi antiguo instituto',
      enlace: '',
      textoEnlace: ''
    },
  ];

  return (
    <section id="experiencie">
      <h2>Mis Proyectos</h2>
      <ul>
        {proyectos.map((proyecto, index) => (
          <li key={index}>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.tools}</p>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.enlace}>{proyecto.textoEnlace}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Componente Projects
function Experiencie() {
  const experiencies = [
    { puesto: 'DevOps engineer', 
      empresa: 'Alten', 
      fecha: '07/24-Actualidad',
      descripcion: 'CI/CD' 
    },

    { puesto: 'Prácticas', 
      empresa: 'Alten',
      fecha: '03/24-06/24',
      descripcion: 'tal y cual' 
    },
  ];

  return (
    <section id="projects">
      <h2>Experiencia Laboral</h2>
      <ul>
        {experiencies.map((experiencie, index) => (
          <li key={index}>
            <h3>{experiencie.puesto}</h3>
            <h4>{experiencie.empresa} {experiencie.fecha}</h4>
            <p>{experiencie.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Componente Contact
function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>Correo: dmarchenad123@gmail.com</p>
    </section>
  );
}

// Componente principal App
function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experiencie />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;