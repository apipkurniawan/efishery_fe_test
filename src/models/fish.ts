class FishModel {
  area_kota: string;
  area_provinsi: string;
  komoditas: string;
  price: string;
  size: string;
  tgl_parsed: string;
  timestamp: string;
  uuid: string;

  constructor(
    city: string,
    prov: string,
    komoditas: string,
    price: string,
    size: string,
    date: string,
    timestamp: string,
    uuid: string
  ) {
    this.area_kota = city;
    this.area_provinsi = prov;
    this.komoditas = komoditas;
    this.price = price;
    this.size = size;
    this.tgl_parsed = date;
    this.timestamp = timestamp;
    this.uuid = uuid;
  }
}

export default FishModel;
