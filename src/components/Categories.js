import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    'All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'
  ]

  const onClickCategory = (index) => {
    setActiveIndex(index);
  }

  return (
    <>
      <div className="categories">
        <ul>

          { categories.map(value => 
          <li onClick={()=>onClickCategory(categories.indexOf(value))} 
          className={activeIndex === categories.indexOf(value) ? 'active' : ''}>{value}</li>)}
        </ul>
      </div>
    </>
  );
}
export default Categories;
