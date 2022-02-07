import { FC } from "react";

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
  const checkReminded = (remindedUserIds: number[]) => {
    if (remindedUserIds.includes(111111)) return "home__icon--active";
    return "home__icon";
  };

  return (
    <div className="home__container--inside">
      <div className="home__wrap--image">
        <img src={imagePath} alt="project item" className="home__image" />
      </div>
      <div className="home__wrap--info">
        <div className="home__inner">
          <h1 className="home__title">{projectName}</h1>
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
      <div className={checkReminded(remindedUserIds)}>
        <img src="/heart.svg" alt="heart icon" width={15} />
      </div>
    </div>
  );
};

export default HomeListItem;
