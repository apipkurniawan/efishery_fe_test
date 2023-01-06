import Card from "../UI/Card";
import {
  ClearOutlined,
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
import { FilterDropdown } from "../../constants/filter-dropdown";

const FishSearch: React.FC<{
  onSearch: (txt: string) => void;
  onSave: () => void;
  onFilter: (sortkey: string, filterBy: string) => void;
}> = (props) => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [enteredSearch, setEnteredSearch] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [classAsc, setClassAsc] = useState("");
  const [classDesc, setClassDesc] = useState("");

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  const saveHandler = () => {
    setFormIsShown(false);
    props.onSave();
  };

  const ascHandler = () => {
    setClassAsc("btn-filter");
    setClassDesc("");
    setSortKey("ASC");
  };
  const descHandler = () => {
    setClassAsc("");
    setClassDesc("btn-filter");
    setSortKey("DESC");
  };

  const onChangeFilterByHandler = (event: any) => {
    setFilterBy(event.target.value);
  };

  const searchChangeHandler = (event: any) => {
    let txtSearch = event.target.value;
    if (!txtSearch) {
      clearFormatHandler();
    }
    setEnteredSearch(txtSearch);
  };

  const clearFormatHandler = () => {
    setClassAsc("");
    setClassDesc("");
    setFilterBy("");
    setSortKey("");
    setEnteredSearch("");
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      // console.log("SEARCH!");
      props.onSearch(enteredSearch);
    }, 500);

    return () => {
      // console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [enteredSearch]);

  useEffect(() => {
    // console.log("FILTER!");
    props.onFilter(sortKey, filterBy);
  }, [sortKey, filterBy]);

  const styleDropdown = {
    marginRight: "1rem",
    width: "7rem",
  };
  const listDropdown: Select[] = FilterDropdown;

  return (
    <Fragment>
      {formIsShown && (
        <FishForm onSave={saveHandler} onClose={hideFormHandler} />
      )}
      <div className="search">
        <Card>
          <div className="search-container">
            <div className="filter">
              <Dropdown
                name="fish"
                value={listDropdown}
                selected={filterBy}
                style={styleDropdown}
                placeholder="FilterBy ..."
                onChange={onChangeFilterByHandler}
              />
              <Button class={classAsc} onClick={ascHandler}>
                {<SortAscendingOutlined />}
              </Button>
              <Button class={classDesc} onClick={descHandler}>
                {<SortDescendingOutlined />}
              </Button>
              <Button onClick={clearFormatHandler}>{<ClearOutlined />}</Button>
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
