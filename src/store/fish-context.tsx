import React, { useState } from "react";
import SteinStore from "stein-js-client";
import { BASE_API_URL } from "../config/base-url";
import FishModel from "../models/fish";
import { FilterFish } from "../utils/filter-list";

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

type Props = {
  children: React.ReactNode;
};

const store = new SteinStore(BASE_API_URL);

const FishContextProvider = (props: Props) => {
  const [fishes, setFishes] = useState<FishModel[]>([]);

  const getFishHandler = () => {
    store.read("list").then(
      (data: FishModel[]) => {
        console.log("get", data);
        setFishes(FilterFish(data));
      },
      (error: any) => {}
    );
  };

  const addFishHandler = (txt: string) => {};

  const removeFishHandler = (uuid: string) => {
    store
      .delete("list", {
        search: { uuid },
      })
      .then((res: any) => {
        console.log("delete", res);
        getFishHandler();
      });
  };

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
