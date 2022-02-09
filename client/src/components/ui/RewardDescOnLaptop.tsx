import { FC } from "react";
import { Link } from "react-router-dom";

import { activateStyle } from "../../helperFunctions";
import "../../css/components/ui/rewardDescOnLaptop.css";

interface RewardDescOnLaptopProps {
  id: number;
  supportAmount: number;
  rewardTitle: string;
  rewardDescription: string;
  isChosen: number | null;
}

const RewardDescOnLaptop: FC<RewardDescOnLaptopProps> = ({
  id,
  supportAmount,
  rewardTitle,
  rewardDescription,
  isChosen,
}) => {
  return (
    <div
      className={activateStyle(
        isChosen,
        id,
        "reward__wrap--laptop--active",
        "reward__wrap--laptop"
      )}
    >
      <p className="reward__intro--laptop">your reward is</p>
      <h3 className="reward__title--laptop">{rewardTitle}</h3>
      <p className="reward__description--laptop">{rewardDescription}</p>
      <Link to="/payment" className="reward__link--laptop">
        Support with ${supportAmount}
      </Link>
    </div>
  );
};

export default RewardDescOnLaptop;
