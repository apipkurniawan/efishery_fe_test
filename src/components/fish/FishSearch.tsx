import Card from "../UI/Card";
import "./FishSearch.scss";

const FishSearch = () => {
  return (
    <Card>
      <div className="search-container">
        <input type="text" placeholder="search ..." />
      </div>
    </Card>
  );
};

export default FishSearch;
