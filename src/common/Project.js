const Project = () => {
  // Define an array of project data
  const projects = [
    {
      iconClass: 'bx bxl-dribbble',
      title: 'Blochchain & Cryptocurrency',
      description: 'I worked as a computer engineer and completed over 10 projects.',
      delay: '100'
    },
    {
      iconClass: 'bx bx-file',
      title: 'Artificial Intelligence',
      description: 'I completed more than 20 projects.',
      delay: '200'
    },
    {
      iconClass: 'bx bx-tachometer',
      title: 'MERN Stack',
      description: 'I completed more than 16 projects.',
      delay: '300'
    },
    {
      iconClass: 'bx bx-world',
      title: 'Other Projects',
      description: 'I have experience as a DevOps Engineer and website designer, having successfully completed more than 30 projects.',
      delay: '400'
    }
  ];

  return (
    <div id='projects' className='projects'>
      <div className='container'>
        <div className='section-title' data-aos='fade-up'>
          <h2>Latest Projects</h2>
        </div>
        {/* <div className='row'>
          {projects.map((project, index) => (
            <div key={index} className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'>
              <div className='icon-box' data-aos='fade-up' data-aos-delay={project.delay}>
                <div className='icon'>
                  <i className={project.iconClass}></i>
                </div>
                <h4 className='title'>
                  <a href=''>{project.title}</a>
                </h4>
                <p className='description'>{project.description}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Project;