import FaceBookIcon from './icons/FacebookIcon';

function Footer() {
  return (
    <section className="mt-10 footer bg-black px-10 py-14 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
      <section>
        <ul className="text-white">
          <li className="">Contact the Publisher</li>
          <li>mike@runo.com</li>
          <li>+944 450 904 505</li>
        </ul>
      </section>
      <section>
        <ul className="text-white">
          <li className="">Explorate</li>
          <li>About</li>
          <li>Partners</li>
          <li>Job Opportunities</li>
        </ul>
      </section>
      <section>
        <ul className="text-white">
          <li className="">Headquarter</li>
          <li>191 Middleville Road, NY 1001, Sydney Australia</li>
        </ul>
      </section>
      <section>
        <ul className="text-white">
          <li className="">Connections</li>
          <li>
            <FaceBookIcon />
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Footer;
