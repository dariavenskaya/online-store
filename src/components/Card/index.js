import { useState } from "react";

function Card (props) {

  const colorNames = ['black', 'white']
  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

    function Counter() {
        const [count, setCount] = useState(0);
      
        return (
            <div className="button button--outline button--add" onClick={() => setCount(count + 1)}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add to cart</span>
            <i>{count}</i>
          </div>
        );
      }

    return (
        <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={props.imgURL}
          alt="product"/>
        <h4 className="pizza-block__title">{props.title}</h4>
        <div className="pizza-block__selector">
          <ul>
          {
            props.colors.map((color) => 
              <li 
                key={color} 
                onClick={() => setActiveColor(color)} 
                className={activeColor === color ? 'active' : ''}>
                {colorNames[color]}
              </li>
          )}
          </ul>
          <ul>
            {
              props.sizes.map((size, i) => 
                <li key={i} onClick={() => setActiveSize(i)} className={activeSize === i ? 'active' : ''}>{size}</li>
              )}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {props.price} $</div>
          <Counter />
        </div>
      </div>
    );
}
export default Card;