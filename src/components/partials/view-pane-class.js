import {useContext} from "react";
import HorizontalDivider from "./horizontal-divider";
import {initialMetadata, MetadataContext} from '../../contexts/metadata';


const ViewPaneClass = (prop) => {
  const {axieClass, cardList} = prop;
  const {setMetadata} = useContext(MetadataContext);

  const displayInfo = (cardMetadata) => {
    setMetadata(cardMetadata);
  };

  const hideInfo = () => {
    setMetadata(initialMetadata);
  };

  return (
    <div className="view-pane-class-container">
      <div className="view-pane-class-text">{axieClass}</div>
      <div className="card-list-container">
        {cardList.map(card => 
          <div
          key={card.id}
          className="card-column"
          onMouseEnter={() => displayInfo(card.metadata)}
          onMouseLeave={() => hideInfo()}>
            <div className="card-container">
              <img src={card.imgURL} alt="" className="card-image"/>
            </div>
          </div>
        )}
      </div>
      <HorizontalDivider  style={{marginTop: '40px'}}/>
    </div>
  );
};

export default ViewPaneClass;