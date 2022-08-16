import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";

import { SearchContext } from "../App";

function Home() {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const onChangeCategory = (i) => {
    dispatch(setCategoryId(i));
  };

  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortType, setSortType] = React.useState({
    name: "popular first",
    sort: "rating&order=desc",
  });
  const categoryID = categoryId > 0 ? `category=${categoryId}` : "";
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
  }, [categoryId, sortType]);

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
          <Categories value={categoryId} onClickCategory={onChangeCategory} />
          <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
        </div>
        <div className="content__items">{isLoading ? skeletons : products}</div>
      </div>
    </>
  );
}

export default Home;
