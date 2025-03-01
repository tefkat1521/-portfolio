import './App.css';

function Header() {
  return (
    <header>
      <h1>David Leonel</h1>
      <p>Backend Developer - DevOvps engineer</p>
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
    { nombre: 'WEB SCRAPING Utilizando servicios de AWS', 
      tools: 'Python, AWS(Lambda, S3, CloudFornt, CodePipeline, ACM, Api Gateway, EventBridge)', 
      descripcion: 'Scraping utilizando servicios de AWS',
      enlace:'https://d2u97t2v5sywk5.cloudfront.net/ScrapingFront/index.html',
      textoEnlace:'enlace de la web',
      github:'https://github.com/tefkat1521/scrapingFront'
    },
    { nombre: 'Incidencias Pío Baroja', 
      tools: 'PHP, Javascript, JQuery, SQL', 
      descripcion: 'Gestor de incidencias IT del instituto Pío Baroja.',
      enlace: '',
      textoEnlace: '',
      github: 'https://github.com/tefkat1521/IncidenciasTIC_PIO_BAROJA'
    },
  ];

  return (
    <section id="projects">
      <h2>Mis Proyectos</h2>
      <ul>
        {proyectos.map((proyecto, index) => (
          <li key={index}>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <p><b>Tecnologías Utilizadas:</b>{proyecto.tools}</p>
            <a href={proyecto.enlace}>{proyecto.textoEnlace}</a>
            <br/>
            <a href={proyecto.github}>Github</a>
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
      descripcion: 'Soy responsable de la gestión diaria de la compilación y publicación de múltiples proyectos en diversas arquitecturas, incluidas aquellas basadas en microservicios. Diseño, desarrollo y mantengo pipelines en Jenkins utilizando Groovy, y trabajo constantemente con herramientas como SonarQube, Nexus, Artifactory y Git, garantizando la integración continua y la calidad del código. También participo en el desarrollo de nuevas funcionalidades para proyectos Java, aportando mejoras y optimizaciones a sistemas existentes. Todo esto lo realizo dentro de un entorno ágil basado en Scrum, colaborando con mi equipo para alcanzar los objetivos del sprint de forma eficiente.' 
    },

    { puesto: 'Prácticas', 
      empresa: 'Alten',
      fecha: '03/24-06/24',
      descripcion: 'Durante mis prácticas, desarrollé habilidades sólidas en el manejo de contenedores y CI/CD, utilizando tecnologías como Docker y Kubernetes. Implementé pipelines de integración continua y entrega continua para automatizar el desarrollo y despliegue de software. Esta experiencia me brindó una comprensión profunda de los principios y prácticas de DevOps.' 
    },
  ];

  return (
    <section id="projects">
      <h2>Experiencia Laboral</h2>
      <ul>
        {experiencies.map((experiencie, index) => (
          <li key={index}>
            <h3>{experiencie.puesto}</h3>
            <h4>{experiencie.empresa}   {experiencie.fecha}</h4>
            <p>{experiencie.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Componente Contact
function Contact() {
  const plataformas = [
    {
      plataforma: 'Linkedin',
      imagen: 'icons/linkedin.png',
      enlace: 'https://www.linkedin.com/in/david-leonel-marchena/',
      imageSize: 30
    },
    {
      plataforma: 'Github',
      imagen: '/icons/github.png',
      enlace: 'https://github.com/tefkat1521',
      imageSize: 30
    }
  ];

  return (
    <section id="contact">
      {plataformas.map((plataforma, index) => (
        <a key={index} href={plataforma.enlace} target="_blank" rel="noopener noreferrer">
          <img
            alt={plataforma.plataforma}
            src={plataforma.imagen}
            style={{
              width: plataforma.imageSize,
              height: plataforma.imageSize
            }}
          />
        </a>
      ))}
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