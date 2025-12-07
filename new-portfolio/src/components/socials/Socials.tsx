import {
  GithubIcon,
  LinkedInIcon,
} from "../../assets/icons/icons";
import "./socials.scss";

interface SocialsProps {}

const Socials: React.FunctionComponent<SocialsProps> = () => {
  return (
    <div className="socialswrapper">
      <a
        className="socialIcons"
        href="https://github.com/EstebanCastilloTello"
        target="_blank"
        rel="noreferrer"
        aria-label="Link to Esteban Castillo's GitHub account"
      >
        <GithubIcon />
      </a>
      
      <a
        className="socialIcons"
        href="https://www.linkedin.com/in/esteban-castillo-tello/"
        target="_blank"
        rel="noreferrer"
        aria-label="Link to Esteban Castillo's LinkedIn account"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default Socials;