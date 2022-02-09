import { FC } from "react";
import { Link } from "react-router-dom";

import "../css/components/header.css";

const Header: FC = () => {
  return (
    <div className="header__container">
      <div className="header__element--tablet" />
      <Link to="/">
        <img src="/logo.png" alt="logo" className="header__logo" />
      </Link>
      <div className="header__wrap--right">
        <Link to="/explore" className="header__link--explore">
          Explore
        </Link>
        <Link to="/user">
          <img src="/user.svg" alt="user" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
