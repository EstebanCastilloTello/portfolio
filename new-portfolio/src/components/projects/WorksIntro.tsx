import { useContext } from "react";
import { ThemeContext } from "../../App";

interface WorksIntroProps {}

const WorksIntro: React.FunctionComponent<WorksIntroProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "introWrapperDark" : "introWrapper"}>
      <div className="flexWks">
        <div className="textsintro">
          <p className={theme.isDarkmode ? "intTrextDark" : "intTrext"}>
            My work sits at the intersection of <b>Software Engineering</b> and <b>Product Strategy</b>. 
            I specialize in building end-to-end digital solutions, from scalable backend architectures to intuitive frontend interfaces.
            <br /><br />
            My experience ranges from founding an EdTech startup (<b>PiLands</b>) to developing AI-integrated solutions for the public sector, always focusing on impact and scalability.
          </p>
          <p className={theme.isDarkmode ? "belDark" : "bel"}>
            View selected projects below
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dtstm7jkv/image/upload/v1765064123/Foto_Principal_dojnb7.svg"
          alt="Esteban Castillo"
        />
      </div>
    </div>
  );
};

export default WorksIntro;