import HorizontalDivider from './partials/horizontal-divider';
import ClassFilter from './partials/side-pane-filters/class';
import EnergyCostFilter from './partials/side-pane-filters/energy-cost';
import PartFilter from './partials/side-pane-filters/part';
import TypeFilter from './partials/side-pane-filters/type';
import SidePaneHeader from './partials/side-pane-header';

const SidePane = () => {
  return (
    <div className="side-pane">
      <SidePaneHeader />
      <HorizontalDivider />

      <ClassFilter />
      <HorizontalDivider />

      <PartFilter />
      <HorizontalDivider />

      <TypeFilter />
      <HorizontalDivider />

      <EnergyCostFilter />
    </div>
  );
};

export default SidePane;
