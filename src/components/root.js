import SmallScreenFilterModal from './partials/small-screen-filter-modal';
import SidePane from './side-pane';
import ViewPane from './view-pane';

const Root = () => {
  return (
    <div className="root">
      <SmallScreenFilterModal />
      <div className="side-pane-container">
        <SidePane />
      </div>
      <div className="view-pane-container">
        <ViewPane />
      </div>
    </div>
  );
};

export default Root;
