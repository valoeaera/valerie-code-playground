import React from "react";

import UserElement from "./UserElement/UserElement";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.userList}>
      <ul>
        {props.people.map((people, index) => (
          <UserElement key={index} people={people} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
