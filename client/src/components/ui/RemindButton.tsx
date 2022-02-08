import { FC } from "react";

import { checkReminded } from "../../helperFunctions";
import "../../css/components/ui/remindButton.css";

interface RemindButtonProps {
  remindedUserIds: number[];
}

const RemindButton: FC<RemindButtonProps> = ({ remindedUserIds }) => {
  return (
    <span
      className={checkReminded(
        remindedUserIds,
        "remind__wrap--active",
        "remind__wrap"
      )}
    >
      <img src="/heart.svg" alt="heart" className="remind__image" />
      <p className="remind__text">Remind</p>
    </span>
  );
};

export default RemindButton;
