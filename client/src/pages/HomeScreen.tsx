import { FC, useState } from "react";

import CategoryList from "../components/CategoryList";
import ProductionList from "../components/ProductionList";

const HomeScreen: FC = () => {
  const [category, setCategory] = useState<string>("Adventure");

  return (
    <>
      <CategoryList category={category} setCategory={setCategory} />
      <ProductionList category={category} />
    </>
  );
};

export default HomeScreen;
