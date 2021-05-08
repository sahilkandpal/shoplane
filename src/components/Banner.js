import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const BannerData = [
    {
      id: 1,
      url:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/28/a70471ea-3613-4eb9-afd2-5c78e25a84a31619610673464-desktop-men.jpg",
    },
    {
      id: 2,
      url:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/28/4a595978-ca51-4987-bf0b-9c39f6bb37281619610673447-desktop-woman.jpg",
    },
    {
      id: 3,
      url:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/28/5021c881-572a-442d-94ce-fed701fde4e71619612762212-Men-s-Wear-_Desk.jpg",
    },
    {
      id: 4,
      url:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/28/336306b6-3029-4180-aa00-468a5804c9f51619612331342-dekstop-offer-2.jpg",
    },
    {
      id: 5,
      url:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/28/b4feeba0-d046-483b-ab95-85335a6336881619612383419-Ethnic_Desktop_Banner.jpg",
    },
    {
      id: 6,
      url:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/28/8d209bd0-608b-44c6-ad1b-0f1c6397cbe01619612455058-Occasion_wear_Desk.jpg",
    },
  ];

  return (
    <div className="banner">
      <Slider {...settings}>
        {BannerData.map((item) => (
          <img alt="" src={item.url} key={item.id}></img>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
