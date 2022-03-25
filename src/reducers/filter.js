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
  name: '',
};

export const filterActions = {
  SET_CLASSES: 'SET_CLASSES',
  SET_PART: 'SET_PART',
  SET_TYPE: 'SET_TYPE',
  SET_ENERGY_COST: 'SET_ENERGY_COST',
  SET_NAME: 'SET_NAME',
  CLEAR_FILTER: 'CLEAR_FILTER',
};

export const filterReducer = (state, action) => {
  switch(action.type) {
    case filterActions.SET_CLASSES:
      return {
        ...state,
        classes: !action.payload.length ? initialFilter.classes : action.payload,
      };
    
    case filterActions.SET_PART:
      return {
        ...state,
        parts: !action.payload.length ? initialFilter.parts : action.payload,
      };
    
    case filterActions.SET_TYPE:
      return {
        ...state,
        types: !action.payload.length ? initialFilter.types : action.payload,
      };
    
    case filterActions.SET_ENERGY_COST:
      return {
        ...state,
        energyCosts: !action.payload.length ? initialFilter.energyCosts : action.payload,
      };
    
    case filterActions.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    
    case filterActions.CLEAR_FILTER:
      return initialFilter;

    default:
      return state;
  }
};