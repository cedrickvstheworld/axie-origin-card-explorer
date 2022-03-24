import {useContext} from 'react';
import {FilterModalContext} from '../contexts/filter-modal';
import SmallScreenFilterModal from './partials/small-screen-filter-modal';
import SidePane from './side-pane';
import ViewPane from './view-pane';

const Root = () => {
  const {filterModalVisible} = useContext(FilterModalContext);
  return (
    <div className="root">
      {filterModalVisible ? <SmallScreenFilterModal />: null}
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
