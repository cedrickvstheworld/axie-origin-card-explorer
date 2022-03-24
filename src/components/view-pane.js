import {useState} from 'react';
import ViewPaneClass from "./partials/view-pane-class";
import {cards} from '../contents/cards';
import { fitlerByClass } from '../utils.js/helpers';
import {axieClass} from '../contents/constants';
import SmallScreenFilter from './partials/small-screen-filter';

const ViewPane = () => {
  const [cardList] = useState(cards);
  const aquaticCards = fitlerByClass(axieClass.AQUATIC);
  const beastCards = fitlerByClass(axieClass.BEAST);
  const birdCards = fitlerByClass(axieClass.BIRD);
  const bugCards = fitlerByClass(axieClass.BUG);
  const plantCards = fitlerByClass(axieClass.PLANT);
  const reptileCards = fitlerByClass(axieClass.REPTILE);

  return (
    <div className="view-pane">
      <div className="view-pane-head-content-group">
        <div className="view-pane-card-text">{cardList.length} Cards</div>
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