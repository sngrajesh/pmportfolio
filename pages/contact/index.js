/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { sendico, loadingico } from "./../../components/icons";
import styles from "./../../styles/Contact.module.css";
import Socialmedialinks from "./../../components/Socialmedialinks";
import Head from "next/head";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    website: "pm.rajeshsingh.me",
    message: "",
  });

  const ValidateEmail = (email_id) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email_id.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!ValidateEmail(data.email)) {
      alert("Invalid email address!");
      return;
    }
    if (data.name.length < 3 || data.message.length < 3) {
      alert("Name and mesage must be atleast 7 characters long!");
      return;
    }

    setLoading(true);

    const res = await fetch(
      "https://contact-server-service.onrender.com/api/v1/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (res.status === 200) {
      setData({
        name: "",
        email: "",
        message: "",
        website: "pm.rajeshsingh.me",
      });
    } else {
      alert("An error has beed occured");
    }
    setLoading(false);
  };

  return (
    <div className={styles.contact_main_container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Services page Rajesh Singh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.contact_info}>
        <h1 className={styles.title}>Contact me</h1>
        <img src="/rajesh-full.png" alt="Image" />
        <p>
          For any enquiries, or just to say hello, get in touch and contact us.
        </p>
        <div className={styles.social_media_follow}>
          <p>Connect to me on social media </p>
          <Socialmedialinks />
        </div>
      </div>
      <form className={styles.wrapper} autoComplete="off">
        <div>
          <p>
            Email me on :{" "}
            <a href="mailto:rajeshnksingh@gmail.com">rajeshnksingh@gmail.com</a>
          </p>

          <strong>or</strong>
        </div>
        <div className={styles.group}>
          <input
            type="text"
            maxLength="64"
            minLength="3"
            size="10"
            value={data.name}
            className={styles.input}
            name="name"
            required="required"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
          <label htmlFor="style1" className={styles.label}>
            Name
          </label>
        </div>

        <div className={styles.group}>
          <input
            type="text"
            maxLength="64"
            minLength="3"
            size="10"
            value={data.email}
            className={styles.input}
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            name="email"
            required="required"
          />
          <label htmlFor="style1" className={styles.label}>
            E-mail
          </label>
        </div>

        <div className={styles.group}>
          <textarea
            type="text"
            maxLength="512"
            minLength="3"
            className={styles.input}
            name="message"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            value={data.message}
            required="required"
          />
          <label htmlFor="style1" className={styles.label}>
            Message
          </label>
        </div>
        <div>
          <button
            type="button"
            className={"button"}
            onClick={handleContactSubmit}
          >
            {loading ? (
              <>
                Sending
                {React.createElement(loadingico)}
              </>
            ) : (
              <>
                Submit
                {React.createElement(sendico)}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
