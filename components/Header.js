import FaceBookIcon from './icons/FacebookIcon';
import styles from './Header.module.css';
import Link from 'next/link';

function Header() {
  return (
    <section className={styles.header__container}>
      <section>
        <h1 className="text-white">Runo</h1>
      </section>
      <section className="flex gap-6">
        <ul className="flex gap-5 header-ul">
          <Link href="/">
            <li className="text-white">Home</li>
          </Link>
          <Link href="/about">
            <li className="text-white">About</li>
          </Link>
          <Link href="/articles">
            <li className="text-white">Articles</li>
          </Link>
          <Link href="/contact">
            <li className="text-white">Contact Us</li>
          </Link>
        </ul>
        <div className="h-full w-[1px] bg-white"></div>
        <section className="flex gap-2">
          <FaceBookIcon />
          <FaceBookIcon />
          <FaceBookIcon />
          <FaceBookIcon />
          <FaceBookIcon />
        </section>
        <div className="h-full w-[1px] bg-white"></div>
        <section>
          <FaceBookIcon />
        </section>
      </section>
    </section>
  );
}

export default Header;
