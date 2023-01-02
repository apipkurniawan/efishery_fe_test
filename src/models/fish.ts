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
    komoditas: string,
    prov: string,
    city: string,
    size: string,
    price: string,
    date: string,
    timestamp: string
  ) {
    this.uuid = `${new Date().toISOString()}${Math.random()}`;
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
