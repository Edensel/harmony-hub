import React from "react";


const About = () => {
  const teamMembers = [
    {
      name: "Densel Esekon",
      imageSrc: "./assets/Densel.jpeg",
      description: "Scrum Master - ",
      more: "Worked on UI Design, Navbar and About Page",
      linkedin: "www.https://www.linkedin.com/in/denselesekon",
      github: "https://github.com/Edensel",
    },
    {
        name: "Martin Maina",
        imageSrc: "./assets/Martin.png",
        description: "Collaborator - ",
        more: "Worked on Card Component",
        linkedin: "https://www.linkedin.com/in/mainamartin",
        github: "https://github.com/TintinSDev",
      },
      {
        name: "Alex Musyoki",
        imageSrc: "./assets/Alex.jpg",
        description: "Collaborator - ",
        more: "Worked on FavoriteMusic and Project README",
        linkedin: "https://www.linkedin.com/in/alex-musyoki-153a142a5", 
        github: "https://github.com/nezhprodigy",
      },
      {
        name: "Ashley Precious",
        imageSrc: "./assets/Ashley.jpg",
        description: "Collaborator - ",
        more: "Worked on Card CreatePlaylist component",
        linkedin: "https://www.linkedin.com/in/ashley-precious-a3b291236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "https://github.com/Ashleyprecious",
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
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="card-text font-weight-bold">{member.description}<span className="text-italic">{member.more}</span></h6>
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
