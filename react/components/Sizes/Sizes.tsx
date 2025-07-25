import React from "react";
import styles from "./Sizes.module.css";

interface SizesProps {}

const Sizes: React.FC<SizesProps> = () => {
  return <div className={styles.container}>Sizes Component</div>;
};

export default Sizes;