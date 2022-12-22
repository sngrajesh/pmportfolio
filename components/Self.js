/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
import React from "react";
import style from "./../styles/Self.module.css";
import Socialmedialinks from "./Socialmedialinks";
import { left } from "./icons";

const Self = () => {
  return (
    <div className={style.self_main}>
      <div className={style.self_content}>
        <div className={style.self_main_heading}>
          <h1>
            Hello, I&#39;m <br /> Rajesh Singh.
          </h1>
        </div>
        <div className={style.self_subheading}>
          <h2> Project Manager </h2>
        </div>
        <div className={style.self_intropara}>
          <p>
            I am a product management and strategy consultant, focusing currently
            on helping leaders improve the effectiveness of their organizations
            through improving practices of strategy deployment and business
            agility.

          </p>
        </div>
        <div className={style.self_other_info}>
          <button type="button" className="button">
            <a href="#about" className="linkref">
              More about me
              {React.createElement(left)}
            </a>
          </button>
        </div>
        <div className={style.social_links}>
          <Socialmedialinks />
        </div>
      </div>
      <div className={style.self_image}>
        <img src="rajesh-main.png" alt="self" />
      </div>
    </div>
  );
};

export default Self;
