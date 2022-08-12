import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Card from "./components/Card";
import data from './data.json'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">

            {data.map((item) =>  (
                <Card
                key={item.id}
                imgURL={item.imgURL}
                sizes={item.sizes}
                title={item.title}
                price={item.price}
                colors={item.colors}
                />
                ))
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
