import { useParams } from "react-router-dom";
const Errorpage = () => {
  const { name } = useParams();
  return (
    <div class="error">
      {window.innerWidth >= 600 ? (
        <>
          <p className="search_title">
            You searched for <span>{name}</span>
          </p>
          <img
            className="error_img--desk"
            src="https://constant.myntassets.com/web/assets/img/11488523304066-search404.png"
          ></img>
          <p className="error_big">We couldn't find any matches!</p>
          <p className="error_small">
            Please check the spelling or try searching something else
          </p>
        </>
      ) : (
        <>
          <div className="error_title">
            We couldn't find the page you were looking for
          </div>
          <img
            className="error_img--mobile"
            src="https://constant.myntassets.com/pwa/assets/img/NotFound.png"
          ></img>
        </>
      )}
    </div>
  );
};

export default Errorpage;
