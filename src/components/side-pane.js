// import AdSpace from './partials/ad-space';
import HorizontalDivider from './partials/horizontal-divider';
import ClassFilter from './partials/side-pane-filters/class';
import EnergyCostFilter from './partials/side-pane-filters/energy-cost';
import NameFilter from './partials/side-pane-filters/name';
import PartFilter from './partials/side-pane-filters/part';
import TypeFilter from './partials/side-pane-filters/type';
import SidePaneHeader from './partials/side-pane-header';

const SidePane = () => {
  return (
    <div className="side-pane">
      <SidePaneHeader />
      <HorizontalDivider />

      <ClassFilter />
      <div className="filter-dividers">
        <HorizontalDivider />
      </div>

      <PartFilter />
      <div className="filter-dividers">
        <HorizontalDivider />
      </div>

      <TypeFilter />
      <div className="filter-dividers">
        <HorizontalDivider />
      </div>

      <EnergyCostFilter />
      <div className="filter-dividers">
        <HorizontalDivider />
      </div>

      <NameFilter />

      {/* <AdSpace /> */}
    </div>
  );
};

export default SidePane;
