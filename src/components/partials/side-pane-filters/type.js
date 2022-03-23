const TypeFilter = () => {
  return (
    <div className="type-filter">
      <div className="filter-type-text">Type</div>
      <div className="select-type-container">
        <select className="input-select">
          <option value="all">All</option>
          <option value="attack">Attack</option>
          <option value="secret">Secret</option>
          <option value="skill">Skill</option>
          <option value="banish">Banish</option>
          <option value="retain">Retain</option>
          <option value="power">Power</option>
          <option value="innate">Innate</option>
        </select>
      </div>
    </div>
  );
};

export default TypeFilter;
