import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Main2 from "../components/Main2.js";
import FaceBookicon from "./icons/Facebookicon";
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

function Header2() {
  const router = useRouter();
  return (
    <section>
      <section
        className="absolute top-0 right-0 left-0 z-10"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
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
      <div className="h-screen relative">
        <img
          className={styles.zurg}
          src="https://s3-alpha-sig.figma.com/img/efe6/e221/10ece248323aa818f9ef25014aa5cccf?Expires=1684713600&Signature=NqMARpmnyshP19R04d9y5P~HxbhAxbs6xCCAgifPMmLTFnX6B8K~Zumdcia0wMtqcmPuTeMTf60UDVaKcsqMq2PTVVTpgSW9ROVDzTpsucQiLEPE01-8Wxn0g81~aRJQLa3jIoLRVMVhBwj0kkdJvniW~R8YE5FT5tfN-oPdb~LEWOJp0G9RHXfnMaTPqS8Z6IwLIBXLLpNe5AeMeBI6NhtTQY2cDTY6MMjipqNguBSfejPjzym3SH73mmrJKk7QVQsuY84CNwwrSXWwEXo0mqFGaX4g~ve262NiWrQHuRdHzekzEF7DKZ~jxs4qngGpwMuZgCDcXROC1ESLlGSP0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Main2 />
      </div>
    </section>
  );
}

export default Header2;
