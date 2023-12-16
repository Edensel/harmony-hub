import React from "react";

const About = () => {
  const teamMembers = [
    {
      name: "Densel Esekon",
      imageSrc: "image_url_1",
      description: "Description for member 1",
      linkedin: "linkedin_link_1",
      github: "github_link_1",
    },
    {
        name: "Martin Maina",
        imageSrc: "image_url_1",
        description: "Description for member 1",
        linkedin: "linkedin_link_1",
        github: "github_link_1",
      },
      {
        name: "Alex Musyoki",
        imageSrc: "image_url_1",
        description: "Description for member 1",
        linkedin: "linkedin_link_1",
        github: "github_link_1",
      },
      {
        name: "Ashley Precious",
        imageSrc: "image_url_1",
        description: "Description for member 1",
        linkedin: "linkedin_link_1",
        github: "github_link_1",
      },
    // Other members to input their data
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img
                src={member.imageSrc}
                className="card-img-top rounded-circle"
                alt={`Team Member ${index + 1}`}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.description}</p>
                <div>
                  <a href={member.linkedin} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href={member.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
