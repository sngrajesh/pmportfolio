import React from "react";
import { downloadico } from "./icons";

const Others = () => {
  return (
    <div className="others_main_container">
      <h2>Save a copy of my CV</h2>
      <p>
        Press the button below to download my CV in .pdf format.
        <br />
        I’m really cool guy.
      </p>

      <button className="button">
        <a
          className="linkref"
          href="https://drive.google.com/uc?export=download&id=1FPBGzLk5my55AeyWY2TJQ0diQD77Ek3J"
          download="resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
          {React.createElement(downloadico)}
        </a>
      </button>
      <h2>Other skills</h2>
      <p>
        While working on my Career , I was able to find other interesting &
        exciting areas where I love to dive deep. I did my best to develop those
        skills while working with other talented people, designers, engineers,
        project managers, clients, and artists.
      </p>

      <style jsx>{`
        .others_main_container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0 3rem;
        }

        .others_main_container h2 {
          margin: 0;
          padding: 0;
          font-size: 1.8rem;
          font-weight: 500;
          padding-top: 3rem;
        }

        .others_main_container p {
          font-size: 1.2rem;
          font-weight: 100;
          letter-spacing: 0.5px;
        }

        @media (max-width: 920px) {
          .others_main_container {
            padding: 0 2rem;
          }

          .others_main_container h2 {
            font-size: 1.3rem;
            padding-top: 2rem;
          }
          .others_main_container p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Others;
