import {useContext} from "react";
import {filterActions} from '../../reducers/filter';
import {FilterContext} from '../../contexts/filter';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


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

    // reset name search input
    document.getElementById('search-card-name-input').value = '';
  };

  const hideSmallScreenFilter = () => {
    const modal = document.getElementById('small-screen-filter-modal');
    modal.classList.remove('animate__slideInDown');
    modal.classList.add('animate__fadeOutUp');
    const hideToDisplay = setTimeout(() => {
      modal.classList.remove('animate__fadeOutUp');
      modal.classList.add('animate__slideInDown');
      clearTimeout(hideToDisplay);
    }, 500);
    const unmount = setTimeout(() => {
      modal.style.display = 'none';
      clearTimeout(unmount);
    }, 500);
  };

  return (
    <div className="filter-head">
      <div className="small-screen-close-button-container">
        <FontAwesomeIcon onClick={hideSmallScreenFilter} icon={faTimes} size="2x" />
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