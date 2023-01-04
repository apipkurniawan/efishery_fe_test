import { useEffect, useState } from "react";
import { BackTop } from "antd";
import FishContextProvider from "./store/fish-context";
import SteinStore from "stein-js-client";
import { BASE_API_URL } from "./config/base-url";
import FishModel from "./models/fish";
import { FilterList } from "./utils/filter-list";
import Fishes from "./components/fish/Fish";
import Header from "./components/layout/Header";
import FishThumbnail from "./components/fish/FishThumbnail";
import FishSearch from "./components/fish/FishSearch";
import "./App.scss";

function App() {
  const [fishes, setFishes] = useState<FishModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getFishHandler = () => {
    setLoading(true);
    const store = new SteinStore(BASE_API_URL);
    store.read("list").then(
      (data: FishModel[]) => {
        console.log("GET : ", data);
        setFishes(FilterList(data));
        setLoading(false);
      },
      (error: any) => {
        console.log("ERROR : ", error);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("GET DATA FROM SERVICE!");
      getFishHandler();
    }, 500);

    return () => {
      console.log("CLEANUP!");
      clearTimeout(identifier);
    };
  }, []);

  return (
    <FishContextProvider>
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
            <Fishes items={fishes} />
          </>
        )}
      </main>
      <BackTop className="backtop" />
    </FishContextProvider>
  );
}

export default App;
