import React, { useState } from "react";
import FishModel from "../models/fish";

type FishObj = {
  items: FishModel[];
  getFish: () => void;
  addFish: (text: string) => void;
  removeFish: (id: string) => void;
};

export const FishContext = React.createContext<FishObj>({
  items: [],
  getFish: () => {},
  addFish: () => {},
  removeFish: (id: string) => {},
});

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

type Props = {
  children: React.ReactNode;
};

const FishContextProvider = (props: Props) => {
  const [fishes, setFishes] = useState<FishModel[]>([]);

  const getFishHandler = () => {
    setFishes(DUMMY_FISH);
  };

  const addFishHandler = (txt: string) => {};

  const removeFishHandler = (id: string) => {};

  const contextValue: FishObj = {
    items: fishes,
    getFish: getFishHandler,
    addFish: addFishHandler,
    removeFish: removeFishHandler,
  };

  return (
    <FishContext.Provider value={contextValue}>
      {props.children}
    </FishContext.Provider>
  );
};

export default FishContextProvider;
