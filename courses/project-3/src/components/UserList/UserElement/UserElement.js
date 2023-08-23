import React from "react";

import Card from "../../UI/Card"
import styles from "./UserElement.module.css";

const UserElement = (props) => {
  return (
    <Card className={styles.userElement}>
      <h2 className={styles.userElement__text}>{props.people.name} ({props.people.age} years old)</h2>
    </Card>
  );
};

export default UserElement;
