import { useState } from "react";
import Card from "../UI/Card";
import FishItem from "./FishItem";
import ConfirmDialog from "../UI/ConfirmDialog";
import FishForm from "./FishForm";
import FishModel from "../../models/fish";
import "./Fish.scss";

const Fishes: React.FC<{
  items: FishModel[];
  onDelete: (id: string) => void;
  onSave: () => void;
}> = (props) => {
  const [confirmIsShown, setConfirmIsShown] = useState(false);
  const [formIsShown, setFormIsShown] = useState(false);
  const [id, setId] = useState("");
  const [selectedData, setSelectedData] = useState<FishModel>();

  const showConfirmHandler = (id: string) => {
    setId(id);
    setConfirmIsShown(true);
  };

  const deleteFishHandler = () => {
    hideConfirmHandler();
    props.onDelete(id);
  };

  const saveHandler = () => {
    hideConfirmHandler();
    props.onSave();
  };

  const hideConfirmHandler = () => {
    setConfirmIsShown(false);
  };

  const showFormHandler = (selectedData: FishModel) => {
    setSelectedData(selectedData);
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  const fishesList = props.items.map((item: FishModel) => (
    <FishItem
      key={item.uuid}
      id={item.uuid}
      item={item}
      onShowConfirm={showConfirmHandler}
      onShowForm={showFormHandler}
    />
  ));

  return (
    <section className="fishes">
      {confirmIsShown && (
        <ConfirmDialog
          message="Yakin ingin hapus data?"
          onClose={hideConfirmHandler}
          onAccept={deleteFishHandler}
        />
      )}
      {formIsShown && (
        <FishForm
          selectedData={selectedData}
          onSave={saveHandler}
          onClose={hideFormHandler}
        />
      )}
      <Card>
        <ul>{fishesList}</ul>
      </Card>
    </section>
  );
};

export default Fishes;
