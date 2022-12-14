import { useState } from "react";
import { useHistory } from "react-router-dom";

const Mobilebanner = () => {
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
      <a>
        <div
          className="mobile-banner"
          style={{
            background: isMobile
              ? lazycolors[Math.floor(Math.random() * lazycolors.length)]
              : null,
          }}
        >
          <img
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/4/21/36d6adc7-715f-42aa-a9b5-e91f7e4133981618995775107-MSB01.jpg"
            alt=""
            className={
              isMobile ? "preloaded " + (loaded ? "loaded" : null) : null
            }
            onLoad={() => setLoaded(true)}
          />
        </div>
      </a>
    </div>
  );
};

export default Mobilebanner;
