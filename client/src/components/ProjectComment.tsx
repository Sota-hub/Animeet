import { FC, MouseEvent, useRef } from "react";

import UserComment from "./ui/UserComment";
import "../css/components/projectComment.css";

type ProjectCommentProps = {
  comments: {
    id: number;
    user_name: string;
    comment_text: string;
    time_stamp: Date;
  }[];
};

const ProjectComment: FC<ProjectCommentProps> = ({ comments }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const submitCommentHandler = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(inputRef.current?.value);
    // FETCH COMMENT
  };

  return (
    <section className="comment__wrap">
      <form className="comment__form" onSubmit={submitCommentHandler}>
        <textarea
          placeholder="comment"
          className="comment__input"
          ref={inputRef}
        />
        <input type="submit" className="comment__button" />
      </form>
      {comments.map((comment) => (
        <UserComment
          key={comment.id}
          userName={comment.user_name}
          commentText={comment.comment_text}
          timeStamp={comment.time_stamp}
        />
      ))}
    </section>
  );
};

export default ProjectComment;
