import SteinStore from "stein-js-client";
import { BASE_API_URL } from "../config/base-url";
import { Operation } from "../constants/operations.enum";
import FishModel from "../models/fish";

const store = new SteinStore(BASE_API_URL);

export const getFishService = () => {
  return store.read(Operation.LIST);
};

export const getAreaService = () => {
  return store.read(Operation.AREA);
};

export const getSizeService = () => {
  return store.read(Operation.SIZE);
};

export const saveFishService = (data: FishModel) => {
  return store.append(Operation.LIST, [{ ...data }]);
};

export const editFishService = (data: FishModel) => {
  return store.edit(Operation.LIST, {
    search: { uuid: data.uuid },
    set: data,
  });
};

export const deleteFishService = (id: string) => {
  return store.delete(Operation.LIST, {
    search: { uuid: id },
  });
};
