import { useContext } from "react";
import "./about.scss";
import { ThemeContext } from "../../App";
import AnimatedText from "../animatedText/AnimatedText";

interface AboutMeProps {}

const AboutMe: React.FunctionComponent<AboutMeProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "abtMewrapperDark" : "abtMewrapper"}>
      <div className="abtCont">
        <img
          src="https://res.cloudinary.com/dtstm7jkv/image/upload/v1765122286/Foto_Principal_1_qqxv2r.png" 
          alt="Esteban Castillo"
        />
        <div className="details">
          {/* Agregamos 'notranslate' para proteger tu nombre de traductores automáticos */}
          <div className="notranslate">
            <AnimatedText
              text="Meet Esteban Castillo."
              className={theme.isDarkmode ? "meetDark" : "meet"}
              once
            />
          </div>
          
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I'm a <b>Computer Science Engineer</b> nearing graduation from Universidad Técnica Federico Santa María (USM). 
            Unlike typical developers, I thrive at the intersection of <b>technical architecture</b> and <b>product strategy</b>. 
            I don't just write code; I design scalable systems and lead teams to solve real-world problems, always bridging the gap between complex engineering and business goals.
          </p>

          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            My journey is defined by <b>entrepreneurship and impact</b>. Currently, I lead <b>PiLands</b>, an AI-driven EdTech startup, 
            where I act as both Lead Engineer and Product Owner. Previously, I developed software solutions for the <b>Municipality of Valparaíso</b>. 
            My technical arsenal includes <b>Python, Node.js, TypeScript</b>, and Cloud Infrastructure, always applied with a focus on clean architecture and efficiency.
          </p>

          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            Beyond the screen, I’m driven by a passion for leadership and innovation. 
            When I'm not architecting backends or planning sprints, you'll find me exploring new business ideas or spending quality time with my family. 
            I believe technology should have a purpose, and I bring that "purpose-driven" mindset to every project I touch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;