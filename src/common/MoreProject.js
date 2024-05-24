import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ title, imageUrl, description }) => {
  return (
    <div className="col-md-6 d-flex align-items-stretch mt-4">
      <div
        className="card"
        style={{ backgroundImage: `url(${imageUrl})` }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="card-body">
          <h5 className="card-title">
            <a href="#">{title}</a>
          </h5>
          <p className="card-text">{description}</p>
          <div className="read-more">
            <a href="#">
              <i className="bi bi-arrow-right"></i> Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const MoreProjects = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Sample project data
  const projectData = {
    title: 'Sample Project',
    description: 'This is a sample project description.',
    status: 'In Progress',
  };

  // Function to handle modal close
  const handleClose = () => {
    setModalOpen(false);
  };

  const projects = [
    {
      title: "ChainSight",
      imageUrl: "assets/img/projects/more-projects-0.png",
      description:
        "Chainsight is a leading-edge blockchain explorer that unveils the true potential of the decentralized Web3 landscape. This is more than just an explorer; it's a game-changer that bridges the gap between complexity and simplicity, bringing transparency, accenssibility, and excitement to the realm of blockchain technology. Imagine a world where blockchain data is not only accessible but also engaging.",
    },
    {
      title: "MMOFury",
      imageUrl: "assets/img/projects/mmofury.png",
      description:
        "MMOFury is a French-based company established in 2020, focused on providing gaming services such as accounts, gold, and boosting services for World of Warcraft Classic.",
    },
    {
      title: "Chat bot",
      imageUrl: "assets/img/projects/more-projects-5.png",
      description:
        `MEE6 is a popular Discord bot known for its moderation tools, leveling system, custom commands, music player, welcome/farewell messages, auto role assignment, customizable XP settings, and premium features. It helps server admins manage and customize their Discord communities efficiently.`,
    },
    {
      title: "Zapier",
      imageUrl: "assets/img/projects/more-projects-1.jpg",
      description:
        "Zapier is an online automation tool that allows you to connect various web applications and automate workflows between them.",
    },
    {
      title: "Ubey",
      imageUrl: "assets/img/projects/more-projects-2.jpg",
      description:
        "Ubuy is an international e-commerce platform that has been associated with using the MERN stack.",
    },
    {
      title: "Pizzahut",
      imageUrl: "assets/img/projects/more-projects-3.jpg",
      description:
        "The Middle East branch of Pizza Hut has been reported to use the MERN stack for its online ordering system.",
    },
    {
      title: "Inky Deals",
      imageUrl: "assets/img/projects/more-projects-4.jpg",
      description:
        "Inky Deals, a design deals website, has been mentioned as a MERN stack project.",
    },
  ];

  return (
    <>
    {/* <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <ProjectModal open={modalOpen} handleClose={handleClose} project={projectData} />
    </div> */}
    <section id="more-projects" className="more-projects">
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
    </>
  
  );
};

export default MoreProjects;
