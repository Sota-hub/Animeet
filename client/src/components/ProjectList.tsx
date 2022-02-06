import { FC } from "react";

import ProjectListItem from "./ProjectListItem";
import "../css/components/projectList.css";

interface ProjectListProps {
  category: string;
}

// ===========================================
const DummyData = [
  {
    id: "1",
    imagePath: "/bird.jpg",
    projectName: "Dragon ball",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione dicta, totam, magni sit deserunt quo consectetur repellendus ipsam quisquam quia sapiente. Mollitia nam saepe aperiam facere, impedit dolor aspernatur nobis!",
    creatorsName: ["max", "jonas"],
    expireDate: "Apr 1",
    remindedUsersIdList: [11111, 22222],
  },
  {
    id: "2",
    imagePath: "/paripi.jpg",
    projectName: "One piece",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione dicta, totam, magni sit deserunt quo consectetur repellendus ipsam quisquam quia sapiente. Mollitia nam saepe aperiam facere, impedit dolor aspernatur nobis!",
    creatorsName: ["stephen", "colt", "stephan"],
    expireDate: "Apr 20",
    remindedUsersIdList: [111111, 222222],
  },
  {
    id: "3",
    imagePath: "/paripi.jpg",
    projectName: "One piece",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione dicta, totam, magni sit deserunt quo consectetur repellendus ipsam quisquam quia sapiente. Mollitia nam saepe aperiam facere, impedit dolor aspernatur nobis!",
    creatorsName: ["stephen", "colt", "stephan"],
    expireDate: "Apr 20",
    remindedUsersIdList: [111111, 222222],
  },
  {
    id: "4",
    imagePath: "/paripi.jpg",
    projectName: "One piece",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione dicta, totam, magni sit deserunt quo consectetur repellendus ipsam quisquam quia sapiente. Mollitia nam saepe aperiam facere, impedit dolor aspernatur nobis!",
    creatorsName: ["stephen", "colt", "stephan"],
    expireDate: "Apr 20",
    remindedUsersIdList: [111111, 222222],
  },
];
// ===========================================

const ProjectList: FC<ProjectListProps> = ({ category }) => {
  // fetching items by category

  return (
    <div className="project__container--list">
      {DummyData.map((dummy) => (
        <ProjectListItem
          key={dummy.id}
          imagePath={dummy.imagePath}
          projectName={dummy.projectName}
          projectDescription={dummy.projectDescription}
          creatorsName={dummy.creatorsName!}
          expireDate={dummy.expireDate}
          remindedUserIds={dummy.remindedUsersIdList}
        />
      ))}
    </div>
  );
};

export default ProjectList;
