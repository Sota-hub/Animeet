import { FC } from "react";

import AnnounceCard from "./ui/AnnounceCard";
import "../css/components/projectAnnounce.css";

type ProjectAnnounceProps = {
  announces: {
    id: number;
    announce_text: string;
    time_stamp: Date;
  }[];
};

const ProjectAnnounce: FC<ProjectAnnounceProps> = ({ announces }) => {
  return (
    <div className="announce__wrap">
      {announces.map((announce) => (
        <AnnounceCard
          key={announce.id}
          announceText={announce.announce_text}
          timeStamp={announce.time_stamp}
        />
      ))}
    </div>
  );
};

export default ProjectAnnounce;
