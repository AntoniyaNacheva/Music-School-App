import styles from "./home.module.css";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Заглавие на началната страница</h1>
        <p className={styles.desc}>
          Някакво описание Някакво описание Някакво описание Някакво описание
          Някакво описание Някакво описание Някакво описание Някакво описание
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Научи повече</button>
          <button className={styles.button}>Контакти</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands2.png"
            alt=""
            fill
            className={styles.brandImg}
          ></Image>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/home.gif" alt="" fill className={styles.homeImg}></Image>
      </div>
    </div>
  );
};

export default HomePage;
