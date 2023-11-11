import React from "react";

const App = () => {
  const portfolioData = {
    name: "Shaun Mascarenhas",
    reg: "21BCE10817",
    place: "Bhavnagar, Gujarat | India",
    skills: ["Java", "Python", "DSA", "MERN"],
    projects: [
      {
        title: "TinDog",
        description: "It is an online commercial app.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2><u>Registration no:</u> {portfolioData.reg}</h2>
          <h2><u>Postal Location:</u> {portfolioData.place}</h2>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>Description about me:</u></h3>
            <p>As a BTech Computer Science student, I'm passionate about web development. I began with Front-End skills in HTML, CSS, JavaScript, and Bootstrap, and I've recently expanded into Back-End with Node.js and Express.js. I enjoy hands-on projects that seamlessly integrate both front-end and back-end technologies. My goal is to contribute to innovative projects, collaborate with industry professionals, and continue learning. Seeking opportunities as a Full-Stack Developer to drive innovation and create exceptional user experiences.
            </p>
          </div>
          <div className="skills">
            <h3><u>Skills:</u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u>Some Personal Projects: </u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </ul>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
