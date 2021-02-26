import { NavLink } from "react-router-dom";

import style from "./style.module.css";

const Header = () => {
  return (
    <div id="header">
      <NavLink to="/">
        <img id="logo" src="/assets/vectors/nike.svg" alt="logo" />
      </NavLink>

      <h2 id="logo-text">Nike</h2>
      <h2 className="text-thin margin-left-small">Store</h2>

      <div id="nav-links-container">
        <NavLink activeClassName={style.link_active} id="link" to="/shoes">
          Shoes
        </NavLink>
        <NavLink activeClassName={style.link_active} id="link" to="/cart">
          Cart
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
