import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import FaceBookicon from "../components/icons/Facebookicon";
import Main from "../components/Main.js";
const HeaderList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/About",
  },
  {
    name: "Articles",
    path: "/Articles",
  },
  {
    name: "Contact Us",
    path: "/Contacts",
  },
];

function Header() {
  const router = useRouter();
  return (
    <section>
      <div className="h-screen relative">
        <img
          className={styles.zurg}
          src="https://s3-alpha-sig.figma.com/img/8bab/c6de/10e133c6518d8edcb5ca2d5585b71204?Expires=1684713600&Signature=Yv~n36DPo1ck0DWEPPa5~BpH0dzWPkqXkb5oXo982kZfE6v7XVCiKhC1GQ1gH~28JXv0Y77RgFzoVsXpKlC5IXcTpJDH0uQ3bSMur9G9Pf6aySIVJxQrBajFAUMdTJecu177Ff2CzaTHlPzT7A8iTcFaTDcXAkEJ5df0mm28RM0BZP1OmW2WrM70ddGrpyucCcDC1U-euGRPEVb2S8lOaaf6hgyOWmJvCwicsyh3BQiA2H2LhFgiIahM~aOW8q0fQ9cEGtLq7r~UrXVls8GGC1lv-lIrA1iENXbeJLw2-62Olc1~GNDz8Z3TndLpp3mqIIMlRyXxFHYu0XNFx~13mw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Main />
      </div>
      <section className={styles.container}>
        <h3 className={styles.logo}>RUNO</h3>
        <ul className={styles.list}>
          {HeaderList.map((list) => (
            <li className={router.asPath === list.path && styles.listActive}>
              <Link href={list.path}>{list.name}</Link>
            </li>
          ))}
          <div className={styles.Zuraas}></div>
          <FaceBookicon />
          <div className={styles.Zuraas}></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </ul>
      </section>
    </section>
  );
}

export default Header;
