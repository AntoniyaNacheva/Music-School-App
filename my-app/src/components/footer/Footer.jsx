import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        All rights reserved © 2024 Music Center Blagoevgrad, Bulgaria
      </div>
      <div>Project of Antoniya Nacheva</div>
    </div>
  );
};

export default Footer;
