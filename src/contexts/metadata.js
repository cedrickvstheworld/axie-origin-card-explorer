import {createContext, useState} from 'react';

export const MetadataContext = createContext();

export const initialMetadata = {
  statusEffects: {
    buffs: [],
    debuffs: [],
    neutrals: [],
  },
  curses: [],
  tools: [],
};

const MetadataContextProvider = (props) => {
  const [metadata, setMetadata] = useState(initialMetadata);
  
  return (
  <MetadataContext.Provider value={{
    metadata,
    setMetadata,
  }}>
    {props.children}
  </MetadataContext.Provider>
  );
};

export default MetadataContextProvider;
