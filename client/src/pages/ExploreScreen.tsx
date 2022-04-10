import { FC } from "react";

import ExploreInputs from "../components/ExploreInputs";
import ExploreList from "../components/ExploreList";

const ExploreScreen: FC = () => {
  return (
    <>
      <ExploreInputs />
      <ExploreList />
    </>
  );
};

export default ExploreScreen;
