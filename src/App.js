import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Card from "./components/Card";

const data = [
  {
    id: 1,
    title: 'Cheesburger',
    price: '740'
  },
  {
    id: 2,
    title: 'Mexican',
    price: '530'
  },
  {
    id: 3,
    title: 'Margarita',
    price: '390'
  },
  {
    id: 4,
    title: 'Pepperoni',
    price: '750'
  },
  {
    id: 5,
    title: 'Diablo',
    price: '700'
  },
  {
    id: 6,
    title: 'Veggi',
    price: '400'
  }
]

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
                title={item.title}
                price={item.price}
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
