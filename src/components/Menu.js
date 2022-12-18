import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [pwaPrompt, setPwaPrompt] = useState(null);

  useEffect(() => {
    var layer = document.getElementById("layer");
    var menuitem = document.getElementsByClassName("top-nav-item");
    var check = document.getElementById("check");
    var show = document.getElementById("show");
    layer.addEventListener("click", () => {
      document.body.classList.remove("no-scroll-background");
      check.classList.remove("animate");
      show.classList.remove("show");
    });
    for (var i = 0; i < menuitem.length; i++) {
      menuitem[i].addEventListener("click", () => {
        document.body.classList.remove("no-scroll-background");
        check.classList.remove("animate");
        show.classList.remove("show");
      });
    }
  }, []);

  useEffect(()=>{
    grantNotificationPerm();
    const cb = (t)=>{
      t.preventDefault();
      setPwaPrompt(t);
    }
    window.addEventListener("beforeinstallprompt", cb);

    ()=>{
      return window.removeEventListener("beforeinstallprompt", cb);
    }

}, []);

const grantNotificationPerm= () =>{
  if (Notification.permission !== 'denied') {
    Notification.requestPermission();
  }
}

  

  const installPwa = () =>{
    console.log("click pwas");
    if(pwaPrompt){
      pwaPrompt.prompt();
    pwaPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
        if (Notification.permission === "granted") {
          new Notification("Thanks for installing PWA !");
        }  
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    });  
    }
  }

  return (
    <div className="menu__container" id="show">
      <div className="menu__container__overlay" id="layer"></div>
      <div className="menu" id="check">
        <div className="menu__banner">
          <img
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/4/11/74365ff7-a4bb-48d8-8240-661d42c511081618126440591-Banner_Hamburger_400--1-.png"
            alt=""
          />
        </div>
        <div className="nav top-nav">
          <ul>
            <div className="ripple top-nav-item" id="ripple-container">
              <Link to="/shirts">
                <li>Shirts</li>
              </Link>
            </div>
            <div className="ripple top-nav-item" id="ripple-container">
              <Link to="/t-shirt">
                <li>T-shirts</li>
              </Link>
            </div>
            <div className="ripple top-nav-item" id="ripple-container">
              <Link to="/dresses">
                <li>Dresses</li>
              </Link>
            </div>
            <div className="ripple top-nav-item" id="ripple-container">
              <Link to="/watches">
                <li>Watches</li>
              </Link>
            </div>
            <div className="ripple top-nav-item" id="ripple-container">
              <a>
                <li>Offers</li>
              </a>
            </div>
            <div className="ripple top-nav-item" id="ripple-container">
              <a className="pwa" id="pwaBtn" onClick={installPwa}>
                <li>Install PWA</li>
                <img src="/downloadPwa.png" width="20" alt="downlaod pwa" />
              </a>
            </div>
          </ul>
        </div>
        <div className="nav bottom-nav">
          <ul>
            <li>Shoplane Studio</li>
            <li>Shoplane Insider</li>
            <li>Gift Cards</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className="menu__banner">
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/4/11/74365ff7-a4bb-48d8-8240-661d42c511081618126440591-Banner_Hamburger_400--1-.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
