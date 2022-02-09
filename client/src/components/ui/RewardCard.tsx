import { FC, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

import { activateStyle } from "../../helperFunctions";
import "../../css/components/ui/rewardCard.css";

interface RewardCardProps {
  id: number;
  supportAmount: number;
  rewardTitle: string;
  rewardDescription: string;
  isChosen: number | null;
  setIsChosen: Dispatch<SetStateAction<number | null>>;
}

const RewardCard: FC<RewardCardProps> = ({
  id,
  supportAmount,
  rewardTitle,
  rewardDescription,
  isChosen,
  setIsChosen,
}) => {
  return (
    <div
      className={activateStyle(
        isChosen,
        id,
        "reward__wrap--active",
        "reward__wrap"
      )}
      onClick={() => setIsChosen(id)}
    >
      <p className="reward__amount">Support with ${supportAmount}</p>
      {/* Mobile */}
      <div className="reward__wrap--mobile">
        <p className="reward__intro--mobile">your reward is</p>
        <h3 className="reward__title--mobile">{rewardTitle}</h3>
        <p className="reward__description--mobile">{rewardDescription}</p>
        <Link
          to="/payment"
          className={activateStyle(
            isChosen,
            id,
            "reward__button--active--mobile",
            "reward__button--mobile"
          )}
        >
          Support with ${supportAmount}
        </Link>
      </div>
    </div>
  );
};

export default RewardCard;
