function ArticleSection(props) {
  const { className, image } = props;
  return (
    <section className={`relative ${className}`}>
      <img src={props.image} className="w-full h-full fill-slate-500" />
      <section
        className="absolute bg-black top-0 w-full h-full "
        style={{ backgroundColor: 'rgba(0,0,0, 0.18)' }}
      >
        <section className="flex flex-col h-full justify-center items-center">
          <section className="bg-black px-3 py-1 rounded-md">
            <h3 className="text-white text-xs">ADVENTURE</h3>
          </section>
          <h3 className="text-white text-3xl max-w-[530px] text-center">
            Richird Norton photorealistic rendering as real photos
          </h3>

          <h5 className="max-w-[420px] mt-1 text-white text-center">
            Progressively incentivize cooperative systems through technically
            sound functionalities. The credibly productivate seamless data.
          </h5>
          <div className="w-[60px] h-px bg-white mt-4"></div>
          <h3 className="text-white mt-4 text-center">08.08.2023</h3>
        </section>
      </section>
    </section>
  )
}

export default ArticleSection