import React, { useContext } from "react";
import moment from "moment";
import CurrencyFormat from "../../utils/currency-format";
import "./FishItem.scss";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import Button from "../UI/Button";
// import { FishContext } from "../../store/fish-context";

const FishItem: React.FC<{
  name: string;
  prov: string;
  city: string;
  time: string;
  date: string;
  id: string;
  price: string;
  onShowConfirm: () => void;
  onShowForm: () => void;
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
            <Button onClick={props.onShowForm}>{<EditFilled />}</Button>
            {/* <button onClick={fishCtx.removeFish.bind(null, props.id)}>
              Delete
            </button> */}
            <Button onClick={props.onShowConfirm}>{<DeleteFilled />}</Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FishItem;
