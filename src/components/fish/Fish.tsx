import Card from "../UI/Card";
import FishItem from "./FishItem";
import "./Fish.scss";
import { useContext, useEffect } from "react";
import { FishContext } from "../../store/fish-context";

const Fishes = () => {
  const fishCtx = useContext(FishContext);

  useEffect(() => {
    fishCtx.getFish();
  }, [fishCtx]);

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
    />
  ));

  return (
    <section className="fishes">
      <Card>
        <ul>{fishesList}</ul>
      </Card>
    </section>
  );
};

export default Fishes;
