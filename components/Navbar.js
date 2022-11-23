/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);
  const router = useRouter();

  return (
    <div className="nav_main_container">
      <nav>
        <div className="logo">
          <Link href="/">
            <img src="/logo-light.png" alt="logo image" />
          </Link>
        </div>
        <ul className={`menu_items ${showmenu ? "active_menu" : ""}`}>
          <li>
            <Link
              className={`${router.pathname === "/" ? "active" : ""} `}
              href={"/"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${router.pathname === "/services" ? "active" : ""} `}
              href={"/services"}
            >
              Services
            </Link>
          </li>
          <li>
            <a href="https://blogsspace.vercel.app/">Posts</a>
          </li>
          <li>
            <Link
              className={`${router.pathname === "/contact" ? "active" : ""} `}
              href="contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div>
          <input type="checkbox" className="nav_checkbox" id="nav_checkbox" />
          <label htmlFor="nav_checkbox" className="nav_label">
            <i className="sun_icon">
              <svg
                width="16"
                height="16"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="currentColor"
                    d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm6.364-2.05l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094l-.707.707a1 1 0 0 1-1.497-1.32l.083-.094l.707-.707ZM12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12Zm0 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-8 3a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11h1Zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083l.707.707a1 1 0 0 1-1.32 1.497l-.094-.083l-.707-.707a1 1 0 0 1 0-1.414Zm14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z"
                  />
                </g>
              </svg>
            </i>
            <i className="moon_icon">
              <svg
                width="16"
                height="16"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g transform="translate(24 0) scale(-1 1)">
                  <g fill="none" fillRule="evenodd">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path
                      fill="currentColor"
                      d="M12.477 4.546a1.01 1.01 0 0 1 1.097-1.409A9 9 0 0 1 12 21c-4.434 0-8.118-3.206-8.863-7.426a1.01 1.01 0 0 1 1.409-1.097a6 6 0 0 0 7.931-7.931Zm2.404 1.072a8 8 0 0 1-9.263 9.263A7.002 7.002 0 0 0 19 12.001a7.002 7.002 0 0 0-4.12-6.383ZM5.565 7.716l.064.14a3.26 3.26 0 0 0 1.237 1.363l.1.059a.068.068 0 0 1 0 .118l-.1.058a3.26 3.26 0 0 0-1.237 1.364l-.064.14a.071.071 0 0 1-.13 0l-.064-.14a3.26 3.26 0 0 0-1.237-1.364l-.1-.058a.068.068 0 0 1 0-.118l.1-.059A3.26 3.26 0 0 0 5.37 7.855l.064-.14a.071.071 0 0 1 .13 0Zm2.832-4.859c.04-.09.166-.09.206 0l.102.222a5.189 5.189 0 0 0 1.97 2.172l.157.092a.108.108 0 0 1 0 .189l-.158.092a5.189 5.189 0 0 0-2.07 2.394a.113.113 0 0 1-.207 0l-.102-.222a5.189 5.189 0 0 0-1.97-2.172l-.158-.092a.108.108 0 0 1 0-.189l.158-.092a5.189 5.189 0 0 0 1.97-2.172l.102-.222Z"
                    />
                  </g>
                </g>
              </svg>
            </i>
            <div className="ball"></div>
          </label>
        </div>
        <div className="hidden_in_desktop">
          <i className="menu_bars" onClick={() => setShowmenu(!showmenu)}>
            <svg
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g transform="translate(24 0) scale(-1 1)">
                <path
                  fill="currentColor"
                  d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H5Z"
                />
              </g>
            </svg>
          </i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
