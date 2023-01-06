import React from "react";
import moment from "moment";
import CurrencyFormat from "../../utils/currency-format";
import "./FishItem.scss";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import Button from "../UI/Button";
import FishModel from "../../models/fish";

const FishItem: React.FC<{
  id: string;
  item: FishModel;
  onShowConfirm: (id: string) => void;
  onShowForm: (selectedData: FishModel) => void;
}> = (props) => {
  return (
    <li className="fish">
      <div>
        <h3>{props.item.komoditas}</h3>
        <div className="size">Size : {props.item.size}</div>
        <div className="description">
          {props.item.area_kota}, {props.item.area_provinsi}
        </div>
        <div className="price">
          {CurrencyFormat(parseFloat(props.item.price))}
        </div>
      </div>
      <div>
        <div className="right-column">
          <div className="date">
            {moment(props.item.tgl_parsed).format("ddd, D MMMM YYYY")}
          </div>
          <div className="btn-container">
            <Button onClick={props.onShowForm.bind(null, props.item)}>
              {<EditFilled />}
            </Button>
            <Button onClick={props.onShowConfirm.bind(null, props.id)}>
              {<DeleteFilled />}
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FishItem;
