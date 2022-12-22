import React from "react";
import styles from "../../styles/Home.module.css";
import Slider from "../Slider/Slider";
import Ansver from "../Ansver/Ansver";

type Props = {};

const Main = (props: Props) => {
  return (
    <main className={styles.main}>
      <Ansver />
      <Slider />
    </main>
  );
};

export default Main;
