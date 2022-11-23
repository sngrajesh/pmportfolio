import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a>{new Date().getFullYear()}© Rajesh Singh. All Rights Reserved.</a>
    </footer>
  );
};

export default Footer;
