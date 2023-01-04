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
import Button from "../UI/Button";

const FishSearch = () => {
  const [formIsShown, setFormIsShown] = useState(false);

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  const ascHandler = () => {};

  const descHandler = () => {};

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
            <Button onClick={ascHandler}>{<SortAscendingOutlined />}</Button>
            <Button onClick={descHandler} style={margin}>
              {<SortDescendingOutlined />}
            </Button>
            <input type="text" placeholder="search ..." />
          </div>
          <div>
            <Button onClick={showFormHandler}>
              {<PlusCircleFilled />} Add
            </Button>
          </div>
        </div>
      </Card>
    </Fragment>
  );
};

export default FishSearch;
