import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
  });

  const [isValid, setIsValid] = useState({ name: true, age: true });

  const nameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid((prevState) => {
        return {
          ...prevState,
          name: true
        }
      });
    }
    setFormValues((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  };

  const ageChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid((prevState) => {
        return {
          ...prevState,
          age: true
        }
      });
    }
    setFormValues((prevState) => {
      return {
        ...prevState,
        age: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formValues.name.trim().length < 1) {
      setIsValid((prevState) => {
        return {
          ...prevState,
          name: false
        }
      })
      return;
    }
    if (formValues.age.trim().length < 1 || +formValues.age < 1) {
      setIsValid((prevState) => {
        return {
          ...prevState,
          age: false
        }
      })
      return;
    }
    props.onAddPerson(formValues);
    setFormValues({ name: "", age: "" });
  };

  return (
    <Card className={styles.userForm}>
      <form className={styles.uglyForm} onSubmit={submitHandler}>
        <div className={styles.userForm__field}>
          <label htmlFor="username" className={styles.userForm__label}>
            Name
          </label>
          <input
            id="username"
            className={`${styles['userForm__input']} ${!isValid.name && styles.invalid}`}
            type="text"
            value={formValues.name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className={styles.userForm__field}>
          <label htmlFor="age" className={styles.userForm__label}>
            Age (in Years)
          </label>
          <input
            id="age"
            className={`${styles['userForm__input']} ${!isValid.age && styles.invalid}`}
            type="number"
            value={formValues.age}
            onChange={ageChangeHandler}
          />
        </div>
        <div className={styles.userForm__submit}>
          <Button className={styles.userForm__submitButton} type="submit">
            Add User
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
