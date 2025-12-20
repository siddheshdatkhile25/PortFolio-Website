export default function Projects() {
  const projects = [
    {
      title: "Online Electronic Shopping Portal",
      desc: "Online Electronic shopping platform",
      github: "https://github.com/siddheshdatkhile25/Online-Electronic-Shopping-Portal-"
    },
    {
      title: "College Placement Management System",
      desc: "Web app for managing placements & recruiters.",
      github: "https://github.com/siddheshdatkhile25/College-Placement-Portal"
    },
    {
      title: "AgroShield",
      desc: "Fertilizer eCommerce with crop & fertilizer recommendations.",
      github: "https://github.com/YOUR_GITHUB_USERNAME/agroshield"
    }
    
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="grid grid-2">
          {projects.map(project => (
            <div key={project.title} className="card">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="project-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.79 2.74 1.27 3.41.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.38 2.88-.38s1.96.13 2.88.38c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.42-5.25 5.71.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.8.56 4.56-1.53 7.85-5.86 7.85-10.97C23.5 5.74 18.27.5 12 .5z"/>
                  </svg>
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
