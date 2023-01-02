import React, { useCallback, useState } from "react";
import SteinStore from "stein-js-client";

import FishModel from "./models/fish";
import "./App.scss";
import { BASE_API_URL } from "./config/base-url";

function App() {
  const [listFish, setListFish] = useState<FishModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchListFishHandler = useCallback(async () => {
    setIsLoading(true);
    setError("");

    const store = new SteinStore(BASE_API_URL);
    store.read("list", { limit: 1, offset: 2 }).then((data: FishModel[]) => {
      console.log("opo", data);
      if (!data) {
        setError("Something went wrong!");
      } else {
        setListFish(data);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <button onClick={fetchListFishHandler}>Fetch Fish</button>
      <div className="App">List Harga Ikan</div>
      {!isLoading &&
        listFish &&
        listFish.length > 0 &&
        listFish.map((item: FishModel) => (
          <ul>
            <li>{item.price}</li>
            <li>{item.komoditas}</li>
            <li>{item.komoditas}</li>
          </ul>
        ))}
      {isLoading && <p>Loading ...</p>}
      {!isLoading && error && <p>{error}</p>}
    </>
  );
}

export default App;
