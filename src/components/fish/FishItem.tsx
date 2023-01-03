import React, { useContext } from "react";

import FishItemForm from "./FishItemForm";
// import CartContext from '../../../store/cart-context';
import "./FishItem.scss";

const FishItem: React.FC<{
  name: string;
  description: string;
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
        <div className="description">{props.description}</div>
        <div className="price">{props.price}</div>
      </div>
      <div>
        <FishItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default FishItem;
