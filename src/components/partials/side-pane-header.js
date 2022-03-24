import {useContext} from "react";
import {FilterModalContext} from "../../contexts/filter-modal";
import {filterActions} from '../../reducers/filter';
import {FilterContext} from '../../contexts/filter';


const SidePaneHeader = () => {
  const {filterDispatch} = useContext(FilterContext);
  const {setFilterModalVisible} = useContext(FilterModalContext);

  const hideModal = () => {
    const modal = document.getElementById('small-screen-filter-modal');
    modal.classList.remove('animate__slideInDown');
    modal.classList.add('animate__fadeOutUp');
    const hideToDisplay = setTimeout(() => {
      modal.classList.remove('animate__fadeOutUp');
      modal.classList.add('animate__slideInDown');
      clearTimeout(hideToDisplay);
    }, 500);
    const unmount = setTimeout(() => {
      setFilterModalVisible(false);
      clearTimeout(unmount);
    }, 500);
  };

  const resetFilter = () => {
    filterDispatch({type: filterActions.CLEAR_FILTER})
  }

  return (
    <div className="filter-head">
      <div className="small-screen-close-button-container">
        <i onClick={hideModal} className="fa-solid fa-xmark fa-2x"></i>
      </div>
      <div className="row">
        <div className="col s3 filter-head-items">
          <div className="filter-head-text">Filter</div>
        </div>
        <div className="col s9 filter-head-items reset-container">
          <div onClick={resetFilter} className="filter-reset-text">Reset</div>
        </div>
      </div>
    </div>
  );
};

export default SidePaneHeader;