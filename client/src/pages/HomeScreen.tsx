import { FC, useState } from "react";

import CategoryList from "../components/CategoryList";
import ProjectList from "../components/ProjectList";

const HomeScreen: FC = () => {
  const [category, setCategory] = useState<string>("Adventure");

  return (
    <>
      <CategoryList category={category} setCategory={setCategory} />
      <ProjectList category={category} />
    </>
  );
};

export default HomeScreen;
