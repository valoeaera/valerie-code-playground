import React from "react";

import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Card>
      <header>
        <h2>message</h2>
      </header>
      <div>
        <p>message</p>
      </div>
      <footer>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
