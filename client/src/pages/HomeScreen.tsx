import { FC, useState } from "react";

import HomeCategory from "../components/HomeCategory";
import HomeList from "../components/HomeList";

const HomeScreen: FC = () => {
  const [category, setCategory] = useState<string>("Adventure");

  return (
    <>
      <HomeCategory category={category} setCategory={setCategory} />
      <HomeList category={category} />
    </>
  );
};

export default HomeScreen;
