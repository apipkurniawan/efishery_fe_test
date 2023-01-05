import { Fragment, useContext, useEffect, useState } from "react";
import { FloatButton } from "antd";
import SteinStore from "stein-js-client";
import { BASE_API_URL } from "./config/base-url";
import { FilterArea, FilterFish, FilterSize } from "./utils/filter-list";
import Fishes from "./components/fish/Fish";
import Header from "./components/layout/Header";
import FishThumbnail from "./components/fish/FishThumbnail";
import FishSearch from "./components/fish/FishSearch";
import FishModel from "./models/fish";
import { Size } from "./models/size";
import { Area } from "./models/area";
import "./App.scss";
import { SortNumber, SortObject } from "./utils/sort-list";
import { FishContext } from "./store/fish-context";
import { Unique } from "./utils/unique-list";

const store = new SteinStore(BASE_API_URL);

function App() {
  const [fishes, setFishes] = useState<FishModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fishCtx = useContext(FishContext);

  const getFishHandler = () => {
    setLoading(true);
    store.read("list").then(
      (data: FishModel[]) => {
        console.log("GET FISH : ", data);
        const array: any = FilterFish(data);
        const unique = Unique(array, "uuid");
        fishCtx.addFishes(unique);
        setFishes(unique);
        setLoading(false);
      },
      (error: Error) => {
        console.log("ERROR : ", error);
        setLoading(false);
      }
    );
  };

  const getAreaHandler = () => {
    store.read("option_area").then(
      (data: Area[]) => {
        console.log("GET AREA : ", FilterArea(data));
        fishCtx.addAreas(FilterArea(data));
      },
      (error: Error) => {
        console.log("ERROR : ", error);
      }
    );
  };

  const getSizeHandler = () => {
    store.read("option_size").then(
      (data: Size[]) => {
        const filteredData = FilterSize(data);
        let sizeNum: number[] = [];
        let newSize: Size[] = [];
        filteredData.forEach((el: Size) => {
          sizeNum.push(Number(el.size));
        });
        let sortedSize = SortNumber(sizeNum);
        for (let i = 0; i < sortedSize.length; i++) {
          newSize.push({ size: sortedSize[i].toString() });
        }
        console.log("GET SIZE : ", newSize);
        fishCtx.addSizes(newSize);
      },
      (error: Error) => {
        console.log("ERROR : ", error);
      }
    );
  };

  const deleteHandler = (id: string) => {
    setLoading(true);
    store
      .delete("list", {
        search: { uuid: id },
      })
      .then((res: Error) => {
        console.log("DELETE : ", res);
        getFishHandler();
      });
  };

  const filterHandler = (sortkey: string, filterBy: string) => {
    console.log("filterBy", filterBy);
    console.log("sortkey", sortkey);
    if (sortkey && filterBy) {
      const sortedFishes = SortObject(fishes, filterBy, sortkey);
      console.log("sortedFishes", sortedFishes);
      setFishes(sortedFishes);
    }
  };

  const searchHandler = (searchInput: string) => {
    let txtInput = searchInput.toLowerCase();
    if (txtInput) {
      const filtered = fishes.filter(
        (item: FishModel) =>
          (item.area_kota && item.area_kota.toLowerCase() === txtInput) ||
          (item.area_provinsi &&
            item.area_provinsi.toLowerCase() === txtInput) ||
          (item.komoditas && item.komoditas.toLowerCase() === txtInput) ||
          (item.size && item.size.toLowerCase() === txtInput) ||
          (item.price && item.price.toLowerCase() === txtInput)
      );
      setFishes(filtered);
    } else {
      setFishes(fishCtx.fishes);
    }
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("GET DATA FROM SERVICE!");
      getFishHandler();
      getAreaHandler();
      getSizeHandler();
    }, 500);

    return () => {
      console.log("CLEANUP!");
      clearTimeout(identifier);
    };
  }, []);

  return (
    <Fragment>
      <Header />
      <main>
        <FishThumbnail />
        {loading && (
          <div className="loading">
            <p>Loading ...</p>
          </div>
        )}
        {!loading && (
          <>
            <FishSearch onFilter={filterHandler} onSearch={searchHandler} />
            <Fishes items={fishes} onDelete={deleteHandler} />
          </>
        )}
      </main>
      <FloatButton.BackTop />
    </Fragment>
  );
}

export default App;
