const TypeFilter = () => {
  return (
    <div className="type-filter">
      <div className="filter-type-text">Type</div>
      <div className="select-type-container">
        <select className="input-select">
          <option value="all">All</option>
          <option value="attack">Attack</option>
          <option value="defense">Defense</option>
          <option value="heal">Heal</option>
          <option value="secret">Secret</option>
          <option value="skill">Skill</option>
        </select>
      </div>
    </div>
  );
};

export default TypeFilter;