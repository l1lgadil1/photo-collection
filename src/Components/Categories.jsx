import React from "react";

const Categories = ({ categoriesActive, setCategoriesActive }) => {
  const categories = [
    { name: "Все" },
    { name: "Море" },
    { name: "Горы" },
    { name: "Архитектура" },
    { name: "Города" },
  ];

  return (
    <ul className="tags">
      {categories.map((item, i) => (
        <li
          onClick={() => setCategoriesActive(i)}
          className={categoriesActive === i ? "active" : ""}
          key={i}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
