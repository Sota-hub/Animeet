import { FC, Dispatch, SetStateAction, MouseEvent } from "react";

import "../css/components/homeCategory.css";

const categories = [
  "Adventure",
  "Action",
  "Comedy",
  "SliceOfLife",
  "Drama",
  "Fantasy",
  "Supernatural",
  "Magic",
  "Mystery",
  "Horror",
  "Psychological",
  "SciFi",
  "Romance",
];

interface HomeCategoryProps {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

const HomeCategory: FC<HomeCategoryProps> = ({ category, setCategory }) => {
  const selectCategory = (e: MouseEvent) => {
    setCategory((e.target as HTMLLIElement).innerText);
  };

  const activateStyle = (cat: string) => {
    if (category === cat) return "home__category--activeItem";
    return "home__category--item";
  };

  return (
    <ul className="home__category--list">
      {categories.map((cat) => (
        <li key={cat} onClick={selectCategory} className={activateStyle(cat)}>
          {cat}
        </li>
      ))}
    </ul>
  );
};

export default HomeCategory;
