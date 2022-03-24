import {cards} from '../contents/cards';

export const fitlerByClass = (
  axieClass) => cards.filter(card => card.class === axieClass
);