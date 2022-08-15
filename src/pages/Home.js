import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";

function Home({ searchValue, setSearchValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [category, setCategory] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "popular first",
    sort: "rating&order=desc",
  });

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62f7c196ab9f1f8e8902d90e.mockapi.io/items?${
        category > 0 ? `category=${category}` : ""
      }&sortBy=${sortType.sort}`
    )
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [category, sortType]);

  const skeletons = [...new Array(5)].map((_, i) => <Skeleton key={i} />);
  const products = items
    .filter((obj) => {
      if (
        obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    })
    .map((obj) => <Card key={obj.id} {...obj} />);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={category}
            onClickCategory={(i) => setCategory(i)}
          />
          <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
        </div>
        <div className="content__items">{isLoading ? skeletons : products}</div>
      </div>
    </>
  );
}

export default Home;
