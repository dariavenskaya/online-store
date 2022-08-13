import "../src/styles/App.scss";
import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Card from "./components/Card";
// import data from './data.json'

function App() {

  const [items, setItems] = React.useState([]);

  React.useEffect( () =>{
    fetch('https://62f7c196ab9f1f8e8902d90e.mockapi.io/items')
    .then(response => response.json())
    .then(json => setItems(json))
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
          <h2 className="content__title">Shop</h2>
          <div className="content__items">
            {items.map((item) =>  (
                <Card key={item.id} {...item} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
