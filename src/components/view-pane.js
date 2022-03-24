import {useContext} from 'react';
import ViewPaneClass from "./partials/view-pane-class";
import {filterCards, fitlerByClass} from '../utils.js/helpers';
import {axieClass} from '../contents/constants';
import SmallScreenFilter from './partials/small-screen-filter';
import {FilterContext} from '../contexts/filter';
import {cards} from '../contents/cards';

const ViewPane = () => {
  const {filter} = useContext(FilterContext);
  const filteredCards = filterCards(filter);
  const aquaticCards = fitlerByClass(axieClass.AQUATIC, filteredCards);
  const beastCards = fitlerByClass(axieClass.BEAST, filteredCards);
  const birdCards = fitlerByClass(axieClass.BIRD, filteredCards);
  const bugCards = fitlerByClass(axieClass.BUG, filteredCards);
  const plantCards = fitlerByClass(axieClass.PLANT, filteredCards);
  const reptileCards = fitlerByClass(axieClass.REPTILE, filteredCards);

  return (
    <div className="view-pane">
      <div className="view-pane-head-content-group">
        <div className="view-pane-card-text">{cards.length} Cards</div>
        <SmallScreenFilter />
      </div>

      <div className="card-viewer-container">
        {aquaticCards.length ? 
          <ViewPaneClass 
            axieClass="Aquatic"
            cardList={aquaticCards}/> 
          : null}
        
        {beastCards.length ? 
          <ViewPaneClass 
            axieClass="Beast"
            cardList={beastCards}/>
          : null}

        {birdCards.length ? 
          <ViewPaneClass 
            axieClass="Bird"
            cardList={birdCards}/> 
          : null}

        {bugCards.length ? 
          <ViewPaneClass 
            axieClass="Bug"
            cardList={bugCards}/> 
          : null}

        {plantCards.length ? 
          <ViewPaneClass 
            axieClass="Plant"
            cardList={plantCards}/> 
          : null}

        {reptileCards.length ? 
          <ViewPaneClass 
            axieClass="Reptile"
            cardList={reptileCards}/> 
          : null}
      </div>
    </div>
  );
};

export default ViewPane;