import {useContext} from 'react';
import {energyCosts} from '../../../contents/constants';
import {filterActions} from '../../../reducers/filter';
import {FilterContext} from '../../../contexts/filter';

const EnergyCostFilter = () => {
  const {filterDispatch} = useContext(FilterContext);
  const handleSelect = (e) => {
    const selected = e.target.value
    const payload = selected ? [parseInt(selected)] : [];
    filterDispatch({
      type: filterActions.SET_ENERGY_COST,
      payload,
    })
  };
  
  return (
    <div className="energy-cost-filter">
      <div className="filter-energy-cost-text">Energy Cost</div>
      <div className="select-energy-cost-container">
        <select onChange={handleSelect} className="input-select">
          <option value="">-</option>
          <option value={energyCosts[0]}>0</option>
          <option value={energyCosts[1]}>1</option>
          <option value={energyCosts[2]}>2</option>
        </select>
      </div>
    </div>
  );
};

export default EnergyCostFilter;