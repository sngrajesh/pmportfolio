/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./../../styles/Services.module.css";
import { horse, task, handshake, setting } from "./../../components/icons";
import Head from "next/head";


const info = [
  {
    title: "Advisory",
    icon: handshake,
    value:
      "Website development. More than a Two years of experience building web interfaces means that I'm happy to deliver  anything from single-page apps to scaleable design systems. I can help you identify the most appropriate technology for your project and, whilst I love a good framework, you can be sure  that I will never use tech for tech's sake.",
  },
  {
    title: "Development",
    icon: setting,
    value:
      "I design your website to be as easy to use as possible while guiding users towards the end goal. Putting the user’s experience first, whether they’re looking to subscribe, trying to contact you, or just gathering information, will ensure more loyal users increasing long term sales.",
  },
  {
    title: "Planning",
    icon: task,
    value:
      "Your website is always growing. Whether you’re adding new features or making improvements I’m here to help. I won’t leave you guessing how your own website works and will always be available to answer any questions you might have.",
  },
  {
    title: "Strategy",
    icon: horse,
    value:
      "Your website is always growing. Whether you’re adding new features or making improvements I’m here to help. I won’t leave you guessing how your own website works and will always be available to answer any questions you might have.",
  },
];

const Services = () => {
  return (
    <>
      <div className={styles.services_main_container}>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services page Rajesh Singh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>I provide a wide range of creative services</h1>

        {info.map((item, index) => {
          return (
            <DetailItem
              key={index}
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          );
        })}
      </div>
    </>
  );
};

const DetailItem = ({ title, value, icon }) => {
  return (
    <div className={styles.detail_item_container}>
      <div className={styles.detail_item_title}>
        {React.createElement(icon)}
        <h2>{title}</h2>
      </div>
      <div className={styles.detail_item_value}>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Services;
