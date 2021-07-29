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
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/28/3e476804-34fa-464a-89df-82c2aec48ccc1627479884359-Desktop-banner.jpg",
    },
    {
      id: 2,
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/28/25ac592f-bca9-4a17-82b3-ee9c11f565fc1627479884337-Kurtas-Sets_Desk.jpg",
    },
    {
      id: 3,
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/28/7cb521c5-e6fb-47cb-a21b-b42207826a1c1627479884316-DK_Womens-Western-wear-fest.jpg",
    },
    {
      id: 4,
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/28/efb2ed1c-02bb-4639-9e3c-37ef1ad5c1cc1627481545817-maxessorise-prebuzzdk-.jpg",
    },
    {
      id: 5,
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/25/51408c57-fb44-40f8-ae7b-9dc202b81b5b1621943902519-DK_WomensInnerwear.jpg",
    },
    {
      id: 6,
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/25/b186c498-dda6-4706-bb53-bb052282eb9e1621944047571-DK_WardrobeEssentials.jpg",
    },

    {
      id: 7,
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/25/bdc7677a-5570-42b5-9fbd-dfd4f7921aaa1621944361743-Sangria_Desk_Banner.jpg",
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
