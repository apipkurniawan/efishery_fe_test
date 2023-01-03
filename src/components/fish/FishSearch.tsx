import Card from "../UI/Card";
import { PlusCircleFilled } from "@ant-design/icons";
import "./FishSearch.scss";
import { Fragment, useState } from "react";
import FishForm from "./FishForm";

const FishSearch = () => {
  const [formIsShown, setFormIsShown] = useState(false);

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  return (
    <Fragment>
      {formIsShown && <FishForm onClose={hideFormHandler} />}
      <Card>
        <div className="search-container">
          <div>
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
