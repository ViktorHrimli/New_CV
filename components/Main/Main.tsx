import React from "react";
import Slider from "../Slider/Slider";
import styles from "../../styles/Home.module.css";

type Props = {};

const Main = (props: Props) => {
  return (
    <main className={styles.main}>
      <Slider />
    </main>
  );
};

export default Main;
