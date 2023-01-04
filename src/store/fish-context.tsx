import React, { useState } from "react";
import { Size } from "../models/size";

type FishObj = {
  sizes: Size[];
  addSize: (sizes: Size[]) => void;
};

export const FishContext = React.createContext<FishObj>({
  sizes: [],
  addSize: (sizes: Size[]) => {},
});

type Props = {
  children: React.ReactNode;
};

const FishContextProvider = (props: Props) => {
  const [sizes, setSizes] = useState<Size[]>([]);

  const addSizes = (sizes: Size[]) => {
    setSizes(sizes);
  };

  const contextValue: FishObj = {
    sizes: sizes,
    addSize: addSizes,
  };

  return (
    <FishContext.Provider value={contextValue}>
      {props.children}
    </FishContext.Provider>
  );
};

export default FishContextProvider;
