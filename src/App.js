import "../src/styles/App.scss";
import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Card from "./components/Card";
import Skeleton from "./components/Card/Skeleton";

// import data from './data.json'

function App() {

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect( () =>{
    fetch('https://62f7c196ab9f1f8e8902d90e.mockapi.io/items')
    .then(response => response.json())
    .then(json => {
      setItems(json)
      setIsLoading(false)
    })
  }, [] )

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <div className="content__items">
            {isLoading
            ? [...new Array(5)].map((_, i) => <Skeleton key={i} />) 
            : items.map((item) => <Card key={item.id} {...item} />)
            }
          </div>
              
        </div>
      </div>
    </div>
  );
}

export default App;
