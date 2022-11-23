import React from "react";
import { linkedin, twitter } from "./icons";

const Socialmedialinks = () => {
  return (
    <>
      <a href="https://www.linkedin.com/in/devrajeshsingh/">
        {React.createElement(linkedin)}
      </a>
      <a href="https://twitter.com/DevRajeshSingh">
        {React.createElement(twitter)}
      </a>
    </>
  );
};

export default Socialmedialinks;
