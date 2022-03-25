import {createContext, useReducer, useState} from 'react';
import {filterReducer, initialFilter} from '../reducers/filter';

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const [filter, dispatch] = useReducer(filterReducer, initialFilter);
  
  const [isBeastSelected, setIsBeastSelected] = useState(false);
  const [isAquaticSelected, setIsAquaticSelected] = useState(false);
  const [isPlantSelected, setIsPlantSelected] = useState(false);
  const [isBugSelected, setIsBugSelected] = useState(false);
  const [isBirdSelected, setIsBirdSelected] = useState(false);
  const [isReptileSelected, setIsReptileSelected] = useState(false);
  const [classFilter, setClassFilter] = useState([]);

  return (
    <FilterContext.Provider value={{
      filter,
      filterDispatch: dispatch,

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
    }}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterContextProvider;
