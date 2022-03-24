import {createContext, useState} from 'react';

export const FilterModalContext = createContext();

const FilterModalContextProvider = (props) => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  return (
    <FilterModalContext.Provider value={{filterModalVisible, setFilterModalVisible}}>
      {props.children}
    </FilterModalContext.Provider>
  );
}

export default FilterModalContextProvider;
