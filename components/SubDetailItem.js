import React from "react";
import styles from "./../styles/About.module.css";

const SubDetailItem = (props) => {
  return (
    <div className={styles.detail_item_container}>
      <div className={styles.sub_detail_item_title}>
        <h2>{props.det.subTitle}</h2>
      </div>

      {props.det.Company && (
        <div className={styles.sub_detail_item_value}>
          <p>{props.det.Company}</p>
        </div>
      )}

      {props.det.year && (
        <div className={styles.sub_detail_item_value}>
          <p>{props.det.Year}</p>
        </div>
      )}
    </div>
  );
};

export default SubDetailItem;
