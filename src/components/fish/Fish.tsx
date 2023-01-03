import Card from "../UI/Card";
import FishItem from "./FishItem";
import "./Fish.scss";

const DUMMY_FISH = [
  {
    uuid: "7b502685-5b59-471b-8e31-bd218dad434c",
    komoditas: "NILA HITAM",
    area_provinsi: "SUMATERA BARAT",
    area_kota: "PADANG PARIAMAN",
    size: "170",
    price: "9000",
    tgl_parsed: "2022-02-23T01:39:32Z",
    timestamp: "1645580372350",
  },
  {
    uuid: "280f18df-498a-4c94-88f6-0e930764a617",
    komoditas: "BANDENG",
    area_provinsi: "BANTEN",
    area_kota: "PANDEGLANG",
    size: "90",
    price: "9000",
    tgl_parsed: "2022-03-25T11:38:33Z",
    timestamp: "1648208313873",
  },
];

const Fishes = () => {
  const fishesList = DUMMY_FISH.map((item) => (
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
