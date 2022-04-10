import { FC } from "react";

import ExploreListItem from "./ExploreListItem";
import "../css/components/exploreList.css";

import { ExploreDummy } from "../dummyData";

const ExploreList: FC = () => {
  return (
    <div className="explore__wrap--list">
      {ExploreDummy.map((dummy) => (
        <ExploreListItem
          key={dummy.id}
          imagePath={dummy.imagePath}
          projectName={dummy.projectName}
          remindedUserIds={dummy.remindedUsersIdList}
          supportCurrent={dummy.support_current}
          creatorsName={dummy.creatorsName!}
          projectDescription={dummy.projectDescription}
        />
      ))}
    </div>
  );
};

export default ExploreList;
