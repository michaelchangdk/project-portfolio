import React from "react";
import { Container } from "../components-styled/Container";
import FeaturedProjectsCard from "../components/FeaturedProjectsCard";
import OtherProjectsCard from "../components/OtherProjectsCard";
import projects from "../data/projects.json";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";

// Filtering Projects
const featuredProjects = projects
  .filter((project) => project.featured === true)
  .reverse();
const otherProjects = projects
  .filter((project) => project.featured === false && project.display === true)
  .reverse();

const Projects = () => {
  return (
    <section>
      <Container>
        <h2 className="section-heading fw-bold montserrat">
          <span className="heading-block">FEATURED PROJECTS</span>
        </h2>
        <div className="featured-projects">
          {featuredProjects.map((project) => {
            return (
              <React.Fragment key={project.id}>
                <FeaturedProjectsCard project={project} />
              </React.Fragment>
            );
          })}
        </div>
        <h2 className="section-heading fw-bold montserrat color-font">
          OTHER PROJECTS
        </h2>
        <div className="other-projects roboto">
          {otherProjects.map((project) => {
            return (
              <React.Fragment key={project.id}>
                <OtherProjectsCard project={project} />
              </React.Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
