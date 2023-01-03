import React, { useContext } from "react";

// import CartContext from '../../../store/cart-context';
import "./FishItem.scss";

const FishItem: React.FC<{
  name: string;
  prov: string;
  city: string;
  time: string;
  date: string;
  id: string;
  price: string;
  //   addToCartHandler: () => void;
}> = (props) => {
  //   const cartCtx = useContext(CartContext);

  //   const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    //   cartCtx.addItem({
    //     id: props.id,
    //     name: props.name,
    //     amount: amount,
    //     price: props.price
    //   });
  };

  return (
    <li className="fish">
      <div>
        <h3>{props.name}</h3>
        <div className="description">
          {props.city}, {props.prov}
        </div>
        <div className="price">{props.price}</div>
      </div>
      <div>
        <div className="right-column">
          <label>{props.date}</label>
          <br />
          <div className="btn-container">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FishItem;
