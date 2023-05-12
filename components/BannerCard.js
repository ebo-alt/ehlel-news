function BannerCard(props) {
  return (
    <section className="relative h-screen">
      <img src={props.image} alt="" className="w-100 h-100" />
      <section className="absolute top-[40%] ml-10 max-w-[530px]">
        <section className="flex mb-4">
          <section className="bg-black px-3 py-1 rounded-md">
            <h3 className="text-white text-xs uppercase ">{props?.title}</h3>
          </section>
        </section>
        <h3 className="text-3xl text-white tracking-wider">
          {props?.description}
        </h3>
      </section>
    </section>
  );
}

export default BannerCard;
