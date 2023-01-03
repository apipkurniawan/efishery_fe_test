import { useContext, useEffect, useState } from "react";
import { FishContext } from "../../store/fish-context";
import Card from "../UI/Card";
import FishItem from "./FishItem";
import "./Fish.scss";
import FishSearch from "./FishSearch";
import ConfirmModal from "../layout/ConfirmModal";

const Fishes = () => {
  const [confirmIsShown, setConfirmIsShown] = useState(false);

  const showConfirmHandler = () => {
    setConfirmIsShown(true);
  };

  const hideConfirmHandler = () => {
    setConfirmIsShown(false);
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
    />
  ));

  return (
    <section className="fishes">
      {confirmIsShown && <ConfirmModal onClose={hideConfirmHandler} />}
      <FishSearch />
      <br />
      <Card>
        <ul>{fishesList}</ul>
      </Card>
    </section>
  );
};

export default Fishes;
