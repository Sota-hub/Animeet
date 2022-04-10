import { FC } from "react";
import { Link } from "react-router-dom";

import RemindButton from "./ui/RemindButton";
import "../css/components/exploreListItem.css";

interface ExploreListItemProps {
  imagePath: string;
  projectName: string;
  remindedUserIds: number[];
  supportCurrent: number;
  creatorsName: string[];
  projectDescription: string;
}

const ExploreListItem: FC<ExploreListItemProps> = ({
  imagePath,
  projectName,
  remindedUserIds,
  supportCurrent,
  creatorsName,
  projectDescription,
}) => {
  return (
    <div className="explore__wrap--item">
      <img src={imagePath} alt="project" className="explore__image" />
      <div className="explore__wrap--info">
        <Link to="/project" className="explore__title">
          {projectName}
        </Link>
        <RemindButton remindedUserIds={remindedUserIds} />
        <p className="explore__current--support">Supported ${supportCurrent}</p>
        <span className="explore__creators">{creatorsName[0]}</span>
        <span className="explore__creators">
          {creatorsName.length > 1 && `+${creatorsName.length - 1}`}
        </span>
        <p className="explore__description">{projectDescription}</p>
      </div>
    </div>
  );
};

export default ExploreListItem;
