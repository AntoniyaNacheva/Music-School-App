"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/nav-link";

const links = [
  {
    title: "Начало",
    path: "/",
  },
  {
    title: "За Нас",
    path: "/about",
  },
  {
    title: "Контакти",
    path: "/contact",
  },
  {
    title: "Блог",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title}></NavLink>
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLink item={{ title: "Админ", path: "/admin" }}></NavLink>
            )}
            <button className={styles.logout}>Изход</button>
          </>
        ) : (
          <NavLink item={{ title: "Вход", path: "/login" }}></NavLink>
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Меню
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
