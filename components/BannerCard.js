function BannerCard(props) {
  return (
    <section className="relative">
      <img src={props.image} alt="" />
      <section className="absolute top-[40%] ml-10 max-w-[530px]">
        <section className="flex mb-4">
          <section className="bg-black px-3 py-1 rounded-md">
            <h3 className="text-white text-xs">ADVENTURE</h3>
          </section>
        </section>
        <h3 className="text-3xl text-white tracking-wider">
          Richird Norton photorealistic rendering as real photos
        </h3>
      </section>
    </section>
  );
}

export default BannerCard;
