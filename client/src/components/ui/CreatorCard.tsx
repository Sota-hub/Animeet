import { FC } from "react";

import "../../css/components/ui/creatorCard.css";

interface CreatorCardProps {
  creator: { id: number; name: string; position: string };
}

const CreatorCard: FC<CreatorCardProps> = ({ creator }) => {
  return (
    <div className="creator__wrap">
      <img src="/user.svg" alt="user" className="creator__image" />
      <div>
        <p className="creator__name">{creator.name}</p>
        <p className="creator_position">{creator.position}</p>
      </div>
    </div>
  );
};

export default CreatorCard;
