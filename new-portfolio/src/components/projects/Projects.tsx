import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import "./projects.scss";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

interface ProjectsProps {}

export const projects = [
  {
    name: "GeoIA",
    description:
      "An AI-powered Virtual Assistant integrated into the Valparaíso Municipality GeoPortal. It optimizes access to complex territorial data for citizens and officials through natural language processing.",
    image:
      "https://res.cloudinary.com/dtstm7jkv/image/upload/c_fill,w_710,h_499/v1765247177/GeoIA_2_ajm5uh.png",
    url: "https://geoportal-sistema-de-informacion-geografica-munivalpo.hub.arcgis.com/pages/geo-ia",
    techStack: ["Python", "HTML", "JavaScript", "CSS", "AI Integration"],
  },
  {
    name: "PiLands",
    description:
      "An AI-powered EdTech ecosystem where students build a virtual village by mastering math. Features adaptive difficulty adjustment, instant feedback, and seamless real-time synchronization between a Unity game client and a teacher's analytics dashboard.",
    image:
      "https://res.cloudinary.com/dtstm7jkv/image/upload/c_fill,w_710,h_499/v1765248840/Pilands_pm2u9q.png",
    url: "https://pilands.feriadesoftware.cl/",
    techStack: [
      "Unity (C#)",
      "Firebase",
      "Google Cloud",
      "AI Integration",
      "Product Owner",
      "Innovation"
    ],
  }
];

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div
      className={theme.isDarkmode ? "projectContainerDark" : "projectContainer"}
    >
      <div
        className={theme.isDarkmode ? "projectWrapperDark" : "projectWrapper"}
      >
        {location.pathname === "/" && (
          <SectionHeading sectionName="Selected Projects" />
        )}
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              projectName={project.name}
              image={project.image}
              description={project.description}
              key={project.name}
              link={project.url}
              index={index + 1}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
