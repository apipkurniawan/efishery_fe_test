import React, { useContext } from "react";
import moment from "moment";
import CurrencyFormat from "../../utils/currency-format";
import "./FishItem.scss";
import { FishContext } from "../../store/fish-context";

const FishItem: React.FC<{
  name: string;
  prov: string;
  city: string;
  time: string;
  date: string;
  id: string;
  price: string;
  onShowConfirm: () => void;
}> = (props) => {
  // const fishCtx = useContext(FishContext);

  return (
    <li className="fish">
      <div>
        <h3>{props.name}</h3>
        <div className="description">
          {props.city}, {props.prov}
        </div>
        <div className="price">{CurrencyFormat(parseFloat(props.price))}</div>
      </div>
      <div>
        <div className="right-column">
          <label>{moment(props.date).format("ddd, D MMMM YYYY")}</label>
          <br />
          <div className="btn-container">
            <button>Edit</button>
            {/* <button onClick={fishCtx.removeFish.bind(null, props.id)}>
              Delete
            </button> */}
            <button onClick={props.onShowConfirm}>Delete</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FishItem;
