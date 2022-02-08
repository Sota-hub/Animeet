import { FC } from "react";

import RemindButton from "./ui/RemindButton";
import CreatorCard from "./ui/CreatorCard";
import "../css/components/projectMain.css";

interface ProjectMainProps {
  projectImagePath: string;
  projectName: string;
  projectDescription: string;
  supportCurrent: number;
  supportTarget: number;
  remindedUserIds: number[];
  expireDate: string;
  creators: { id: number; name: string; position: string }[];
}

const ProjectMain: FC<ProjectMainProps> = ({
  projectImagePath,
  projectName,
  projectDescription,
  supportCurrent,
  supportTarget,
  remindedUserIds,
  expireDate,
  creators,
}) => {
  return (
    <main>
      <div className="main__wrap--image">
        <img src={projectImagePath} alt="project" className="main__image" />
      </div>
      <div className="main__wrap--info">
        <h1 className="main__title">{projectName}</h1>
        <p className="main__description">{projectDescription}</p>
        <a href="/" className="main__button--support">
          <p>Support this project</p>
        </a>
        <div className="main__wrap--support">
          <p className="main__support--current">Supported ${supportCurrent}</p>
          <p className="main__support--target">Supported ${supportTarget}</p>
        </div>
        <p className="main__expiration">
          <span className="main__expiration--span">Expire at</span> {expireDate}
        </p>
        <RemindButton remindedUserIds={remindedUserIds} />
        <p className="main__members">Project members</p>
        <div className="main__wrap--creator">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectMain;
