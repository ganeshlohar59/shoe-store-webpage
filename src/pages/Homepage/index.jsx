import React from "react";

// Styles
import style from "./style.module.css";

import { useNavigate } from "react-router-dom";

const Homepage = () => {
  var animateButton = function (e) {
    e.preventDefault();
    //reset animation
    e.target.classList.remove("animate");

    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  };

  var bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
  }

  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <img
        src="/assets/images/nikeshoe.png"
        alt=""
        className={style.hero_image}
      />
      <h1 className={style.hero_heading}>
        Buy top selling Nike
        <br />
        Air Jordan for <br />
        upto 15% Off
      </h1>
      <button>Expore Shoes</button>
    </div>
  );
};

export default Homepage;
