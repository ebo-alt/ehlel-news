import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArticleCard from "../components/ArticleCard";
import ArticleImageCard from "../components/ArticleImageCard";
import Header from "../components/Header";
import FaceBookicon from "../components/icons/Facebookicon";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BannerCard from "../components/BannerCard";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const img =
  "https://s3-alpha-sig.figma.com/img/5d69/f102/269aaa05cf523ad8940f7bdd4dc9f59e?Expires=1684713600&Signature=aZwsSDSR4NmCwi6Jj-wc1C9wrycr6GqjZyjKJJpH-nJiuZt5Bukz88V-G4jiDUVofSN~u3LOND6GbbQoT-A0tqLOaMzrvmdKL7ckghpZQH~K~EVEOBFYetP4Yy1CdqlKL9b6JtrjuOb8XMw0nBuoJG-bDd3ztxZeCIIHf4va-qVKvk2J57JkFatQ9Q6tczTWYbqYCwbpoERJF79HP62Gf~Ug2MnCcx87m8CRM6-F7C7BWv9vPrMoC6v7YBJGPJsbkN67Yz95E2KRrmvt8axqvk24TvWRtsm8K4aeHhCttiR~BrmZ2xxEd4rJp6SjcQScL22bZXH2FkmRozRq8Ai6OQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const bgImgPath =
  "https://s3-alpha-sig.figma.com/img/8bab/c6de/10e133c6518d8edcb5ca2d5585b71204?Expires=1684713600&Signature=Yv~n36DPo1ck0DWEPPa5~BpH0dzWPkqXkb5oXo982kZfE6v7XVCiKhC1GQ1gH~28JXv0Y77RgFzoVsXpKlC5IXcTpJDH0uQ3bSMur9G9Pf6aySIVJxQrBajFAUMdTJecu177Ff2CzaTHlPzT7A8iTcFaTDcXAkEJ5df0mm28RM0BZP1OmW2WrM70ddGrpyucCcDC1U-euGRPEVb2S8lOaaf6hgyOWmJvCwicsyh3BQiA2H2LhFgiIahM~aOW8q0fQ9cEGtLq7r~UrXVls8GGC1lv-lIrA1iENXbeJLw2-62Olc1~GNDz8Z3TndLpp3mqIIMlRyXxFHYu0XNFx~13mw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const articleImg =
  "https://s3-alpha-sig.figma.com/img/8bab/c6de/10e133c6518d8edcb5ca2d5585b71204?Expires=1684713600&Signature=Yv~n36DPo1ck0DWEPPa5~BpH0dzWPkqXkb5oXo982kZfE6v7XVCiKhC1GQ1gH~28JXv0Y77RgFzoVsXpKlC5IXcTpJDH0uQ3bSMur9G9Pf6aySIVJxQrBajFAUMdTJecu177Ff2CzaTHlPzT7A8iTcFaTDcXAkEJ5df0mm28RM0BZP1OmW2WrM70ddGrpyucCcDC1U-euGRPEVb2S8lOaaf6hgyOWmJvCwicsyh3BQiA2H2LhFgiIahM~aOW8q0fQ9cEGtLq7r~UrXVls8GGC1lv-lIrA1iENXbeJLw2-62Olc1~GNDz8Z3TndLpp3mqIIMlRyXxFHYu0XNFx~13mw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const img1 =
  "https://s3-alpha-sig.figma.com/img/b167/5f9d/be3053a3a8fa74031a90c192bb2f14f0?Expires=1685318400&Signature=FoKvKfl5aNpBMJqxhsoh7Bgp081WH5sy~3H~j8zcohGGnCMC2jgOR1eVR5qxdB7YoTdHumZGpkFK8i0BAZtbRS-WQOtgk5fGiMAywNoHWVJfstYkbghGtw5KPVN5NCoAuRLNOkXDXZuoLUYscpSC6abwH6g3SMy~xsZZmVZu12VKlYyw1j1QYlfhAPfrXCFFrrHxMkBOF5Q7Ns59jFmTpW8ILxb-kPfLAjGo6Dg-PegxX8QUfje6Rk6Yim0Mc2Bm3-UpbJEanKTsLDogcNOfBR2goxfgdjRKQMLGL~yNV8BpE75B-kpjnRTf364RbDTZ5DCU-UpB1s3UKtGuavBmJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const img2 =
  "https://s3-alpha-sig.figma.com/img/e72e/1390/e20e73a878ee780cd4195b966ccc08df?Expires=1685318400&Signature=NaQ~PRLWi08mTitMn2zI0Zpe38cUXrGOoO1LrmzCU5miC3SB-oBzZYAJd3JZXdycPnFTZpEMWgBSVQfBfvABKj8LS5SBE7kgsJY06oF-G~7Zi-OL2WbTLdIt0T782jttwbGhdES1hg-Ew~n-Q6FDcckqe-ide-3WGr1yfV6ZabCLebq81l39LtJ6sC700Z-uv5mEi2D~7YKrs1LujnppauiO0Z7GCyIQcYsc0VzZoN3WeCGlrVIXNZ82k7X8REts3FhDfcTtLceb62XRzwwKIJVvx5S53hlsP7R7vf~t9FjZt34KekX2SEPx5WvTBVTVCgCeVzv8qpQ5o27ijmxzZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const img3 =
  "https://s3-alpha-sig.figma.com/img/ecc2/e4f0/12e39c6467bf807eb54727401871cc38?Expires=1685318400&Signature=IZ9Lgp-VtPWsJQgTtJyLyztNGwkv3dSLa1H48eJiaDN0MyEdqAoa9GHPN-sbNnjy9wzgIh1Pdb5Kd9XlHPSib~IGRzI6C4sq7MLsjhDjFxrPx4IcZy1Zwjv~vu3WC0~JRifcH2lSVe7vlVvNM6rMpEEQ2IoDk0BEaiB~sB9VPygzOGIytZYuMwntOb4nl2zKLphZ-vHuBaXBfPr1BGxTxceE~e~SFc5RXLotTK~M-sCeqVmrPVv84EegS2sf9Qx9XVWdtegUbEuoZKg2qA0apkuS~-jvaXvsvc-hBLXOSppLkf8m5aSqrKKi0~~uZdg4OpBJbJBu-WY0d5IVw385gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
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
        <img src={img} className="h-[580px] w-full" />
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
              <FaceBookicon />
            </li>
          </ul>
        </section>
      </section>
      <section className="footer w-full bg-[#343A40] px-10 py-14 flex justify-between">
        <h1 className="font-bold text-white font-sans">
          2021 | RUNO Publisher Studio
        </h1>
        <h1 className="font-light text-white font-sans">Subscribe Now</h1>
      </section>
    </section>
  );
}

export default Home;
