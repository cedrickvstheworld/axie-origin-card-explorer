const EnergyCostFilter = () => {
  return (
    <div className="energy-cost-filter">
      <div className="filter-energy-cost-text">Energy Cost</div>
      <div className="select-energy-cost-container">
        <select className="input-select">
          <option value="all">-</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
    </div>
  );
};

export default EnergyCostFilter;