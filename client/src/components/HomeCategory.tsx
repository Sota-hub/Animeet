import { FC, Dispatch, SetStateAction, MouseEvent } from "react";

import { activateStyle } from "../helperFunctions";
import { categories } from "../stringArrays";
import "../css/components/homeCategory.css";

interface HomeCategoryProps {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

const HomeCategory: FC<HomeCategoryProps> = ({ category, setCategory }) => {
  const selectCategory = (e: MouseEvent) => {
    setCategory((e.target as HTMLLIElement).innerText);
  };

  return (
    <ul className="home__category--list">
      {categories.map((cat) => (
        <li
          key={cat}
          onClick={selectCategory}
          className={activateStyle(
            category,
            cat,
            "home__category--activeItem",
            "home__category--item"
          )}
        >
          {cat}
        </li>
      ))}
    </ul>
  );
};

export default HomeCategory;
