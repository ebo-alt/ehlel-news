import Link from 'next/link';

function ArticleCard(props) {
  const { href, image, tag, title, description, createdAt } = props;
  return (
    <Link href={href}>
      <section className="rounded-lg overflow-hidden">
        <section className="relative">
          <img src={image} alt="" className="w-full h-[140px] rounded-lg" />
          <h1
            className="absolute px-2 py-1 m-2 top-0 right-0 text-xs
    rounded-full text-white"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            {tag}
          </h1>
        </section>
        <section>
          <h5 className="text-xs mt-2">08.08.2021</h5>
          <h2 className="text-md mt-1 h-[44px] overflow-hidden">{title}</h2>
          <p className="mt-1 text-sm h-[60px]">{description}</p>
        </section>
      </section>
    </Link>
  );
}

export default ArticleCard;
