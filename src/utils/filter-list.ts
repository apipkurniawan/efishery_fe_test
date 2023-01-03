import FishModel from "../models/fish";

export const FilterList = (list: FishModel[]) =>
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
