/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useContext} from 'react';
import {axieClass} from '../../../contents/constants';
import {filterActions} from '../../../reducers/filter';
import {FilterContext} from '../../../contexts/filter';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaw, faFish, faSeedling, faBug, faFeatherAlt, faPoop} from '@fortawesome/free-solid-svg-icons';

const ClassFilter = () => {
  const {
    filterDispatch,
    isBeastSelected,
    setIsBeastSelected,
    isAquaticSelected,
    setIsAquaticSelected,
    isPlantSelected,
    setIsPlantSelected,
    isBugSelected,
    setIsBugSelected,
    isBirdSelected,
    setIsBirdSelected,
    isReptileSelected,
    setIsReptileSelected,
    classFilter,
    setClassFilter,
  } = useContext(FilterContext);

  const buttonToggle = (e, identifier, action) => {
    if (!identifier) {
      e.target.classList.remove('class-filter-button-unselected');
      e.target.classList.add('class-filter-button-selected');
      e.target.children[0].classList.add('class-icon-selected');
    }
    else {
      e.target.classList.remove('class-filter-button-selected');
      e.target.classList.add('class-filter-button-unselected');
      e.target.children[0].classList.remove('class-icon-selected');
    }
    action(!identifier);
  };

  useEffect(() => {
    filterDispatch({
      type: filterActions.SET_CLASSES,
      payload: classFilter,
    })
  }, [classFilter]);

  /**
   * beast
   */
  useEffect(() => {
    if (isBeastSelected) {
      setClassFilter([...new Set([...classFilter, axieClass.BEAST])]);
    }
    else {
      setClassFilter(classFilter.filter((type) => type !== axieClass.BEAST));
    }
  }, [isBeastSelected]);

  /**
   * aquatic
   */
  useEffect(() => {
    if (isAquaticSelected) {
      setClassFilter([...new Set([...classFilter, axieClass.AQUATIC])]);
    }
    else {
      setClassFilter(classFilter.filter((type) => type !== axieClass.AQUATIC));
    }
  }, [isAquaticSelected]);

  /**
   * plant
   */
  useEffect(() => {
    if (isPlantSelected) {
      setClassFilter([...new Set([...classFilter, axieClass.PLANT])]);
    }
    else {
      setClassFilter(classFilter.filter((type) => type !== axieClass.PLANT));
    }
  }, [isPlantSelected]);

  /**
   * bug
   */
  useEffect(() => {
    if (isBugSelected) {
      setClassFilter([...new Set([...classFilter, axieClass.BUG])]);
    }
    else {
      setClassFilter(classFilter.filter((type) => type !== axieClass.BUG));
    }
  }, [isBugSelected]);

  /**
   * bird
   */
  useEffect(() => {
    if (isBirdSelected) {
      setClassFilter([...new Set([...classFilter, axieClass.BIRD])]);
    }
    else {
      setClassFilter(classFilter.filter((type) => type !== axieClass.BIRD));
    }
  }, [isBirdSelected]);

  /**
   * reptile
   */
  useEffect(() => {
    if (isReptileSelected) {
      setClassFilter([...new Set([...classFilter, axieClass.REPTILE])]);
    }
    else {
      setClassFilter(classFilter.filter((type) => type !== axieClass.REPTILE));
    }
  }, [isReptileSelected]);

  return (
    <div className="class-filter">
      <div className="filter-class-text">Class</div>

      <div className="class-button-group">
        {/* row 1 */}
        <div className="class-button-group-item">
          <button
            onClick={(e) => buttonToggle(e, isBeastSelected, setIsBeastSelected)}
            className="class-filter-button class-filter-button-unselected">
              <FontAwesomeIcon className="class-filter-button-icon beast-color" icon={faPaw} />
              &nbsp;Beast
          </button>
          <button
            onClick={(e) => buttonToggle(e, isAquaticSelected, setIsAquaticSelected)}
            className="class-filter-button class-filter-button-unselected">
              <FontAwesomeIcon className="class-filter-button-icon aqua-color" icon={faFish} />
              &nbsp;Aquatic
          </button>
          <button
            onClick={(e) => buttonToggle(e, isPlantSelected, setIsPlantSelected)}
            className="class-filter-button class-filter-button-unselected">
              <FontAwesomeIcon className="class-filter-button-icon plant-color" icon={faSeedling} />
              &nbsp;Plant
          </button>
        </div>

        {/* row 2 */}
        <div className="class-button-group-item">
          <button 
            onClick={(e) => buttonToggle(e, isBugSelected, setIsBugSelected)}
            className="class-filter-button class-filter-button-unselected">
              <FontAwesomeIcon className="class-filter-button-icon bug-color" icon={faBug} />
              &nbsp;Bug
          </button>
          <button
            onClick={(e) => buttonToggle(e, isBirdSelected, setIsBirdSelected)}
            className="class-filter-button class-filter-button-unselected">
              <FontAwesomeIcon className="class-filter-button-icon bird-color" icon={faFeatherAlt} />
              &nbsp;Bird
          </button>
          <button
            onClick={(e) => buttonToggle(e, isReptileSelected, setIsReptileSelected)}
            className="class-filter-button class-filter-button-unselected">
              <FontAwesomeIcon className="class-filter-button-icon reptile-color" icon={faPoop} />
              &nbsp;Reptile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassFilter;
