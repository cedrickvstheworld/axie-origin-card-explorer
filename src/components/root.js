import {useContext} from 'react';
import {MetadataContext} from '../contexts/metadata';
import InfoViewer from './partials/info-viewer';
import SmallScreenFilterModal from './partials/small-screen-filter-modal';
import SidePane from './side-pane';
import ViewPane from './view-pane';

const Root = () => {
  const {metadata} = useContext(MetadataContext);

  return (
    <div className="root">
      <SmallScreenFilterModal />
      <div className="side-pane-container">
        <SidePane />
      </div>
      <div className="view-pane-container">
        <ViewPane />
      </div>

      {metadata.statusEffects.buffs.length ||
      metadata.statusEffects.debuffs.length ||
      metadata.statusEffects.neutrals.length ||
      metadata.curses.length ||
      metadata.tools.length ? <InfoViewer /> : null}
      
    </div>
  );
};

export default Root;
