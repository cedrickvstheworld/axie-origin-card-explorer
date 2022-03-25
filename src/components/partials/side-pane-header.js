import {useContext} from "react";
import {FilterModalContext} from "../../contexts/filter-modal";
import {filterActions} from '../../reducers/filter';
import {FilterContext} from '../../contexts/filter';


const SidePaneHeader = () => {
  const {
    filterDispatch,
    setIsBeastSelected,
    setIsAquaticSelected,
    setIsPlantSelected,
    setIsBugSelected,
    setIsBirdSelected,
    setIsReptileSelected,
    setClassFilter,
  } = useContext(FilterContext);
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
    filterDispatch({type: filterActions.CLEAR_FILTER});
    const classTogglesToOff = [
      setIsBeastSelected,
      setIsAquaticSelected,
      setIsPlantSelected,
      setIsBugSelected,
      setIsBirdSelected,
      setIsReptileSelected,
    ];
    classTogglesToOff.forEach((classToggle) => classToggle(false));
    setClassFilter([]);

    // reset class filter button state
    const classFilterButtons = document.getElementsByClassName('class-filter-button');
    for (let i in classFilterButtons) {
      const button = classFilterButtons[i];
      button.classList.remove('class-filter-button-selected');
      button.classList.add('class-filter-button-unselected');
      button.children[0].classList.remove('class-icon-selected');
      if (parseInt(i) + 1 === classFilterButtons.length) {
        break;
      }
    }
    
    // reset input-selects selected value
    const inputSelects = document.getElementsByClassName('input-select');
    for (let i in inputSelects) {
      const inputSelect = inputSelects[i];
      inputSelect.value = '';
      if (parseInt(i) + 1 === inputSelects.length) {
        break;
      }
    }
  };

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