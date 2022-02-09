import { FC, useState } from "react";

import RewardCard from "./ui/RewardCard";
import RewardDescOnLaptop from "./ui/RewardDescOnLaptop";
import "../css/components/supportList.css";

interface SupportListProps {
  projectName: string;
  supports: {
    id: number;
    support_amount: number;
    reward_title: string;
    reward_description: string;
  }[];
}

const SupportList: FC<SupportListProps> = ({ projectName, supports }) => {
  const [isChosen, setIsChosen] = useState<number | null>(null);

  return (
    <>
      <div className="support__wrap--title">
        <h1 className="support__title">{projectName}</h1>
      </div>
      <div className="support__wrap--rewards">
        <p className="support__intro">Choose a reward</p>
        <div className="support--wrap--rewardCard">
          {supports.map((support) => (
            <RewardCard
              key={support.id}
              id={support.id}
              supportAmount={support.support_amount}
              rewardTitle={support.reward_title}
              rewardDescription={support.reward_description}
              isChosen={isChosen}
              setIsChosen={setIsChosen}
            />
          ))}
        </div>
        {supports.map((support) => (
          <RewardDescOnLaptop
            key={support.id}
            id={support.id}
            supportAmount={support.support_amount}
            rewardTitle={support.reward_title}
            rewardDescription={support.reward_description}
            isChosen={isChosen}
          />
        ))}
      </div>
    </>
  );
};

export default SupportList;
