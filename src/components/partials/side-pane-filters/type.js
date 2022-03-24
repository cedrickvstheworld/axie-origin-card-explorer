import {useContext} from 'react';
import {type} from '../../../contents/constants';
import {filterActions} from '../../../reducers/filter';
import {FilterContext} from '../../../contexts/filter';

const TypeFilter = () => {
  const {filterDispatch} = useContext(FilterContext);
  const handleSelect = (e) => {
    const selected = e.target.value
    const payload = selected ? [selected] : [];
    filterDispatch({
      type: filterActions.SET_TYPE,
      payload,
    })
  };

  return (
    <div className="type-filter">
      <div className="filter-type-text">Type</div>
      <div className="select-type-container">
        <select onChange={handleSelect} className="input-select">
          <option value="">All</option>
          <option value={type.ATTACK}>Attack</option>
          <option value={type.SECRET}>Secret</option>
          <option value={type.SKILL}>Skill</option>
          <option value={type.BANISH}>Banish</option>
          <option value={type.RETAIN}>Retain</option>
          <option value={type.POWER}>Power</option>
          <option value={type.INNATE}>Innate</option>
        </select>
      </div>
    </div>
  );
};

export default TypeFilter;
