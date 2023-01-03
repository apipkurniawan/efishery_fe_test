import Card from "../UI/Card";
import { PlusCircleFilled } from "@ant-design/icons";
import "./FishSearch.scss";

const FishSearch = () => {
  return (
    <Card>
      <div className="search-container">
        <div>
          <input type="text" placeholder="search ..." />
        </div>
        <div>
          <button>{<PlusCircleFilled />} Add</button>
        </div>
      </div>
    </Card>
  );
};

export default FishSearch;
