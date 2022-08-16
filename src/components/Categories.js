import React from "react";

function Categories({ value, onClickCategory }) {
  const categories = ["All", "Skincare", "Gatgets", "Accesories", "Perfume"];

  return (
    <>
      <div className="categories">
        <ul>
          {categories.map((name, i) => (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={value === i ? "active" : ""}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Categories;
