import Link from "next/link";

const Links = () => {
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

  return (
    <div>
      {links.map((link) => (
        <Link href={link.path}>{link.title}</Link>
      ))}
    </div>
  );
};

export default Links;
