class FishModel {
  uuid: string;
  komoditas: string;
  area_provinsi: string;
  area_kota: string;
  size: string;
  price: string;
  tgl_parsed: string;
  timestamp: string;

  constructor(
    uuid: string,
    komoditas: string,
    prov: string,
    city: string,
    size: string,
    price: string,
    date: string,
    timestamp: string
  ) {
    this.uuid = uuid;
    this.komoditas = komoditas;
    this.area_provinsi = prov;
    this.area_kota = city;
    this.size = size;
    this.price = price;
    this.tgl_parsed = date;
    this.timestamp = timestamp;
  }
}

export default FishModel;
