import React from "react";
import styles from "./../styles/About.module.css";
import SubDetailItem from "./SubDetailItem";
import { personalIcon, workIcon, educationIcon, technicalIcon } from "./icons";

const info = [
  {
    title: "Personal",
    value:
      "I have experience in different areas of creative and web development that have shaped my skills and have given me a better perspective of the digital medium. I am a self-motivated and hardworking person and a quick learner and I am always willing to learn new things. I am a team player and I am always willing to help others. I am a good planner and I am always willing to plan my work effectively.",
    icon: personalIcon,
  },
  {
    title: "Education",
    value:
      "Throughout my education, I have always been interested in technology and how it can be used to solve problems. I learned Coding and Management skills at university. This has helped me to become a better developer and a better manager.",
    subDetail: [
      {
        subTitle: "Bachelors of Technology",
        Year: "2020 - 2024",
        Company: "Bharati Vidyapeeth University Pune",
      },
    ],
    icon: educationIcon,
  },
  {
    title: "Technical",
    value:
      "I’m responsible for planning, procurement, and execution of different kinds of projects.I discovered my passion for helping and Product Managers to become successful and create thriving careers. I have a strong background in software development and project management.",
    subDetail: [
      {
        subTitle: "Website development",
      },
      {
        subTitle: "SEO management and optimization",
      },
      {
        subTitle: "Solving coding problems in order to match the design and meet client needs.",
      },
      {
        subTitle: "Researching and implementing ecommerce best practices and raising company standards.",
      },
    ],
    icon: technicalIcon,
  },
  {
    title: "Work",
    value:
      "I have worked in a variety of roles from web development to Social media marketing. I am a fresher and I am looking for an opportunity to work in a challenging environment where I can utilize my skills and knowledge to the fullest and also learn new skills and knowledge.",
    subDetail: [
      {
        subTitle: "Digital Marketing Intern",
        Year: "2020 - 2021",
        Company: "Internshala",
      },
      {
        subTitle: "Web Developer Freelancer",
        Year: "2021 - 2023",
        Company: "Freelancer",
      },
    ],
    icon: workIcon,
  },
];

const About = () => {
  return (
    <div className={styles.about_main_container}>
      <h1 id="about">About</h1>
      {info &&
        info.map((item, index) => {
          return <DetailItem key={index} item={item} />;
        })}
    </div>
  );
};

const DetailItem = (props) => {
  return (
    <div className={`${styles.detail_item_container} ${styles.paddingBottom}`}>
      <div className={styles.detail_item_title}>
        <h2>
          <span>{React.createElement(props.item.icon)}</span>
          {props.item.title}
        </h2>
      </div>
      <div className={styles.detail_item_value}>
        <p>{props.item.value}</p>
      </div>
      {props.item.subDetail &&
        props.item.subDetail.map((det, index) => {
          return <SubDetailItem key={index} det={det} />;
        })}
    </div>
  );
};

export default About;
