import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>Fish Farmer</h1>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
