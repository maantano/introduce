import * as React from "react";
import { render } from "react-dom";
import { Header } from "./Header";
import { CardList } from "./CardList";

import "./styles.css";
const Main = () => {
  return (
    <div className="container">
      <Header />
      <CardList />
    </div>
  );
};

export default Main;
