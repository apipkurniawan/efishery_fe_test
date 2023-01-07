import { Fragment, useContext, useEffect, useState } from "react";
import { FloatButton } from "antd";
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
import {
  deleteFishService,
  getAreaService,
  getFishService,
  getSizeService,
} from "./services/fish-service";
import { Sort } from "./constants/sort.enum";

function App() {
  const [fishes, setFishes] = useState<FishModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const fishCtx = useContext(FishContext);

  const getFishHandler = () => {
    setLoading(true);
    setIsError(false);
    getFishService().then(
      (data: FishModel[]) => {
        console.log("GET FISH : ", data);
        const sortedarray: any = SortObject(
          FilterFish(data),
          "tgl_parsed",
          Sort.DESC
        );
        console.log("SORTED FISH : ", sortedarray);
        const unique = Unique(sortedarray, "uuid");
        fishCtx.addFishes(unique);
        console.log("UNIQUE FISHES : ", unique);
        setFishes(unique);
        setLoading(false);
      },
      (error: Error) => {
        console.log("ERROR : ", error);
        setIsError(true);
        setLoading(false);
      }
    );
  };

  const getAreaHandler = () => {
    getAreaService().then(
      (data: Area[]) => {
        // console.log("GET AREA : ", FilterArea(data));
        fishCtx.addAreas(FilterArea(data));
      },
      (error: Error) => {
        console.log("ERROR : ", error);
      }
    );
  };

  const getSizeHandler = () => {
    getSizeService().then(
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
        // console.log("GET SIZE : ", newSize);
        fishCtx.addSizes(newSize);
      },
      (error: Error) => {
        console.log("ERROR : ", error);
      }
    );
  };

  const deleteHandler = (id: string) => {
    setLoading(true);
    deleteFishService(id).then((res: Error) => {
      // console.log("DELETE : ", res);
      getFishHandler();
    });
  };

  const filterHandler = (sortkey: string, filterBy: string) => {
    if (sortkey && filterBy) {
      const sortedFishes = SortObject(fishes, filterBy, sortkey);
      const fishTmp = [...sortedFishes];
      setFishes(fishTmp);
    } else {
      setFishes([...fishCtx.fishes]);
    }
  };

  const searchHandler = (searchInput: string) => {
    let txtInput = searchInput.toLowerCase();
    if (txtInput) {
      const filtered = fishes.filter(
        (item: FishModel) =>
          (item.area_kota && item.area_kota.toLowerCase().includes(txtInput)) ||
          (item.area_provinsi &&
            item.area_provinsi.toLowerCase().includes(txtInput)) ||
          (item.komoditas && item.komoditas.toLowerCase().includes(txtInput)) ||
          (item.size && item.size.toLowerCase().includes(txtInput)) ||
          (item.price && item.price.toLowerCase().includes(txtInput))
      );
      setFishes(filtered);
    } else {
      setFishes(fishCtx.fishes);
    }
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      // console.log("GET DATA FROM SERVICE!");
      getFishHandler();
      getAreaHandler();
      getSizeHandler();
    }, 500);

    return () => {
      // console.log("CLEANUP!");
      clearTimeout(identifier);
    };
  }, []);

  return (
    <Fragment>
      <Header />
      <main>
        <FishThumbnail />
        {loading && (
          <div className="center">
            <p>Loading ...</p>
          </div>
        )}
        {!loading && (
          <>
            <FishSearch
              onSave={getFishHandler}
              onFilter={filterHandler}
              onSearch={searchHandler}
            />
            {isError && (
              <div className="center no-found">
                <p>No Found Data ...</p>
              </div>
            )}
            {!isError && (
              <Fishes
                items={fishes}
                onSave={getFishHandler}
                onDelete={deleteHandler}
              />
            )}
          </>
        )}
      </main>
      <FloatButton.BackTop />
    </Fragment>
  );
}

export default App;
