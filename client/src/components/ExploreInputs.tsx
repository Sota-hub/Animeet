import { FC, MouseEvent, useRef, useState } from "react";

import { categories } from "../stringArrays";
import "../css/components/exploreInputs.css";

const ExploreInputs: FC = () => {
  const projectRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const [loading, setLoading] = useState(false);

  const exploreProjects = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(projectRef.current?.value);
    console.log(categoryRef.current?.value);

    // fetch by category
    setLoading(!loading);
  };

  return (
    <div className="explore__wrap--input">
      <input
        type="text"
        placeholder="Project name"
        className="explore__input"
        ref={projectRef}
      />
      <select className="explore__select--category" ref={categoryRef}>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <div className="explore__button" onClick={exploreProjects}>
        {loading && <p>Loading...</p>}
        {!loading && (
          <>
            <img src="/search.svg" alt="search" />
            <p className="explore__text--button">Explore</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ExploreInputs;
