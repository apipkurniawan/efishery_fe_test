import { useState } from "react";
import Card from "../UI/Card";
import FishItem from "./FishItem";
import ConfirmDialog from "../UI/ConfirmDialog";
import FishForm from "./FishForm";
import FishModel from "../../models/fish";
import "./Fish.scss";

const Fishes: React.FC<{
  items: FishModel[];
  onDelete: (id: string) => void;
}> = (props) => {
  const [confirmIsShown, setConfirmIsShown] = useState(false);
  const [formIsShown, setFormIsShown] = useState(false);
  const [id, setId] = useState("");

  const showConfirmHandler = (id: string) => {
    setId(id);
    setConfirmIsShown(true);
  };

  const deleteFishHandler = () => {
    hideConfirmHandler();
    props.onDelete(id);
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
          onAccept={deleteFishHandler}
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
