import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  if (props.onValid)
    return (
      <div>
        <div className={classes.backdrop} onClick={props.onBtnClick} />
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>{props.message}</div>
          <footer className={classes.actions}>
            <Button onClick={props.onBtnClick}>Okay</Button>
          </footer>
        </Card>
      </div>
    );
};

export default ErrorModal;
