import { FC } from "react";

import { initialMonth } from "../../stringArrays";
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
  const formatTimeStamp = (timeStamp: Date) => {
    const year = timeStamp.getFullYear();
    const month = initialMonth[timeStamp.getMonth()];
    const day = timeStamp.getDate();
    return `${month} ${day} ${year}`;
  };

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
