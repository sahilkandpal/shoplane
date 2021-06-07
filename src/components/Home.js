import React, { useEffect } from "react";
import Rowitem from "./Rowitem";
import Toprow from "./Toprow";
import Banner from "./Banner";
import Mobilebanner from "./Mobilebanner";
import { ripple } from "../utils/ripple";
import { HomePageData } from "../utils/HomePageData";

const Home = () => {
  useEffect(() => {
    ripple();
  }, []);

  const isMobile = window.innerWidth <= 600;

  return (
    <div className="react-wrapper">
      {!isMobile ? (
        <Banner />
      ) : (
        <>
          <Toprow />
          <Mobilebanner />
        </>
      )}

      {HomePageData.map((rowdata, index) => {
        return (
          <React.Fragment key={index}>
            {rowdata.title ? (
              <h1 className="heading">{rowdata.title}</h1>
            ) : null}

            <div className="row homerow">
              <div className="flex_row">
                {rowdata.images.map((url, index) => (
                  <Rowitem url={url} ratio={rowdata.ratio} key={index} />
                ))}
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Home;
