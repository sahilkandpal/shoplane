import { useEffect, useState } from "react";
import Rowitem from "./Rowitem";
import Toprow from "./Toprow";
import Banner from "./Banner";
import Mobilebanner from "./Mobilebanner";
import { ripple } from "../utils/ripple";

const Home = () => {
  useEffect(() => {
    ripple();
  }, []);

  let windowWidth = window.innerWidth;

  const HomePageData = [
    {
      id: 1,
      title: "deals of the day",
      images: [
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/23/29732ced-fd0e-4202-98f6-e9995e2541861616513941275-Under899.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/23/4a64f62e-3645-4544-979c-5208aeb28faa1616513941214-B1G1.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/23/1f80e48d-f163-4327-bc9a-994f8ba224b01616513941243-Min.60.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/23/dfccb63a-6556-4878-80fb-165ee3aa72241616513941260-Min.60_2.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/23/884d9ade-d078-4b68-9340-fc473a80eb851616513941228-GWP.jpg",
      ],
      ratio: "392*589",
    },

    {
      id: 2,
      title: "big deals on top brands",
      images: [
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/6e0a9fa0-9e8d-4c29-9250-995c9f1ba9331605363273176-Home---U.S.-Polo-Assn..jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/0524cbd5-f034-4155-9e3b-336c4e530ee41605363272658-Home---Levis.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg",
      ],
      ratio: "326*550",
    },

    {
      id: 3,
      title: null,
      images: [
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/d5c17859-f366-4a65-ab42-5a066254feaa1605363272474-Home---GAP.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/5544cd64-d95b-461d-802a-8025fdfeb3331605363272844-Home---Nike.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg",
      ],
      ratio: "326*550",
    },

    {
      id: 4,
      title: "categories",
      images: [
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg",
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg",
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg",
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg",
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg",
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg",
      ],
      ratio: "326*392",
    },

    {
      id: 5,
      title: null,
      images: [
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg",
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg",
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg",
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg",
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a352f908-57c8-4c66-b052-18137cf15e6c1594222967074-Handbags.jpg",
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/18eb31db-8dcb-4efa-b92d-61c8ebe0ee811594222834368-Shorts.jpg",
      ],
      ratio: "326*392",
    },

    {
      id: 6,
      title: "explore top brands",
      images: [
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/c9f66558-feab-4d76-aa3c-adc68d81dce21598348260415-Levis.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/085719b1-c71e-4f47-950c-9a6b7f291fac1598348260370-Jack-_-Jones.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/774f42c4-f459-4514-9b90-cf8a60a5f68c1596644478087-hrx30.jpg",
      ],
      ratio: "326*500",
    },

    {
      id: 7,
      title: null,
      images: [
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f6e40444-b1a4-4c91-bb3c-fe213356e7de1598348260541-Only.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/a6de806a-b58b-460b-97fd-d78d80eab39b1596641021693-Women-s-Ethnic-Wear_Anouk.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/8d13b55d-a6a0-40ae-b39f-16f43e7911681598348260460-MAC.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/046ab589-87d5-4afa-8ab3-10e06fdbe6a61598348260596-W.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f2fdda02-423c-4f11-8f1b-618ba807e5841598348260323-H_M.jpg",
      ],
      ratio: "326*500",
    },

    {
      id: 8,
      title: "trending in western wear",
      images: [
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/655751e9-66c3-49b5-acfc-a508068e6e581595936000398-Content-westernwear-Trends-Vibrantcolourblocks.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/5b3b3f9a-d893-4f15-9e1c-c7667bca41091597912691188-Content-westerncasual-trend-superhero.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d53a46d7-e8f8-4f7e-9e1a-6cb997d1a1e51597840566613-Content-westerncasual-brand-modarapidoskinnyjeans.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b85eb6be-0223-4cca-bc81-56ca3089daf11597841355970-Content-westernwear-Essentials-Women-s-Trousers--copy--.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/5b3b3f9a-d893-4f15-9e1c-c7667bca41091597912691188-Content-westerncasual-trend-superhero.jpg",
      ],
      ratio: "392*514",
    },

    {
      id: 9,
      title: null,
      images: [
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f7585d6d-78ee-42bd-baf2-07eefada7fb31597840566666-Content-westerncasual-color-moss.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d7f59b96-8e15-470e-a47b-5d5005e4273f1597840566776-Content-westerncasual-mostselling-modblocking.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8116410f-af2c-4980-95ef-04a4162092491597840566722-Content-westerncasual-color-preppyred.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/580b804c-c529-421c-b0be-b311cab6e10b1598030134933-Content-mostselling-casualwear-Normalisboring.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/a6d9d467-d37e-4428-b2dd-a9f45756c1fc1595936000278-Content-westernwear-lifestyle-Ecovero.jpg",
      ],
      ratio: "392*514",
    },
  ];

  return (
    <div className="react-wrapper">
      {windowWidth > 600 ? (
        <Banner />
      ) : (
        <>
          <Toprow />
          <Mobilebanner />
        </>
      )}

      {HomePageData.map((rowdata) => {
        return (
          <>
            {rowdata.title ? (
              <h1 className="heading">{rowdata.title}</h1>
            ) : null}

            <div className="row homerow">
              <div className="flex_row">
                {rowdata.images.map((url) => (
                  <Rowitem url={url} ratio={rowdata.ratio} />
                ))}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;
