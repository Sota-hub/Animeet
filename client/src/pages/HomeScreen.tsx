import { FC, useState } from "react";

import CategoryList from "../components/CategoryList";
import HomeList from "../components/HomeList";

const HomeScreen: FC = () => {
  const [category, setCategory] = useState<string>("Adventure");

  return (
    <>
      <CategoryList category={category} setCategory={setCategory} />
      <HomeList category={category} />
    </>
  );
};

export default HomeScreen;
