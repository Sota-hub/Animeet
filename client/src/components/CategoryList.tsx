import { FC, Dispatch, SetStateAction, MouseEvent } from "react";

const categories = [
  "Adventure",
  "Action",
  "Comedy",
  "Slice of Life",
  "Drama",
  "Fantasy",
  "Supernatural",
  "Magic",
  "Mystery",
  "Horror",
  "Psychological",
  "Sci-Fi",
  "Romance",
];

interface CategoryListProps {
  setCategory: Dispatch<SetStateAction<string>>;
}

const CategoryList: FC<CategoryListProps> = ({ setCategory }) => {
  const selectCategory = (e: MouseEvent) => {
    setCategory((e.target as HTMLLIElement).innerText);
  };

  return (
    <ul>
      {categories.map((category) => (
        <li key={category} onClick={selectCategory}>
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
