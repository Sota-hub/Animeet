import { FC } from "react";

import { formatTimeStamp } from "../../helperFunctions";
import "../../css/components/ui/userComment.css";

interface UserCommentProps {
  userName: string;
  commentText: string;
  timeStamp: Date;
}

const UserComment: FC<UserCommentProps> = ({
  userName,
  commentText,
  timeStamp,
}) => {
  return (
    <>
      <div className="userComment__wrap">
        <img src="/user.svg" alt="user icon" className="userComment__image" />
        <p className="userComment__username">{userName}</p>
      </div>
      <p className="userComment__text">{commentText}</p>
      <p className="userComment__timestamp">{formatTimeStamp(timeStamp)}</p>
    </>
  );
};

export default UserComment;
