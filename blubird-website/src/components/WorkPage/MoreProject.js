import React from "react";
import Portfolio9 from "../../assets/images/Work/portfolio9.png"; 
import Portfolio10 from "../../assets/images/Work/portfolio10.png"; 
import "../../assets/css/WorkPage/MoreProject.css";

const MoreProject = () => {
  const projects = [
    {
      id: 1,
      image: Portfolio9, 
      title: "Ore-Ida Deliciously Predictable Extensions",
      description:
        "Best Restaurants is your culinary co-conspirator, dishing out the ultimate passport to Australia's <br />dining delights.",
    },
    {
      id: 2,
      image: Portfolio10,
      title: "Ore-Ida Deliciously Predictable Extensions",
      description:
        "Best Restaurants is your culinary co-conspirator, dishing out the ultimate passport to Australia's <br />dining delights.",
    },
  ];

  return (
    <section className="more-projects-section">
      <h2 className="more-projects-title">
        More <span>Projects</span>
      </h2>
      <div className="more-projects-container">
        {projects.map((project) => (
          <div key={project.id} className="more-project">
            <img src={project.image} alt={project.title} />
            <div className="more-project-info">
              <h3>{project.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreProject;
