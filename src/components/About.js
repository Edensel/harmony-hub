import React from "react";
<<<<<<< HEAD

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
=======
import { Component } from "react";

export default function ABout () {
    return (
        <div>
            <h1>Project Harmony-Hub</h1>
            <p>Harmony-hub was founded by a group of 4 software developers who wanted to create a better way to discover and enjoy music.</p>
            <h2>Contributors</h2>
            <div>
                <span>Martin Maina</span>
                <span>Ashley Precious</span>
                <span>Alex Musyoki</span>
                <span>Densel</span>
            </div>
            <div>
                <h1>Project Challenges</h1>
                <p>Challenges faced when creating Harmony-hub
                    <ol>
                        <li>Performance-The app needs to run smoothly and quicklywith fast and responsive performance.</li>
                        <li>Data Management-a lot of data Management is required, user data, song data, etc...</li>
                        <li>Design-functional and aesthetically pleasing</li>
                    </ol>
                    </p>  
            </div>

        </div>
    )
}
>>>>>>> 8534cab78b5403f493cea20bef9319aca6cbce86
