import Header2 from "../../components/Header2.js";
import ArticleCard from "../../components/ArticleCard";
import ArticleImageCard from "../../components/ArticleImageCard";
import FaceBookicon from "../../components/icons/Facebookicon";
import React, { useEffect, useState } from "react";
import axios from "axios";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const img1 =
  "https://s3-alpha-sig.figma.com/img/b167/5f9d/be3053a3a8fa74031a90c192bb2f14f0?Expires=1685318400&Signature=FoKvKfl5aNpBMJqxhsoh7Bgp081WH5sy~3H~j8zcohGGnCMC2jgOR1eVR5qxdB7YoTdHumZGpkFK8i0BAZtbRS-WQOtgk5fGiMAywNoHWVJfstYkbghGtw5KPVN5NCoAuRLNOkXDXZuoLUYscpSC6abwH6g3SMy~xsZZmVZu12VKlYyw1j1QYlfhAPfrXCFFrrHxMkBOF5Q7Ns59jFmTpW8ILxb-kPfLAjGo6Dg-PegxX8QUfje6Rk6Yim0Mc2Bm3-UpbJEanKTsLDogcNOfBR2goxfgdjRKQMLGL~yNV8BpE75B-kpjnRTf364RbDTZ5DCU-UpB1s3UKtGuavBmJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const img2 =
  "https://s3-alpha-sig.figma.com/img/e72e/1390/e20e73a878ee780cd4195b966ccc08df?Expires=1685318400&Signature=NaQ~PRLWi08mTitMn2zI0Zpe38cUXrGOoO1LrmzCU5miC3SB-oBzZYAJd3JZXdycPnFTZpEMWgBSVQfBfvABKj8LS5SBE7kgsJY06oF-G~7Zi-OL2WbTLdIt0T782jttwbGhdES1hg-Ew~n-Q6FDcckqe-ide-3WGr1yfV6ZabCLebq81l39LtJ6sC700Z-uv5mEi2D~7YKrs1LujnppauiO0Z7GCyIQcYsc0VzZoN3WeCGlrVIXNZ82k7X8REts3FhDfcTtLceb62XRzwwKIJVvx5S53hlsP7R7vf~t9FjZt34KekX2SEPx5WvTBVTVCgCeVzv8qpQ5o27ijmxzZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const img3 =
  "https://s3-alpha-sig.figma.com/img/ecc2/e4f0/12e39c6467bf807eb54727401871cc38?Expires=1685318400&Signature=IZ9Lgp-VtPWsJQgTtJyLyztNGwkv3dSLa1H48eJiaDN0MyEdqAoa9GHPN-sbNnjy9wzgIh1Pdb5Kd9XlHPSib~IGRzI6C4sq7MLsjhDjFxrPx4IcZy1Zwjv~vu3WC0~JRifcH2lSVe7vlVvNM6rMpEEQ2IoDk0BEaiB~sB9VPygzOGIytZYuMwntOb4nl2zKLphZ-vHuBaXBfPr1BGxTxceE~e~SFc5RXLotTK~M-sCeqVmrPVv84EegS2sf9Qx9XVWdtegUbEuoZKg2qA0apkuS~-jvaXvsvc-hBLXOSppLkf8m5aSqrKKi0~~uZdg4OpBJbJBu-WY0d5IVw385gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
function ArticleDetailPage() {
  return (
    <div>
      <Header2 />
      <section>
        <div className="flex">
          <h1 class="text-[#495057] font-bold text-xs"> 08.08.2021</h1>
          <div className="h-[2px] w-10 bg-[#495057] ml-[8px] mt-[6px]"></div>
          <h1 class="text-[#495057] font-bold text-xs ml-[8px]"> 4 minutes</h1>
        </div>
        <h1 class="text-[#495057] font-normal text-xs flex justify-center">
          Seamlessly syndicate cutting-edge architectures rather than
          collaborative collaboration and idea-sharing. Proactively incubate
          visionary interfaces whereas premium benefits. Seamlessly negotiate
          ubiquitous leadership skills rather than parallel ideas. Dramatically
          visualize superior interfaces for best-of-breed alignments.
          Synergistically formulate performance based users through customized
          relationships. Interactively deliver cross-platform ROI via granular
          systems. Intrinsicly enhance effective initiatives vis-a-vis
          orthogonal outsourcing. Rapidiously monetize market-driven
          opportunities with multifunctional users. Collaboratively enhance
          visionary opportunities through revolutionary schemas. Progressively
          network just in time customer service without real-time scenarios.
          <br />
          Synergistically drive e-business leadership with unique synergy.
          Compellingly seize market positioning ROI and bricks-and-clicks
          e-markets. Proactively myocardinate timely platforms through
          distributed ideas. Professionally optimize enabled core competencies
          for leading-edge sources. Professionally enhance stand-alone
          leadership with innovative synergy. Rapidiously generate backend
          experiences vis-a-vis long-term high-impact relationships.
          Authoritatively supply market-driven mindshare and bricks-and-clicks
          opportunities. Holisticly create diverse innovation through adaptive
          communities. Efficiently empower seamless meta-services with impactful
          opportunities. Distinctively transition virtual outsourcing with
          focused e-tailers.
          <br />
          {/* <p>
            <meta charset="utf-8" />
            <span style="white-space:pre-wrap; font-weight:bold; font-size:24px ">
              “ Monotonectally seize superior mindshare rather than efficient
              technology. ” <br />
              <br />
            </span>
            <br />
          </p> */}
          <br />
          Compellingly enhance seamless resources through competitive content.
          Continually actualize 24/365 alignments for resource-leveling
          platforms. Energistically enhance high standards in models and
          professional expertise. Intrinsicly iterate extensible metrics for
          prospective opportunities. Continually develop leading-edge
          experiences through quality e-services.
        </h1>
        <div className="h-[2px] w-10 bg-[#495057]"></div>
      </section>
      <section className="mx-10 mt-10">
        <h1 className="text-3xl text-[#495057] font-bold font-serif">
          Related Posts
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
    </div>
  );
}

export default ArticleDetailPage;
