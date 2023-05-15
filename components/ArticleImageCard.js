function ArticleImageCard(props) {
  const { image } = props;
  return (
    <section className="h-[340px] relative">
      <img src={image} className="w-full h-full rounded-lg" />
      <div
        className="absolute w-full h-full rounded-lg bg-black top-0"
        style={{ backgroundColor: "rgba(0,0,0, 0.18)" }}
      ></div>
      <section className="absolute mx-8 my-6 bottom-0">
        <h4 className="text-[#E5E5E5] mb-1 text-xs">08.08.2021</h4>
        <h2 className="text-white mb-1 text-md">
          Richird Norton photorealistic rendering as real photos
        </h2>
        <h1 className="text-[#E5E5E5] text-sm">
          Progressively incentivize cooperative systems through technically
          sound functionalities.
        </h1>
      </section>
    </section>
  );
}

export default ArticleImageCard;
