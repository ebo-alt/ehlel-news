import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArticleCard from "../components/ArticleCard";
import ArticleImageCard from "../components/ArticleImageCard";
import Header from "../components/Header";
import FaceBookIcon from "../components/icons/FacebookIcon";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BannerCard from "../components/BannerCard";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const img =
  "https://s3-alpha-sig.figma.com/img/8bab/c6de/10e133c6518d8edcb5ca2d5585b71204?Expires=1684713600&Signature=Yv~n36DPo1ck0DWEPPa5~BpH0dzWPkqXkb5oXo982kZfE6v7XVCiKhC1GQ1gH~28JXv0Y77RgFzoVsXpKlC5IXcTpJDH0uQ3bSMur9G9Pf6aySIVJxQrBajFAUMdTJecu177Ff2CzaTHlPzT7A8iTcFaTDcXAkEJ5df0mm28RM0BZP1OmW2WrM70ddGrpyucCcDC1U-euGRPEVb2S8lOaaf6hgyOWmJvCwicsyh3BQiA2H2LhFgiIahM~aOW8q0fQ9cEGtLq7r~UrXVls8GGC1lv-lIrA1iENXbeJLw2-62Olc1~GNDz8Z3TndLpp3mqIIMlRyXxFHYu0XNFx~13mw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const bgImgPath =
  "https://s3-alpha-sig.figma.com/img/8bab/c6de/10e133c6518d8edcb5ca2d5585b71204?Expires=1684713600&Signature=Yv~n36DPo1ck0DWEPPa5~BpH0dzWPkqXkb5oXo982kZfE6v7XVCiKhC1GQ1gH~28JXv0Y77RgFzoVsXpKlC5IXcTpJDH0uQ3bSMur9G9Pf6aySIVJxQrBajFAUMdTJecu177Ff2CzaTHlPzT7A8iTcFaTDcXAkEJ5df0mm28RM0BZP1OmW2WrM70ddGrpyucCcDC1U-euGRPEVb2S8lOaaf6hgyOWmJvCwicsyh3BQiA2H2LhFgiIahM~aOW8q0fQ9cEGtLq7r~UrXVls8GGC1lv-lIrA1iENXbeJLw2-62Olc1~GNDz8Z3TndLpp3mqIIMlRyXxFHYu0XNFx~13mw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const articleImg =
  "https://s3-alpha-sig.figma.com/img/8bab/c6de/10e133c6518d8edcb5ca2d5585b71204?Expires=1684713600&Signature=Yv~n36DPo1ck0DWEPPa5~BpH0dzWPkqXkb5oXo982kZfE6v7XVCiKhC1GQ1gH~28JXv0Y77RgFzoVsXpKlC5IXcTpJDH0uQ3bSMur9G9Pf6aySIVJxQrBajFAUMdTJecu177Ff2CzaTHlPzT7A8iTcFaTDcXAkEJ5df0mm28RM0BZP1OmW2WrM70ddGrpyucCcDC1U-euGRPEVb2S8lOaaf6hgyOWmJvCwicsyh3BQiA2H2LhFgiIahM~aOW8q0fQ9cEGtLq7r~UrXVls8GGC1lv-lIrA1iENXbeJLw2-62Olc1~GNDz8Z3TndLpp3mqIIMlRyXxFHYu0XNFx~13mw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const img1 =
  "https://s3-alpha-sig.figma.com/img/b167/5f9d/be3053a3a8fa74031a90c192bb2f14f0?Expires=1684108800&Signature=BQNSpOnIQp-7HnPPGsj43ZFX4YjW-9086HcttOABPLF2WbFPnAwSQDYZNpw7B8xlIQ1j~g1yeAnWwQwBhbAw81aJg4HnwKw4hRs0ESTAsEiiYv58wh~X~ztd-9NLlbuAiRcbXiAkZQ-WdUOyzgVVDDCcLeKd--SFzWk-hVk~8BVo0JAMSL-U0~3RgnwQ2hhKI4WsnwenNz1MllvcbBlTlqUdXhUG9X0NheTJNXSYd5iOjaSkuhd-pa6VHw-CfMClhJD4XwcQr1O2zfVBS39CvLDlWPb~ixBksjzXbGeweiR6zO-K922N4fm1MWAamQ-sL1F4rBfSsGahouem3WLl2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const img2 =
  "https://s3-alpha-sig.figma.com/img/e72e/1390/e20e73a878ee780cd4195b966ccc08df?Expires=1684108800&Signature=dzsyV8SWOHsXL0CQDZHGZJ3RxO~pcVNEf5i8zVU3XzeNbFZOa~lF31w36R5uHaijRBBzvR8hdEhlmP~qy5sCLnY3H1PzJh0cwf22QJXA6nc0hYezqJMKJFqzWKYNEslFevGgHPkl1SgqbuMZ6XIvYE6JE7eJ3Win~aX-959Jr4gv0QQGzUPjzU8dVeoDsEbJLmxUKsxr8Zf6unkEHyoon5oZuciGX5UN4NHtx6RVzwH2dLqtgtJl3ICM6IHyQDNiM81vRAgzityH7XFyjMzZ1Z3T0nGMyw5DEAUTvOTOKZlvnTEIPqiCBcEcRCUn9XsOBDe9aPMf8~h645zPPtoTvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const img3 =
  "https://s3-alpha-sig.figma.com/img/ecc2/e4f0/12e39c6467bf807eb54727401871cc38?Expires=1684108800&Signature=fI1mpdLHbZpjBW-kwCZdoL6qjTdITq4v6-HdGvU01naUbPtBRHixrnVRkFCOSydIi9iuhmCEOxzrkfoLGSR1ztEKmaescsSvOreSGIsjCc5ZI24s~9KqCbFaAHif4d39rriU4iYl0qk6vpqDGuXOlctB6cqd~gckZpiDgyKfCicOimXp0xbZo-9ZV2zxAKAlukPQ8KtTWxwyu0vtnxjfmTUbKThzjGMP-u-H7gpsv~a0EeUW-tDfBsUF9PELDxxTUVrbJH15lnkehyiv-NJMJCiU-UGoF8-zwUVmb36p~ilqgl1uIrVdnR6I1aazfde2mBWCGHSYMBLRrkjqVIGtew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
