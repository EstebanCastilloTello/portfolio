import { useContext } from "react";
import {
  GmailDarkIcon,
  GmailIcon,
  LinkedInContactIcon,
  GithubContactIcon, // <--- CAMBIO AQUÍ: Importamos el icono grande

} from "../../assets/icons/icons";
import ContactCard from "./ContactCard";
import "./contact.scss";
import { ThemeContext } from "../../App";

interface MeansOfContactProps {}

const MeansOfContact: React.FunctionComponent<MeansOfContactProps> = () => {
  const theme = useContext(ThemeContext);

  const contacts = [
    {
      icon: theme.isDarkmode ? <GmailDarkIcon /> : <GmailIcon />,
      appText: "Send me an email",
      appDetails: (
        <a href="mailto:esteban.castillo@usm.cl" aria-label="send esteban a mail">
          esteban.castillo@usm.cl
        </a>
      ),
    },
    {
      // Usamos el NUEVO icono grande
      icon: <GithubContactIcon />, 
      appText: "Check my code",
      appDetails: (
        <a
          href="https://github.com/EstebanCastilloTello"
          target="_blank"
          rel="noreferrer"
          aria-label="follow esteban on github"
        >
          @EstebanCastilloTello
        </a>
      ),
    },
    {
      icon: <LinkedInContactIcon />,
      appText: "Connect with me on LinkedIn",
      appDetails: (
        <a
          href="https://www.linkedin.com/in/esteban-castillo-tello/"
          target="_blank"
          rel="noreferrer"
          aria-label="connect with Esteban on Linkedin"
        >
          Esteban Castillo
        </a>
      ),
    },
  ];
  return (
    <div className={theme.isDarkmode ? "flexMeansDark" : "flexMeans"}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.appText}
          icon={contact.icon}
          appName={contact.appText}
          details={contact.appDetails}
        />
      ))}
    </div>
  );
};

export default MeansOfContact;