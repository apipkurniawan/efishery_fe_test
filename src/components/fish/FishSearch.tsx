import Card from "../UI/Card";
import {
  PlusCircleFilled,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import "./FishSearch.scss";
import { Fragment, useState } from "react";
import FishForm from "./FishForm";
import Dropdown from "../UI/Dropdown";

const FishSearch = () => {
  const [formIsShown, setFormIsShown] = useState(false);

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  const margin = {
    marginRight: "1rem",
  };
  const listDropdown = ["komoditas", "price", "city", "prov"];

  return (
    <Fragment>
      {formIsShown && <FishForm onClose={hideFormHandler} />}
      <Card>
        <div className="search-container">
          <div>
            <Dropdown
              name="fish"
              value={listDropdown}
              style={margin}
              placeholder="FilterBy ..."
            />
            <button>{<SortAscendingOutlined />}</button>
            <button style={margin}>{<SortDescendingOutlined />}</button>
            <input type="text" placeholder="search ..." />
          </div>
          <div>
            <button onClick={showFormHandler}>
              {<PlusCircleFilled />} Add
            </button>
          </div>
        </div>
      </Card>
    </Fragment>
  );
};

export default FishSearch;
