import { FC, Dispatch, SetStateAction, MouseEvent } from "react";

import "../css/components/categoryList.css";

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

interface CategoryListProps {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

const CategoryList: FC<CategoryListProps> = ({ category, setCategory }) => {
  const selectCategory = (e: MouseEvent) => {
    setCategory((e.target as HTMLLIElement).innerText);
  };

  const activateStyle = (cat: string) => {
    if (category === cat) return "category__item--active";
    return "category__item";
  };

  return (
    <ul className="category__list">
      {categories.map((cat) => (
        <li key={cat} onClick={selectCategory} className={activateStyle(cat)}>
          {cat}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
