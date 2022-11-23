import React from "react";
import styles from "./../styles/About.module.css";

const info = [
  {
    title: "Personal",
    value:
      "I grew up in Nottingham and moved to London many years ago. Being half Italian and half British, I try to visit family in Sicily whenever I can to practice (struggling) with the basics of the language.",
  },
  {
    title: "Education",
    value:
      "I studied at the University of Nottingham and graduated with a degree in Computer Science. I also have a Masters in Computer Science from the University of London.",
  },
  {
    title: "Technical",
    value:
      "I am a product management and strategy consultant, focusing currently on helping leaders improve the effectiveness of their organizations through improving practices of strategy deployment and business agility. I’m responsible for planning, procurement, and execution of different kinds of projects.I discovered my passion for helping and Product Managers to become successful and create thriving careers.",
  },
  {
    title: "Work",
    value:
      "I have worked in the IT industry for over 10 years. I have worked in a variety of roles from software development to project management. I have also worked in the education sector as a lecturer and a tutor.",
  },
];

const About = () => {
  return (
    <div className={styles.about_main_container}>

      <h1
      id="about"
      >About</h1>
      {info.map((item, index) => {
        return <DetailItem key={index} title={item.title} value={item.value} />;
      })}
    </div>
  );
};

const DetailItem = (props) => {
  return (
    <div className={styles.detail_item_container}>
      <div className={styles.detail_item_title}>
        <h2>{props.title}</h2>
      </div>

      <div className={styles.detail_item_value}>
        <p>{props.value}</p>
      </div>
    </div>
  );
};

export default About;
