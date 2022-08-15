import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";

import { SearchContext } from "../App";

function Home() {
  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [category, setCategory] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "popular first",
    sort: "rating&order=desc",
  });
  const categoryID = category > 0 ? `category=${category}` : "";
  // const search = searchValue  ? `&search=${searchValue}` : "";
  // this is for search from server
  // but it doesnt work right with mockApi, so I did js search instead. It works just fine for a small project.

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62f7c196ab9f1f8e8902d90e.mockapi.io/items?${categoryID}&sortBy=${sortType.sort}`
    )
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [category, sortType]);

  const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
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
