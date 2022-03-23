import SidePane from './side-pane';
import ViewPane from './view-pane';

const Root = () => {
  return (
    <div className="root">
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