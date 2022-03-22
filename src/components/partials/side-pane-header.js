const SidePaneHeader = () => {
  return (
    <div className="filter-head">
      <div className="row">
        <div className="col s3 filter-head-items">
          <div className="filter-head-text">Filter</div>
        </div>
        <div className="col s6 filter-head-items reset-container">
          <div className="filter-reset-text">Reset</div>
        </div>
        <div className="col s3 filter-head-items">
          <div className="filter-favourites">
            <i class="fa-solid fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePaneHeader;