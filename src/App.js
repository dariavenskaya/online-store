import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Card from "./components/Card";

const data = [
  {
    title: 'Cheesburger',
    price: '740'
  },
  {
    title: 'Mexican',
    price: '530'
  },
  {
    title: 'Margarita',
    price: '390'
  },
  {
    title: 'Pepperoni',
    price: '750'
  },
  {
    title: 'Diablo',
    price: '700'
  },
  {
    title: 'Veggi',
    price: '400'
  }

]

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">

            {data.map((item) =>  (
                <Card
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
