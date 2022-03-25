import {useContext} from 'react';
import {filterActions} from '../../../reducers/filter';
import {FilterContext} from '../../../contexts/filter';

const NameFilter = () => {
  const {filterDispatch} = useContext(FilterContext);
  const handleInput = (e) => {
    filterDispatch({
      type: filterActions.SET_NAME,
      payload: e.target.value,
    })
  };

  return (
    <div className="name-filter">
      <div className="filter-name-text">Card Name</div>
      <div className="filter-name-container">
        <input
          onChange={handleInput}
          className="search-card-name-input"
          id="search-card-name-input"
          placeholder="Search Card Name" />
      </div>
    </div>
  );
};

export default NameFilter;