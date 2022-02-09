import { FC } from "react";
import { Link } from "react-router-dom";

import { checkReminded } from "../helperFunctions";
import "../css/components/homeListItem.css";

interface HomeListItemProps {
  imagePath: string;
  projectName: string;
  projectDescription: string;
  creatorsName: string[];
  expireDate: string;
  remindedUserIds: number[];
}

const HomeListItem: FC<HomeListItemProps> = ({
  imagePath,
  projectName,
  projectDescription,
  creatorsName,
  expireDate,
  remindedUserIds,
}) => {
  return (
    <div className="home__container--inside">
      <div className="home__wrap--image">
        <img src={imagePath} alt="project item" className="home__image" />
      </div>
      <div className="home__wrap--info">
        <div className="home__inner">
          <Link to="/project" className="home__title">
            {projectName}
          </Link>
          <p className="home__description">{projectDescription}</p>
          <div className="home__creator">
            <span>{creatorsName[0]}</span>
            <span>
              {creatorsName.length > 1 && `+${creatorsName.length - 1}`}
            </span>
          </div>
          <p className="home__expiration">{`Expired at ${expireDate}`}</p>
        </div>
      </div>
      <div
        className={checkReminded(
          remindedUserIds,
          "home__icon--active",
          "home__icon"
        )}
      >
        <img src="/heart.svg" alt="heart icon" width={15} />
      </div>
    </div>
  );
};

export default HomeListItem;
