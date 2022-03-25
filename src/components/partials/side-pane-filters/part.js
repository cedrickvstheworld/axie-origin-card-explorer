import {useContext} from 'react';
import {parts} from '../../../contents/constants';
import {filterActions} from '../../../reducers/filter';
import {FilterContext} from '../../../contexts/filter';

const PartFilter = () => {
  const {filterDispatch} = useContext(FilterContext);
  const handleSelect = (e) => {
    const selected = e.target.value
    const payload = selected ? [selected] : [];
    filterDispatch({
      type: filterActions.SET_PART,
      payload,
    })
  };

  return (
    <div className="part-filter">
      <div className="filter-part-text">Part</div>
      <div className="select-part-container">
        <select onChange={handleSelect} className="input-select">
          <option value="">All</option>
          <option value={parts.HORN}>Horn</option>
          <option value={parts.MOUTH}>Mouth</option>
          <option value={parts.BACK}>Back</option>
          <option value={parts.TAIL}>Tail</option>
          <option value={parts.EAR}>Ear</option>
        </select>
      </div>
    </div>
  );
};

export default PartFilter;