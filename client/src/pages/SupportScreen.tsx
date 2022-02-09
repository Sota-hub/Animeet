import { FC } from "react";

import SupportList from "../components/SupportList";

import { SupportDummy } from "../dummyData";

const SupportScreen: FC = () => {
  return (
    <SupportList
      projectName={SupportDummy.project_name}
      supports={SupportDummy.supports}
    />
  );
};

export default SupportScreen;
