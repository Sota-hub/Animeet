import { FC } from "react";

import ProjectMain from "../components/ProjectMain";
import ProjectPlan from "../components/ProjectPlan";
import ProjectComment from "../components/ProjectComment";
import ProjectAnnounce from "../components/ProjectAnnounce";

const Dummy = {
  id: 1,
  project_image_path: "/bird.jpg",
  project_name: "Dragon Ball",
  project_description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus nostrum similique ab. Tempora impedit aspernatur hic corporis dolor dicta vel rerum magni blanditiis saepe. Distinctio dolorem eius eos alias!",
  support_current: 100,
  support_target: 230,
  //reminded_users_id
  reminded_users_id: [111111, 222222],
  expire_date: "Apr 1",
  creators: [
    { id: 1, name: "Stephen", position: "Animater" },
    { id: 2, name: "Colt", position: "Character designer" },
    { id: 3, name: "Stephan", position: "Sinario writer" },
  ],
  //PLAN
  story:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet eveniet vel, voluptate quae praesentium accusantium aperiam quas a veniam nesciunt dignissimos porro, voluptates perferendis optio velit sequi, quidem explicabo.",
  character_design_path: "/bird.jpg",
  original_picture_path: "/bird.jpg",
  voice_path: "/se.mp3",
  sound_effect_path: "/se.mp3",
  //COMMENT
  user_id: 111111,
  comment_text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iste cumque architecto omnis reprehenderit quaerat cupiditate, tempora labore blanditiis libero laudantium ipsa illum dolorem placeat earum deleniti maxime voluptatem expedita!",
  time_stamp: Date.now(),
  //ANNOUNCE
  announce_text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui debitis suscipit praesentium minus, dolore sint iure vero doloribus mollitia repudiandae dolores odit, quaerat adipisci. Hic incidunt accusantium nam dolores consequuntur!",
  // time_stamp: Date.now(),
};

const ProjectScreen: FC = () => {
  return (
    <>
      <ProjectMain
        projectImagePath={Dummy.project_image_path}
        projectName={Dummy.project_name}
        projectDescription={Dummy.project_description}
        supportCurrent={Dummy.support_current}
        supportTarget={Dummy.support_target}
        remindedUserIds={Dummy.reminded_users_id}
        expireDate={Dummy.expire_date}
        creators={Dummy.creators}
      />
      <ProjectPlan />
      {/* <ProjectComment />
      <ProjectAnnounce /> */}
    </>
  );
};

export default ProjectScreen;
