import { Fragment, useEffect, useState } from "react";
import { BackTop } from "antd";
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

const store = new SteinStore(BASE_API_URL);

function App() {
  const [fishes, setFishes] = useState<FishModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getFishHandler = () => {
    setLoading(true);
    store.read("list").then(
      (data: FishModel[]) => {
        console.log("GET FISH : ", data);
        setFishes(FilterFish(data));
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
      },
      (error: Error) => {
        console.log("ERROR : ", error);
      }
    );
  };

  const getSizeHandler = () => {
    store.read("option_size").then(
      (data: Size[]) => {
        console.log("GET SIZE : ", FilterSize(data));
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
            <FishSearch />
            <Fishes items={fishes} onDelete={deleteHandler} />
          </>
        )}
      </main>
      <BackTop className="backtop" />
    </Fragment>
  );
}

export default App;
