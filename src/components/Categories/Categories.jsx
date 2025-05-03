import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  console.log(categoriesPromise);
  const categories = use(categoriesPromise);
  console.log(categories);
  return (
    <div>
      <h2 className="font-bold">
        All Categories -- {categories.name} {categories.length}
      </h2>
      <div>
        {categories.map((categori) => (
          <NavLink
            key={categori.id}
            to={`/category/${categori.id}`} // Adjust this based on your routing
            className="block py-2"
          >
            {categori.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
