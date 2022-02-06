import { FC } from "react";

import "../css/components/projectListItem.css";

interface ProjectListItemProps {
  imagePath: string;
  projectName: string;
  projectDescription: string;
  creatorsName: string[];
  expireDate: string;
  remindedUserIds: number[];
}

const ProjectListItem: FC<ProjectListItemProps> = ({
  imagePath,
  projectName,
  projectDescription,
  creatorsName,
  expireDate,
  remindedUserIds,
}) => {
  const checkReminded = (remindedUserIds: number[]) => {
    if (remindedUserIds.includes(111111)) return "project__icon--active";
    return "project__icon";
  };

  return (
    <div className="project__container">
      <div className="project__image--wrap">
        <img src={imagePath} alt="project item" className="project__image" />
      </div>
      <div className="project__wrap--info">
        <div className="projection__inner">
          <p className="project__name">{projectName}</p>
          <p className="project__description">{projectDescription}</p>
          <div className="project__creator">
            <span>{creatorsName[0]}</span>
            <span>
              {creatorsName.length > 1 && `+${creatorsName.length - 1}`}
            </span>
          </div>
          <p className="project__expiration">{`Expired at ${expireDate}`}</p>
        </div>
      </div>
      <div className={checkReminded(remindedUserIds)}>
        <img src="/heart.svg" alt="heart icon" width={15} />
      </div>
    </div>
  );
};

export default ProjectListItem;
