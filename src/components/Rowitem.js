import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Rowitem = ({ ratio, url }) => {
  const [loaded, setLoaded] = useState(false);

  const isMobile = window.innerWidth <= 600;

  const lazycolors = [
    "rgb(229, 241, 255)",
    "rgb(255, 237, 243)",
    "rgb(244, 255, 249)",
    "rgb(255, 242, 223)",
  ];

  const history = useHistory();

  return (
    <div className="ripple" id="ripple-container" onClick={()=>{setTimeout(()=>history.push("/shirts"), 500)}}>
      <div
        className="col"
        style={{
          paddingBottom: `${(1 / eval(ratio.replace("*", "/"))) * 100}%`,
          background: isMobile
            ? lazycolors[Math.floor(Math.random() * lazycolors.length)]
            : null,
        }}
      >
        <img
          src={url}
          alt=""
          className={
            isMobile ? "preloaded " + (loaded ? "loaded" : null) : null
          }
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
};

export default Rowitem;
