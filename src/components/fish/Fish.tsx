import { useContext, useEffect, useState } from "react";
import { FishContext } from "../../store/fish-context";
import Card from "../UI/Card";
import FishItem from "./FishItem";
import FishSearch from "./FishSearch";
import ConfirmDialog from "../UI/ConfirmDialog";
import FishForm from "./FishForm";
import "./Fish.scss";

const Fishes = () => {
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
  const fishCtx = useContext(FishContext);

  useEffect(() => {
    console.log("useEffect get fish!");
    fishCtx.getFish();
  }, []);

  const fishesList = fishCtx.items.map((item) => (
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
      <FishSearch />
      <br />
      <Card>
        <ul>{fishesList}</ul>
      </Card>
    </section>
  );
};

export default Fishes;
