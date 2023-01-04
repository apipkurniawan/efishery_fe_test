import React, { useState } from "react";
import { Area } from "../models/area";
import FishModel from "../models/fish";
import { Size } from "../models/size";

type FishObj = {
  sizes: Size[];
  fishes: FishModel[];
  areas: Area[];
  addSizes: (sizes: Size[]) => void;
  addFishes: (fishes: FishModel[]) => void;
  addAreas: (areas: Area[]) => void;
};

export const FishContext = React.createContext<FishObj>({
  sizes: [],
  fishes: [],
  areas: [],
  addSizes: (sizes: Size[]) => {},
  addFishes: (fishes: FishModel[]) => {},
  addAreas: (areas: Area[]) => {},
});

type Props = {
  children: React.ReactNode;
};

const FishContextProvider = (props: Props) => {
  const [sizes, setSizes] = useState<Size[]>([]);
  const [fishes, setFishes] = useState<FishModel[]>([]);
  const [areas, setAreas] = useState<Area[]>([]);

  const addSizes = (sizesParam: Size[]) => {
    setSizes(sizesParam);
  };

  const addAreas = (areasParam: Area[]) => {
    setAreas(areasParam);
  };

  const addFishes = (fishesParam: FishModel[]) => {
    setFishes(fishesParam);
  };

  const contextValue: FishObj = {
    sizes: sizes,
    fishes: fishes,
    areas: areas,
    addSizes: addSizes,
    addFishes: addFishes,
    addAreas: addAreas,
  };

  return (
    <FishContext.Provider value={contextValue}>
      {props.children}
    </FishContext.Provider>
  );
};

export default FishContextProvider;