function Home() {
  const [newArticles, setNewArticles] = useState([]);
  const [newBanners, setNewBanners] = useState([]);

  // article fetch
  function fetchNewArticles() {
    axios.get(`${BACKEND_URL}/posts`).then((res) => setNewArticles(res.data));
  }

  function fetchNewBanners() {
    axios.get(`${BACKEND_URL}/banners`).then((res) => setNewBanners(res.data));
  }

  useEffect(() => {
    fetchNewArticles();
    fetchNewBanners();
  }, []);

  return (
    <section className="">
      <section className="absolute z-10 w-full">
        <Header />
      </section>
      <section className="relative">
        <Swiper slidesPerView={1}>
          {newBanners.map((banner) => (
            <SwiperSlide>
              <BannerCard
                image={banner.image}
                title={banner.title}
                description={banner.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="mx-10 mt-10">
        <h1 className="text-2xl">Шинэ мэдээ</h1>
        <section>
          <section className="mt-2">
            <ul className="flex gap-5">
              <button>All</button>
              <button>Adventure</button>
              <button>Travel</button>
              <button>Fashion</button>
              <button>Technology</button>
              <button>Branding</button>
            </ul>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {newArticles.map((article) => (
              <ArticleCard
                href={`/articles/${article._id}`}
                tag={article?.tag}
                title={article?.title}
                image={article?.image || articleImg}
                description={article?.description}
              />
            ))}
          </section>
        </section>
      </section>
      <section className="screen-60 mt-20 relative">
        <img src={img} className="h-[800px] w-full" />
        <section
          className="absolute top-[0%] w-full h-full flex flex-col justify-center items-center"
          style={{ backgroundColor: "rgba(0,0,0, 0.4)" }}
        >
          <section className="mt-4">
            <div
              className="w-[80px] h-8 rounded-lg font-semibold font-sans text-center p-1 text-white"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
            >
              FASHION
            </div>
          </section>
          <div className="text-3xl font-serif font-bold mt-6 text-white text-center">
            Richird Norton photorealistic
            <br /> rendering as real photos
          </div>
          <div className="text-xs font-normal mt-4 text-white text-center">
            Progressively incentivize cooperative systems through technically
            sound
            <br /> functionalities. The credibly productivate seamless data.
          </div>
          <div className="h-[2px] w-10 bg-white ml-auto mr-auto mt-4"></div>
          <h1 class="text-white font-normal text-xs mt-4"> 08.08.2021</h1>
        </section>
      </section>
      <section className="mx-10 mt-10">
        <h1 className="text-3xl text-[#495057] font-bold font-serif">
          Editor’s Pick
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <ArticleImageCard image={img1} />
          <ArticleImageCard image={img2} />
          <ArticleImageCard image={img3} />
        </section>
      </section>
      <section className="mt-10 footer w-full bg-[#212529] px-10 py-14 grid grid-cols-4 gap-4">
        <section>
          <ul className="text-white">
            <li className="font-bold text-xl font-serif">
              Contact the Publisher
            </li>
            <li className="mt-4 text-sm font-light">mike@runo.com</li>
            <li className="mt-4 text-sm font-light">+944 450 904 505</li>
          </ul>
        </section>
        <section>
          <ul className="text-white">
            <li className="font-bold text-xl font-serif">Explorate</li>
            <li className="mt-4 text-sm font-light">About</li>
            <li className="mt-4 text-sm font-light">Partners</li>
            <li className="mt-4 text-sm font-light">Job Opportunities</li>
          </ul>
        </section>
        <section>
          <ul className="text-white">
            <li className="font-bold text-xl font-serif">Headquarter</li>
            <li className="mt-4 text-sm font-light">
              191 Middleville Road, NY 1001, Sydney Australia
            </li>
          </ul>
        </section>
        <section>
          <ul className="text-white">
            <li className="font-bold text-xl font-serif">Connections</li>
            <li className="mt-4">
              <Icons />
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
}

export default Home;
