import { FC, useState } from "react";

import ProjectMain from "../components/ProjectMain";
import ProjectNavigation from "../components/ProjectNavigation";
import ProjectPlan from "../components/ProjectPlan";
import ProjectComment from "../components/ProjectComment";
import ProjectAnnounce from "../components/ProjectAnnounce";

import { ProjectDummy } from "../dummyData";

const ProjectScreen: FC = () => {
  const [navigation, setNavigation] = useState("Plan");

  return (
    <>
      <ProjectMain
        projectImagePath={ProjectDummy.project_image_path}
        projectName={ProjectDummy.project_name}
        projectDescription={ProjectDummy.project_description}
        supportCurrent={ProjectDummy.support_current}
        supportTarget={ProjectDummy.support_target}
        remindedUserIds={ProjectDummy.reminded_users_id}
        expireDate={ProjectDummy.expire_date}
        creators={ProjectDummy.creators}
      />
      <ProjectNavigation
        navigation={navigation}
        setNavigation={setNavigation}
      />
      {navigation === "Plan" && (
        <ProjectPlan
          story={ProjectDummy.story}
          characterDesignPaths={ProjectDummy.character_design_paths}
          originalPicturePaths={ProjectDummy.original_picture_paths}
          voicePath={ProjectDummy.voice_path}
          sound_effect_path={ProjectDummy.sound_effect_path}
        />
      )}
      {navigation === "Comment" && (
        <ProjectComment comments={ProjectDummy.comments} />
      )}
      {navigation === "Announce" && (
        <ProjectAnnounce announces={ProjectDummy.announces} />
      )}
    </>
  );
};

export default ProjectScreen;
