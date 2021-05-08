import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { ripple } from "../utils/ripple";
const Drawer = ({ name }) => {
  const history = useHistory();
  const { search } = useLocation();
  const [showDrawer, setShowDrawer] = useState(false);

  const setDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const bringDrawer = () => {
    var drawer = document.getElementsByClassName("bottom_drawer");
    var drawerContainer = document.getElementsByClassName("drawer");
    drawer[0].classList.remove("drawer-hide");
    drawerContainer[0].classList.add("show");
    document.body.classList.add("no-scroll-background");
  };

  useEffect(() => {
    ripple();
    setDrawer();
    bringDrawer();
  }, []);

  const showScroll = () => {
    document.body.classList.remove("no-scroll-background");
  };

  return (
    <div className="drawer">
      <a
        onClick={() => {
          setDrawer();
          showScroll();
          history.goBack();
        }}
      >
        <div className="drawer-overlay"></div>
      </a>
      <div className="bottom_drawer drawer-hide">
        <ul>
          <li>SORT BY</li>

          <li className="drawer-item">
            <a
              onClick={() => {
                setDrawer();
                showScroll();
                search != "" ? history.replace(`/${name}`) : history.goBack();
              }}
            >
              <div className="ripple fixed-inner" id="ripple-container">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="SortModalIcon"
                >
                  <defs>
                    <path id="a" d="M0 0h12.5v16H0z"></path>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z" opacity="0.05"></path>
                    <g transform="translate(6 4)">
                      <mask id="b" fill="#fff">
                        <use xlinkHref="#a"></use>
                      </mask>
                      <path
                        fill="#282C3F"
                        d="M11.425 10.52c-.096.743-.417 1.506-.93 2.208-.426.58-.978 1.11-1.517 1.452a6.01 6.01 0 01-.162.099c.047-.114.088-.233.124-.356.227-.775.199-1.534-.088-2.39-.255-.764-.714-1.607-1.49-2.734l-.55-.8-.361.906c-.004.01-.437 1.018-1.922 1.9-.93.552-1.22 1.28-1.302 1.795-.091.582.035 1.149.245 1.617a5.157 5.157 0 01-.453-.286 4.522 4.522 0 01-1.385-1.546c-.391-.725-.59-1.583-.59-2.551 0-1.216.312-2.231.926-3.018.12-.154.24-.284.354-.392.05.19.113.399.193.61.407 1.079 1.05 1.734 1.859 1.896a.563.563 0 00.538-.181c.196-.224.166-.487.124-.852-.058-.513-.156-1.37.16-2.441.321-1.09.998-2.132 2.017-3.106.041.157.094.329.162.517.46 1.265 1.38 2.655 2.74 4.129 1.026 1.113 1.466 2.298 1.308 3.524m-3.486 3.102c-.141.484-.395.84-.755 1.057-.35.211-.732.259-.99.259-.207 0-.378-.033-.469-.06-.537-.163-.767-.341-.982-.589-.295-.339-.573-.96-.484-1.523.066-.418.334-.77.797-1.045.94-.559 1.536-1.174 1.893-1.645.45.711.746 1.294.915 1.8.216.646.24 1.185.075 1.746m4.306-5.128c-.26-.774-.72-1.522-1.367-2.225-.836-.907-1.946-2.278-2.478-3.654C8.107 1.856 8.383 0 8.383 0l-1.1.89C5.69 2.176 4.652 3.61 4.197 5.15a6.555 6.555 0 00-.248 2.331 2.88 2.88 0 01-.45-.809 5.573 5.573 0 01-.304-1.22l-.078-.742-.664.318c-.066.032-.662.332-1.258 1.073-.35.435-.628.935-.827 1.486A6.605 6.605 0 000 9.833c0 2.688 1.317 4.184 2.422 4.967a6.81 6.81 0 001.957.943A5.841 5.841 0 005.97 16a10.157 10.157 0 00.224 0 3.2 3.2 0 00.237-.008c1.258-.05 2.156-.318 3.098-.915a6.859 6.859 0 001.803-1.715c.62-.847 1.01-1.782 1.129-2.704a4.811 4.811 0 00-.215-2.164"
                        mask="url(#b)"
                      ></path>
                    </g>
                  </g>
                </svg>
                <p>Popularity</p>
              </div>
            </a>
          </li>

          <li className="drawer-item">
            <a
              onClick={() => {
                setDrawer();
                showScroll();
                search == "?sortBy=price&order=desc"
                  ? history.goBack()
                  : history.replace(`/${name}?sortBy=price&order=desc`);
              }}
            >
              <div className="ripple fixed-inner" id="ripple-container">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="SortModalIcon"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z" opacity="0.05"></path>
                    <path
                      d="M4 6.215h4.962v2.43H4.505L4.13 9.858h4.764a3.05 3.05 0 01-.827 1.539 2.99 2.99 0 01-2.022.895l-1.361-.003a.304.304 0 00-.214.519l6.717 6.779 1.697-.004-6.107-6.16a4.193 4.193 0 002.14-1.167 4.256 4.256 0 001.198-2.398h2.474l.376-1.215h-2.799v-2.43h3.496V5H4v1.215zm12.389 10.028h1.337l-1.337 1.354v-1.354zm-.818 3.309c.23.09.488.04.663-.127l3.312-3.326a.567.567 0 000-.828.627.627 0 00-.574-.152H16.39v-5.043a.571.571 0 00-.58-.585.587.587 0 00-.587.597v8.935c0 .237.12.439.35.529z"
                      fill="#282C3F"
                    ></path>
                  </g>
                </svg>
                <p>Price: High to Low</p>
              </div>
            </a>
          </li>
          <li className="drawer-item">
            <a
              to={`/${name}?sortBy=price&order=asc`}
              onClick={() => {
                setDrawer();
                showScroll();
                search == "?sortBy=price&order=asc"
                  ? history.goBack()
                  : history.replace(`/${name}?sortBy=price&order=asc`);
              }}
            >
              <div className="ripple fixed-inner" id="ripple-container">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="SortModalIcon"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z" opacity="0.05"></path>
                    <path
                      d="M4 6.136h4.637v2.272H4.472l-.351 1.135h4.45a2.855 2.855 0 01-.772 1.44c-.51.514-1.177.81-1.888.836H5.91l-1.272-.002c-.25-.001-.377.305-.2.484l6.276 6.338 1.586-.002-5.706-5.76a3.92 3.92 0 002-1.092 3.984 3.984 0 001.119-2.242h2.311l.352-1.135H9.76V6.136h3.267V5H4v1.136zm12.626.733l1.249 1.265h-1.25V6.869zm-1.09-1.333v8.35c0 .3.232.557.548.557a.534.534 0 00.542-.547V9.184h2.414a.586.586 0 00.537-.143.53.53 0 00-.001-.773L16.48 5.161a.585.585 0 00-.62-.12.508.508 0 00-.326.495z"
                      fill="#282C3F"
                    ></path>
                  </g>
                </svg>
                <p>Price: Low to High</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
