import ArticleSection from '../../components/ArticleSection';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
const img =
  'https://s3-alpha-sig.figma.com/img/efe6/e221/10ece248323aa818f9ef25014aa5cccf?Expires=1684713600&Signature=NqMARpmnyshP19R04d9y5P~HxbhAxbs6xCCAgifPMmLTFnX6B8K~Zumdcia0wMtqcmPuTeMTf60UDVaKcsqMq2PTVVTpgSW9ROVDzTpsucQiLEPE01-8Wxn0g81~aRJQLa3jIoLRVMVhBwj0kkdJvniW~R8YE5FT5tfN-oPdb~LEWOJp0G9RHXfnMaTPqS8Z6IwLIBXLLpNe5AeMeBI6NhtTQY2cDTY6MMjipqNguBSfejPjzym3SH73mmrJKk7QVQsuY84CNwwrSXWwEXo0mqFGaX4g~ve262NiWrQHuRdHzekzEF7DKZ~jxs4qngGpwMuZgCDcXROC1ESLlGSP0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
function ArticleDetailPage() {
  return (
    <section>
      <section className="absolute top-0 z-10 w-full">
        <Header />
      </section>
      <ArcticleSection image={img} className="screen-80" />
      <section className="mx-20 my-5">
        <p>
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
        </p>
      </section>
      <Footer />
    </section>
  );
}

export default ArticleDetailPage;
