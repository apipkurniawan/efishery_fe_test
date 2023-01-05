import Card from "../UI/Card";
import {
  PlusCircleFilled,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import "./FishSearch.scss";
import React, { Fragment, useEffect, useState } from "react";
import FishForm from "./FishForm";
import Dropdown from "../UI/Dropdown";
import Button from "../UI/Button";
import { Select } from "../../models/select";

const FishSearch: React.FC<{ onSearch: (txt: string) => void }> = (props) => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [enteredSearch, setEnteredSearch] = useState("");

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  const ascHandler = () => {};

  const descHandler = () => {};

  const searchChangeHandler = (event: any) => {
    setEnteredSearch(event.target.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("SEARCH!");
      props.onSearch(enteredSearch);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [enteredSearch]);

  const styleDropdown = {
    marginRight: "1rem",
    width: "10rem",
  };
  const listDropdown: Select[] = [];

  return (
    <Fragment>
      {formIsShown && <FishForm onClose={hideFormHandler} />}
      <div className="search">
        <Card>
          <div className="search-container">
            <div className="filter">
              <Dropdown
                name="fish"
                value={listDropdown}
                selected=""
                style={styleDropdown}
                placeholder="FilterBy ..."
              />
              <Button onClick={ascHandler}>{<SortAscendingOutlined />}</Button>
              <Button onClick={descHandler}>
                {<SortDescendingOutlined />}
              </Button>
            </div>
            <div className="search-input">
              <input
                type="text"
                placeholder="search ..."
                value={enteredSearch}
                onChange={searchChangeHandler}
              />
            </div>
            <div className="btnAdd">
              <Button onClick={showFormHandler}>
                {<PlusCircleFilled />} Add
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default FishSearch;
