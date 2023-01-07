import SteinStore from "stein-js-client";
import { BASE_API_URL } from "../config/base-url";
import FishModel from "../models/fish";

const store = new SteinStore(BASE_API_URL);

export const getFishService = () => {
  return store.read("list");
};

export const getAreaService = () => {
  return store.read("option_area");
};

export const getSizeService = () => {
  return store.read("option_size");
};

export const saveFishService = (data: FishModel) => {
  return store.append("list", [{ ...data }]);
};

export const editFishService = (data: FishModel) => {
  return store.edit("list", {
    search: { uuid: data.uuid },
    set: data,
  });
};

export const deleteFishService = (id: string) => {
  return store.delete("list", {
    search: { uuid: id },
  });
};
