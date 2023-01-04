import { Area } from "../models/area";
import FishModel from "../models/fish";
import { Size } from "../models/size";

export const FilterFish = (list: FishModel[]) =>
  list.filter(
    (fish: FishModel) =>
      fish.uuid &&
      fish.area_kota &&
      fish.komoditas &&
      fish.area_kota &&
      fish.area_provinsi &&
      fish.size &&
      fish.tgl_parsed &&
      fish.timestamp &&
      fish.price
  );

export const FilterArea = (list: Area[]) =>
  list.filter((area: Area) => area.city && area.province);

export const FilterSize = (list: Size[]) =>
  list.filter((size: Size) => size.size);
