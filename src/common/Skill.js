import React from "react";

const skills = [
  { name: "HTML5", image: "html5.svg" },
  { name: "CSS3", image: "css3.svg" },
  { name: "PYTHON", image: "python.svg" },
  { name: "REACT", image: "react.svg" },
  { name: "NODEJS", image: "nodejs.svg" },
  { name: "MONGODB", image: "mongodb.svg" },
  { name: "SQLITE3", image: "sqlite.svg" },
  { name: "JQUERY", image: "jquery.svg" },
  { name: "SASS", image: "sass.svg" },
  { name: "WEB3.JS", image: "web3.svg" },
  { name: "EXPRESS", image: "express.svg" },
  { name: "JSON", image: "json.svg" },
  { name: "GIT", image: "git.svg" },
  { name: "AWS", image: "aws.svg" },
];
const Skill = () => {
  return (
    <section id='Skills' className='Skills'>
      <div className='container'>
          <h2>- Skills -</h2>
        <div
          className='row frame-0f1b28 p-5 rounded-4'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          {skills.map((skill, index) => (
            <div
              className={`col-lg-2 col-md-4`}
              key={skill.name}
            >
              <div className='icon-box' style={{borderRadius:'10px',margin:'10px'}}>
                <img src={`./assets/img/skills/${skill.image}`} alt='' />
                <h3>
                  <a href=''>{skill.name}</a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
