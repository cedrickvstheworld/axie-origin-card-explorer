import SidePane from './side-pane';

const Root = () => {
  return (
    <div className="root">
      <div className="side-pane-container">
        <SidePane />
      </div>
      <div className="view-pane-container">
      </div>
    </div>
  );
};

export default Root;