import { useContext } from "react";
// 1. Componentes internos de icons.tsx (Los que NO tienen archivo externo)
import {
  HtmlIcon,
  JavascriptIcon,
  ReactIcon,
  TailwindIcon,
  SassIcon,
  TypescriptIcon,
  GitIcon,
  FirebaseIcon,
  NodeIcon,
  ExpressIcon,
  DockerIcon,
  LinuxIcon,
} from "../../assets/icons/icons";

// 2. Archivos Externos (SVG y PNG)
// -- Nuevos Agregados --
import nextSvg from "../../assets/icons/next-dot-js-svgrepo-com.svg";
import nestSvg from "../../assets/icons/nestjs-svgrepo-com.svg";
import cSharpPng from "../../assets/icons/Logo_C_sharp.svg.png"; // Ojo: es PNG según tu nombre de archivo
import mysqlSvg from "../../assets/icons/mysql-logo-svgrepo-com.svg";
import nginxSvg from "../../assets/icons/nginx-16-svgrepo-com.svg";

// -- Agregados Anteriormente --
import awsSvg from "../../assets/icons/aws-svgrepo-com.svg";
import pythonSvg from "../../assets/icons/python-svgrepo-com.svg";
import djangoSvg from "../../assets/icons/django-svgrepo-com.svg";
import postgresSvg from "../../assets/icons/postgresql-logo-svgrepo-com.svg";
import fastApiSvg from "../../assets/icons/fastapi-svgrepo-com.svg";
import rabbitMqSvg from "../../assets/icons/rabbitmq-icon-svgrepo-com.svg";

import SectionHeading from "../section-heading/SectionHeading";
import SkillsCard from "./SkillsCard";
import "./skills.scss";
import { ThemeContext } from "../../App";

interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = () => {
  const theme = useContext(ThemeContext);

  // Helper para renderizar los iconos externos (SVG o PNG) como imagen
  const renderExternalIcon = (src: string, alt: string) => (
    <img 
      src={src} 
      alt={alt} 
      width="24" 
      height="24" 
      style={{ objectFit: "contain", display: "block" }} 
    />
  );

  // 1. Frontend & UI
  const frontendSkills = [
    { name: "TypeScript", icon: <TypescriptIcon /> },
    { name: "JavaScript", icon: <JavascriptIcon /> },
    { name: "HTML5/CSS3", icon: <HtmlIcon /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "Next.js", icon: renderExternalIcon(nextSvg, "Next.js") },
    { name: "Tailwind CSS", icon: <TailwindIcon /> },
    { name: "Sass", icon: <SassIcon /> },
  ];

  // 2. Backend & Core
  const backendSkills = [
    { name: "Python", icon: renderExternalIcon(pythonSvg, "Python") },
    { name: "Node.js", icon: <NodeIcon /> },
    { name: "C#", icon: renderExternalIcon(cSharpPng, "C#") },
    { name: "NestJS", icon: renderExternalIcon(nestSvg, "NestJS") },
    { name: "Express", icon: <ExpressIcon /> },
    { name: "FastAPI", icon: renderExternalIcon(fastApiSvg, "FastAPI") },
    { name: "Django", icon: renderExternalIcon(djangoSvg, "Django") },
  ];

  // 3. Datos & Infraestructura
  const infraSkills = [
    { name: "PostgreSQL", icon: renderExternalIcon(postgresSvg, "PostgreSQL") },
    { name: "MySQL", icon: renderExternalIcon(mysqlSvg, "MySQL") },
    { name: "Firebase", icon: <FirebaseIcon /> },
    { name: "Docker", icon: <DockerIcon /> },
    { name: "Git/GitHub", icon: <GitIcon /> },
    { name: "Nginx", icon: renderExternalIcon(nginxSvg, "Nginx") },
    { name: "AWS", icon: renderExternalIcon(awsSvg, "AWS") },
    { name: "RabbitMQ", icon: renderExternalIcon(rabbitMqSvg, "RabbitMQ") },
    { name: "Linux", icon: <LinuxIcon /> },
  ];

  return (
    <div className={theme.isDarkmode ? "skillscontainerDark" : "skillscontainer"}>
      <div className="skillsWrapper">
        <SectionHeading sectionName="Habilidades Técnicas" />
        
        <div className="flexSkills">
          
          {/* Columna 1: Frontend */}
          <div className="progLangs">
            <h3 className="skill-head">Frontend & UI</h3>
            <div className="skillsWrap">
              {frontendSkills.map((skill) => (
                <SkillsCard key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Columna 2: Backend */}
          <div className="libraries">
            <h3 className="skill-head">Backend & Core</h3>
            <div className="skillsWrap">
              {backendSkills.map((skill) => (
                <SkillsCard key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>

          {/* Columna 3: Infraestructura */}
          <div className="tools">
            <h3 className="skill-head">Data & Infra</h3>
            <div className="skillsWrap">
              {infraSkills.map((skill) => (
                <SkillsCard key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;