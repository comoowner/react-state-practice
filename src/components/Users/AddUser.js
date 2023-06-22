import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!enteredUsername.length || !enteredAge.length) {
      setShowError((prev) => !prev);
      setMessage("Please write info");
      return;
    }
    if (enteredAge < 0) {
      setShowError((prev) => !prev);
      setMessage("Arent u born yet?");
      return;
    }
    props.addNewUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const onUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const onAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onErrorBtnClick = () => {
    setShowError(null);
  };

  return (
    <>
      <ErrorModal
        title="Error"
        message={message}
        onValid={showError}
        onBtnClick={onErrorBtnClick}
      />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={onUsernameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={onAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
