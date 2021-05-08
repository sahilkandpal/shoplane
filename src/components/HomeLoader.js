const HomeLoader = () => {
  return (
    <div className="home-loading-skeleton">
      <div className="toprow-card-container">
        <div className="toprow-card skeleton-loader"></div>
        <div className="toprow-card skeleton-loader"></div>
        <div className="toprow-card skeleton-loader"></div>
        <div className="toprow-card skeleton-loader"></div>
      </div>
      <div className="homerow-img-container">
        <div
          className="homerow-img skeleton-loader"
          style={{ height: "360px" }}
        ></div>
        <div
          className="homerow-img skeleton-loader"
          style={{ height: "120px" }}
        ></div>
      </div>
    </div>
  );
};

export default HomeLoader;
