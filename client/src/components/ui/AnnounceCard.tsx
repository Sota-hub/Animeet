import { FC } from "react";

import { formatTimeStamp } from "../../helperFunctions";
import "../../css/components/ui/announceCard.css";

interface AnnounceCardProps {
  announceText: string;
  timeStamp: Date;
}

const AnnounceCard: FC<AnnounceCardProps> = ({ announceText, timeStamp }) => {
  return (
    <>
      <p className="announce__timestamp">{formatTimeStamp(timeStamp)}</p>
      <div className="announce__wrap--text">
        <p className="announce__text">{announceText}</p>
      </div>
    </>
  );
};

export default AnnounceCard;
