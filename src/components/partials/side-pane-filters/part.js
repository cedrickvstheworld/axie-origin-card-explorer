const PartFilter = () => {
  return (
    <div className="part-filter">
      <div className="filter-part-text">Part</div>
      <div className="select-part-container">
        <select className="input-select">
          <option value="all">All</option>
          <option value="horn">Horn</option>
          <option value="mouth">Mouth</option>
          <option value="back">Back</option>
          <option value="tail">Tail</option>
        </select>
      </div>
    </div>
  );
};

export default PartFilter;