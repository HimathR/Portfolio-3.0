import { ReactElement } from "react";
import { FaPython, FaReact, FaJava, FaDatabase } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiCplusplus,
  SiC,
  SiNextdotjs,
  SiJira,
  SiConfluence,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiTableau,
  SiSlack,
  SiJupyter,
  SiDocker,
  SiMicrosoftoffice,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";

interface SkillGroupProps {
  title: string;
  children: ReactElement | ReactElement[];
}

const SkillGroup = ({ title, children }: SkillGroupProps) => (
  <div className="group flex items-center my-4 justify-center">
    <h2 className="text-4xl w-16 mr-6">{title}</h2>
    <div className="flex space-x-4 items-center text-6xl">{children}</div>
  </div>
);

const Marquee = () => {
  return (
    <div className="overflow-hidden relative w-full px-4 md:px-0">
      <SkillGroup title="👨‍💻">
        <FaPython title="Python" className="text-blue-800" />
        <SiJavascript title="Javascript" className="text-yellow-300" />
        <FaJava title="Java" className="text-orange-400" />
        <SiC title="C/C++" className="text-blue-400" />
        <FaDatabase title="SQL" className="text-gray-500" />
      </SkillGroup>

      <SkillGroup title="🌐">
        <SiTypescript title="Typescript" className="text-blue-500" />
        <FaReact title="React" className="text-blue-400" />
        <SiNextdotjs title="Next.js" className="text-gray-500" />
        <SiRedux title="Redux" className="text-purple-600" />
        <SiTailwindcss title="Tailwind" className="text-green-500" />
      </SkillGroup>

      <SkillGroup title="📊">
        <SiNumpy title="Numpy" className="text-blue-500" />
        <SiPandas title="Pandas" className="text-red-600" />
        <SiJupyter title="Jupyter" className="text-orange-500" />
        <SiTableau title="Tableau" className="text-blue-700" />
        <SiMongodb title="MongoDB" className="text-green-600" />
      </SkillGroup>

      {/* <SkillGroup title="🤝">
        <SiGit title="Git" className="text-3xl text-red-500" />
        <SiGithub title="Github" className="text-3xl text-gray-200" />
        <SiBitbucket title="Bitbucket" className="text-3xl text-blue-500" />
        <SiJira title="Jira" className="text-3xl text-blue-300" />
        <SiSlack title="Slack" className="text-3xl text-purple-500" />
      </SkillGroup>

      <SkillGroup title="🔧">
        <SiMicrosoftoffice
          title="Microsoft Office"
          className="text-3xl text-green-400"
        />
        <SiConfluence title="Confluence" className="text-3xl text-blue-200" />
        <SiVisualstudiocode
          title="VS Code"
          className="text-3xl text-blue-600"
        />
        <SiPostman title="Postman" className="text-3xl text-orange-600" />
        <SiDocker title="Docker" className="text-3xl text-blue-800" />
      </SkillGroup> */}
    </div>
  );
};

export default Marquee;
