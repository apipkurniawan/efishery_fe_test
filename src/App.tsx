// import React, { useCallback, useEffect, useState } from "react";
// import SteinStore from "stein-js-client";

// import FishModel from "./models/fish";
import "./App.scss";
// import { BASE_API_URL } from "./config/base-url";
// import Card from "./components/UI/Card";
import Fishes from "./components/fish/Fish";
import FishContextProvider from "./store/fish-context";

function App() {
  // const [listFishDefault, setListFishDefault] = useState<FishModel[]>([]);
  // const [listFish, setListFish] = useState<FishModel[]>([]);
  // const [enteredSearch, setEnteredSearch] = useState<string>("");
  // const [selected, setSelected] = useState("");
  // const [selectedRadioBtn, setSelectedRadioBtn] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  // // var numArray = [
  // //   { item: "500", prov: "jabar" },
  // //   { item: "1500", prov: "jakarta" },
  // //   { item: "700", prov: "bandung" },
  // // ];
  // // numArray.sort(function (a: any, b: any) {
  // //   // return parseFloat(a.item) - parseFloat(b.item); // asc
  // //   // return parseFloat(b.item) - parseFloat(a.item); // desc
  // //   // if (a.prov < b.prov) return -1; // ascending
  // //   // if (a.prov > b.prov) return 1;
  // //   // return 0;
  // //   if (b.prov < a.prov) return -1; // descending
  // //   if (b.prov > a.prov) return 1;
  // //   return 0;
  // // });

  // // console.log(numArray);

  // const fetchListFishHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError("");
  //   const store = new SteinStore(BASE_API_URL);

  //   store.read("list").then(
  //     (data: FishModel[]) => {
  //       if (!data) {
  //         setError("Found no Fish!");
  //       } else {
  //         setListFish(data);
  //         setListFishDefault(data);
  //       }
  //       setIsLoading(false);
  //     },
  //     (error: any) => {}
  //   );
  // }, []);

  // useEffect(() => {
  //   console.log("get data from service");
  //   fetchListFishHandler();
  // }, [fetchListFishHandler]);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("Filter data");
  //     console.log("enter", enteredSearch);
  //     if (enteredSearch) {
  //       console.log("list", listFish);
  //       if (listFish && listFish.length > 0) {
  //         const filtered = listFish.filter(
  //           (item: FishModel) =>
  //             (item.area_kota &&
  //               item.area_kota.toLowerCase() === enteredSearch.toLowerCase()) ||
  //             (item.area_provinsi &&
  //               item.area_provinsi.toLowerCase() ===
  //                 enteredSearch.toLowerCase()) ||
  //             (item.komoditas &&
  //               item.komoditas.toLowerCase() === enteredSearch.toLowerCase()) ||
  //             (item.size &&
  //               item.size.toLowerCase() === enteredSearch.toLowerCase()) ||
  //             (item.price &&
  //               item.price.toLowerCase() === enteredSearch.toLowerCase())
  //         );
  //         console.log("filter", filtered);
  //         setListFish(filtered);
  //       }
  //     } else {
  //       setListFish(listFishDefault);
  //     }

  //     // if (selected && selectedRadioBtn) {
  //     //   if (listFish && listFish.length > 0) {
  //     //     const filtered = listFish.filter(
  //     //       (item: FishModel) =>
  //     //         (item.area_kota &&
  //     //           item.area_kota.toLowerCase() === enteredSearch.toLowerCase()) ||
  //     //         (item.area_provinsi &&
  //     //           item.area_provinsi.toLowerCase() ===
  //     //             enteredSearch.toLowerCase()) ||
  //     //         (item.komoditas &&
  //     //           item.komoditas.toLowerCase() === enteredSearch.toLowerCase()) ||
  //     //         (item.size &&
  //     //           item.size.toLowerCase() === enteredSearch.toLowerCase()) ||
  //     //         (item.price &&
  //     //           item.price.toLowerCase() === enteredSearch.toLowerCase())
  //     //     );
  //     //     console.log("filter", filtered);
  //     //     setListFish(filtered);
  //     //   }
  //     // }
  //   }, 500);

  //   return () => {
  //     console.log("CLEANUP");
  //     clearTimeout(identifier);
  //   };
  // }, [enteredSearch, selected, selectedRadioBtn]);

  // const searchChangeHandler = (event: any) => {
  //   setEnteredSearch(event.target.value);
  // };

  // const dropdownChangeHandler = (event: any) => {
  //   setSelected(event.target.value);
  // };

  // const rdBtnChangeHandler = (event: any) => {
  //   setSelectedRadioBtn(event.target.value);
  // };

  return (
    // <>
    //   <div>
    //     <select
    //       value={selected}
    //       onChange={dropdownChangeHandler}
    //       name="cars"
    //       id="cars"
    //     >
    //       <option value="price">price</option>
    //       <option value="komoditas">komoditas</option>
    //       <option value="area_kota">kota</option>
    //       <option value="area_provinsi">provinsi</option>
    //       <option value="size">size</option>
    //     </select>
    //     <input
    //       type="radio"
    //       id="asc"
    //       name="rdBtn"
    //       value="asc"
    //       onChange={rdBtnChangeHandler}
    //     />
    //     <label htmlFor="asc">Asc</label>
    //     <input
    //       type="radio"
    //       id="desc"
    //       name="rdBtn"
    //       value="desc"
    //       onChange={rdBtnChangeHandler}
    //     />
    //     <label htmlFor="desc">Desc</label>
    //     <input
    //       type="text"
    //       id="search"
    //       placeholder="cari data ..."
    //       value={enteredSearch}
    //       onChange={searchChangeHandler}
    //     />
    //   </div>
    //   <div className="App">List Harga Ikan</div>
    //   {!isLoading &&
    //     listFish &&
    //     listFish.length > 0 &&
    //     listFish.map((item: FishModel) => (
    //       <ul>
    //         <li>{item.price}</li>
    //         <li>{item.komoditas}</li>
    //         <li>{item.area_kota}</li>
    //         <li>{item.area_provinsi}</li>
    //         <li>{item.size}</li>
    //         <li>{item.tgl_parsed}</li>
    //         <li>{item.timestamp}</li>
    //       </ul>
    //     ))}
    //   {isLoading && <p>Loading ...</p>}
    //   {!isLoading && error && <p>{error}</p>}
    // </>
    <FishContextProvider>
      <Fishes />
    </FishContextProvider>
  );
}

export default App;
