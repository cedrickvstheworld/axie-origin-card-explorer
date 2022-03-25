import {cards} from '../contents/cards';

export const fitlerByClass = 
  (axieClass, cards) => cards.filter(card => card.class === axieClass);

export const filterCards = (filter) => {
  return cards.filter((card) => {
    const nameFilter = new RegExp(stringSanitize(filter.name), 'i');
    if (
      filter.classes.includes(card.class) &&
      filter.parts.includes(card.part) &&
      filter.energyCosts.includes(card.energyCost) &&
      filter.types.some(type => card.type.includes(type)) &&
      nameFilter.test(card.name)
    ) {
      return card;
    }
    return false;
  })
};

export const stringSanitize = (str) => (str ? str.replace(/\s+/g, ' ').trim() : '');