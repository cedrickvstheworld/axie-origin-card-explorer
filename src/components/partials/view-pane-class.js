import HorizontalDivider from "./horizontal-divider";

const ViewPaneClass = (prop) => {
  const {axieClass, cardList} = prop;
  return (
    <div className="view-pane-class-container">
      <div className="view-pane-class-text">{axieClass}</div>
      <div className="card-list-container">
        {cardList.map(card => 
          <div key={card.id} className="card-column">
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