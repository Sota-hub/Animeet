import { FC, Dispatch, SetStateAction, MouseEvent } from "react";

import { activateStyle } from "../helperFunctions";
import { navigations } from "../stringArrays";
import "../css/components/projectNavigation.css";

interface ProjectNavigationProps {
  navigation: string;
  setNavigation: Dispatch<SetStateAction<string>>;
}

const ProjectNavigation: FC<ProjectNavigationProps> = ({
  navigation,
  setNavigation,
}) => {
  const selectNavigation = (e: MouseEvent) => {
    setNavigation((e.target as HTMLLIElement).innerText);
  };

  return (
    <ul className="navigation__list">
      {navigations.map((nav) => (
        <li
          key={nav}
          className={activateStyle(
            navigation,
            nav,
            "navigation__item--active",
            "navigation__item"
          )}
          onClick={selectNavigation}
        >
          {nav}
        </li>
      ))}
    </ul>
  );
};

export default ProjectNavigation;
