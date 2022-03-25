const SmallScreenFilter = () => {
  const showSmallScreenFilter = () => {
    document.getElementById('small-screen-filter-modal').style.display = 'block';
  };
  
  return (
    <div className="small-screen-filter">
      <div className="small-screen-filter-content-group">
        <button onClick={showSmallScreenFilter} className="small-screen-filter-button">
          Filter
        </button>
      </div>
    </div>
  );
};

export default SmallScreenFilter;
