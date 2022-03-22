const ClassFilter = () => {
  return (
    <div className="class-filter">
      <div className="filter-class-text">Class</div>

      <div className="class-button-group">
        {/* row 1 */}
        <div className="class-button-group-item">
          <button class="class-filter-button">
            <i className="fa-solid fa-paw beast-color"></i>
            &nbsp;Beast
          </button>
          <button class="class-filter-button">
            <i className="fa-solid fa-fish aqua-color"></i>
            &nbsp;Aquatic
          </button>
          <button class="class-filter-button">
            <i className="fa-solid fa-seedling plant-color"></i>
            &nbsp;Plant
          </button>
        </div>

        {/* row 2 */}
        <div className="class-button-group-item">
          <button class="class-filter-button">
            <i className="fa-solid fa-bug bug-color"></i>
            &nbsp;Bug
          </button>
          <button class="class-filter-button">
            <i className="fa-solid fa-feather-pointed bird-color"></i>
            &nbsp;Bird
          </button>
          <button class="class-filter-button">
            <i className="fa-solid fa-worm reptile-color"></i>
            &nbsp;Reptile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassFilter;