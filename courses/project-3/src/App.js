import React, { useState } from "react";

import UserList from "./components/UserList/UserList";
import UserForm from "./components/UserForm/UserForm";
import styles from "./App.module.css";

const initialPeople = [
  { name: "Valerie", age: 21 },
  { name: "Tiff", age: 18 },
];

function App() {
  const [people, setPeople] = useState(initialPeople);

  const addPersonHandler = (person) => {
    setPeople((prevPeople) => {
      return [person, ...prevPeople];
    });
  };

  return (
    <div className={styles.app}>
      <UserForm onAddPerson={addPersonHandler} />
      <UserList people={people} />
    </div>
  );
}

export default App;
