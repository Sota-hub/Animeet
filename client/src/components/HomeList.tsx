import { FC } from "react";

import HomeListItem from "./HomeListItem";
import "../css/components/homeList.css";

import { HomeDummy } from "../dummyData";

interface HomeListProps {
  category: string;
}

const HomeList: FC<HomeListProps> = ({ category }) => {
  // fetching items by category

  return (
    <div className="home__container--outside">
      {HomeDummy.map((dummy) => (
        <HomeListItem
          key={dummy.id}
          imagePath={dummy.imagePath}
          projectName={dummy.projectName}
          projectDescription={dummy.projectDescription}
          creatorsName={dummy.creatorsName!}
          expireDate={dummy.expireDate}
          remindedUserIds={dummy.remindedUsersIdList}
        />
      ))}
    </div>
  );
};

export default HomeList;
