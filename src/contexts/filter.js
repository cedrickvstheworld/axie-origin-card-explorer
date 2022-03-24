import {createContext, useReducer} from 'react';
import {filterReducer, initialFilter} from '../reducers/filter';

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const [filter, dispatch] = useReducer(filterReducer, initialFilter);

  return (
    <FilterContext.Provider value={{filter, filterDispatch: dispatch}}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterContextProvider;
