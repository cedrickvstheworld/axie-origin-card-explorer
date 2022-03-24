import {
  axieClass,
  energyCosts,
  parts,
  type,
} from '../contents/constants';

export const initialFilter = {
  classes: Object.values(axieClass),
  parts: Object.values(parts),
  types: Object.values(type),
  energyCosts: energyCosts,
};

export const filterActions = {
  SET_CLASSES: 'SET_CLASSES',
  SET_PART: 'SET_PART',
  SET_TYPE: 'SET_TYPE',
  SET_ENERGY_COST: 'SET_ENERGY_COST',
  CLEAR_FILTER: 'CLEAR_FILTER',
};

export const filterReducer = (state, action) => {
  switch(action.type) {
    case filterActions.SET_CLASSES:
      return {
        classes: !action.payload.length ? initialFilter.classes : action.payload,
        parts: state.parts,
        types: state.types,
        energyCosts: state.energyCosts,
      };
    
    case filterActions.SET_PART:
      return {
        classes: state.classes,
        parts: !action.payload.length ? initialFilter.parts : action.payload,
        types: state.types,
        energyCosts: state.energyCosts,
      };
    
    case filterActions.SET_TYPE:
      return {
        classes: state.classes,
        parts: state.parts,
        types: !action.payload.length ? initialFilter.types : action.payload,
        energyCosts: state.energyCosts,
      };
    
    case filterActions.SET_ENERGY_COST:
      return {
        classes: state.classes,
        parts: state.parts,
        types: state.types,
        energyCosts: !action.payload.length ? initialFilter.energyCosts : action.payload,
      };
    
    case filterActions.CLEAR_FILTER:
      return initialFilter;

    default:
      return state;
  }
};