import { useState } from "react";
import Card from "../UI/Card";
import FishItem from "./FishItem";
import ConfirmDialog from "../UI/ConfirmDialog";
import FishForm from "./FishForm";
import "./Fish.scss";
import FishModel from "../../models/fish";

const Fishes: React.FC<{ items: FishModel[] }> = (props) => {
  const [confirmIsShown, setConfirmIsShown] = useState(false);
  const [formIsShown, setFormIsShown] = useState(false);

  const showConfirmHandler = () => {
    setConfirmIsShown(true);
  };

  const hideConfirmHandler = () => {
    setConfirmIsShown(false);
  };

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  const fishesList = props.items.map((item) => (
    <FishItem
      key={item.uuid}
      id={item.uuid}
      name={item.komoditas}
      prov={item.area_provinsi}
      city={item.area_kota}
      time={item.timestamp}
      date={item.tgl_parsed}
      price={item.price}
      onShowConfirm={showConfirmHandler}
      onShowForm={showFormHandler}
    />
  ));

  return (
    <section className="fishes">
      {confirmIsShown && (
        <ConfirmDialog
          message="Yakin ingin hapus data?"
          onClose={hideConfirmHandler}
        />
      )}
      {formIsShown && <FishForm onClose={hideFormHandler} />}
      <Card>
        <ul>{fishesList}</ul>
      </Card>
    </section>
  );
};

export default Fishes;
