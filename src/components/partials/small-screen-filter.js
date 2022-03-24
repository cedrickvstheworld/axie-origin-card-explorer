import {useContext} from "react";
import {FilterModalContext} from "../../contexts/filter-modal";

const SmallScreenFilter = () => {
  const {setFilterModalVisible} = useContext(FilterModalContext);

  return (
    <div className="small-screen-filter">
      <div className="small-screen-filter-content-group">
        <button onClick={() => setFilterModalVisible(true)} className="small-screen-filter-button">
          Filter
        </button>
      </div>
    </div>
  );
};

export default SmallScreenFilter;
