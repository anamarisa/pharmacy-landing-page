import Footer from "./Footer";
import Header from "./Header";
import heroImage from "../assets/images/blog-images/hero.png";
import detail1 from "../assets/images/blog-images/detail1.png";
import detail2 from "../assets/images/blog-images/detail2.png";
import detail3 from "../assets/images/blog-images/detail3.png";
import detail4 from "../assets/images/blog-images/detail4.png";

export default function Post() {
  return (
    <>
      <Header />

      <div className="font-inter max-w-7xl mx-auto px-4 mt-[60px]">
        {/* Title Section */}
        <p className="text-gray-500 text-lg leading-[28px] tracking-[-0.02em] mb-[13px]">
          Published on February 15, 2025
        </p>
        <h1 className="text-5xl leading-[58px] tracking-[-0.02em] font-medium mb-[41px]">
          Auque sed a viverra tristique eqet
        </h1>

        {/* Featured Image */}
        <div className="mt-6">
          <img
            src={heroImage}
            alt="Featured Blog"
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>

        {/* Blog Content and Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Main Content */}
          <div className="flex-1 text-gray-700 space-y-8">
            <p className="text-[16px] leading-[24px] tracking-[-0.02em] font-normal">
              Faucibus diam tincidunt sagittis interdum libero vel etiam dolor.
              Uma ultrices in odio dictum. Mattis sed pellentesque sem nibh.
              Dolor in eros urna phasellus amet tempor donec dis morbi. Ut neque
              nunc sit mollis. Sollicitudin leo pretium eu arcu auctor commodo
              malesuada.
              <br />
              In eget amet faucibus lorem dictum diam purus sed. Hendrerit sed
              massa aliquet quis massa id vitae eu morbi. Dolor magna phasellus
              lectus tortor non viverra cursus. Sollicitudin ipsum pharetra nisi
              aliquet.
            </p>

            <h2 className="text-4xl leading-[40px] tracking-[-0.02em] font-medium mb-4 mt-8">
              Scelerisque volutpat mattis sit
            </h2>

            <p className="text-[16px] leading-[24px] tracking-[-0.02em] font-normal">
              Vel proin at tristique ac ridiculus lorem. Sem lobortis nunc
              cursus ac. Odio habitasse non turpis laoreet non lectus.
              Condimentum at nec ornare cursus pellentesque nec maecenas.
              Scelerisque duis eu dui turpis porttitor feugiat integer. Vitae
              malesuada scelerisque porttitor dignissim nulla ultrices
              ullamcorper elit. Cras sollicitudin id nullam nulla at eu
              fringilla nec. Nibh sem fringilla et amet ultrices urna at
              scelerisque eget. Adipiscing condimentum euismod facilisi orci
              magna. Pulvinar ut amet commodo eu enim interdum. Tristique enim
              dui leo lacus egestas magnis orci diam quis. Turpis ut ornare eu
              dignissim vitae quis nulla. Egestas et at in mauris egestas quis
              egestas. Aliquet et phasellus duis elementum vel nec ipsum eu.
              <br />
              Magna id mauris aliquam lectus sit tempus nullam. Sit scelerisque
              pellentesque dolor amet sed. Ipsum arcu sit sed tristique est.
              Facilisis eget quisque at aenean. Dui sed sed mauris viverra
              pellentesque integer lacus aenean. Cras a bibendum viverra velit.
              Mauris augue non gravida tortor. Nisl quis arcu et morbi eget est
              fames. Vitae amet ut velit rhoncus libero purus aenean. Venenatis
              arcu quam morbi habitant lorem scelerisque id. Libero a pharetra
              in phasellus ut sapien molestie dignissim. Viverra odio viverra
              lobortis nunc quis at et mi mauris.
              <br />
              Enim sagittis faucibus posuere sit vitae gravida malesuada. Lacus
              at purus id sociis venenatis nunc at.
            </p>

            <p className="text-[16px] leading-[24px] tracking-[-0.02em] font-normal">
              Magna id mauris aliquam lectus sit tempus nullam. Sit scelerisque
              pellentesque dolor amet sed. Ipsum arcu sit sed tristique est.
              Facilisi eget egestas eu aenean. Duis sed sed mauris viverra
              pellentesque integer lacus aenean.
            </p>

            <h2 className="text-4xl leading-[40px] tracking-[-0.02em] font-medium mb-4 mt-8">
              Ultrices diam semper mi
            </h2>

            <p className="text-[16px] leading-[24px] tracking-[-0.02em] font-normal">
              Et sed vel tellus viverra duis. Purus lorem tortor risus fusce
              porttitor pharetra. Pulvinar et vitae natoque magna pretium sem
              auctor ut purus. Sit blandit feugiat ut enim amet molestie sit
              imperdiet hendrerit. Adipiscing diam feugiat turpis risus non
              habitant feugiat commodo mattis. Et varius diam scelerisque
              ultrices nibh orci hendrerit justo. Adipiscing ultrices nisi ac
              platea facilisis vel in. Non varius at lectus curabitur eu. Massa
              volutpat urna sit aliquet. Mi vel tempus curabitur nulla pulvinar
              amet. Ut euismod phasellus semper id. Faucibus luctus velit nisl
              non.
              <br />
              Tempus malesuada diam consectetur lacus blandit orci lobortis eu.
              Augue aliquam pretium tempus arcu condimentum cursus. Nulla in
              viverra sit purus neque. Tempus proin lorem mauris pulvinar
              aliquam vivamus. Sit arcu amet libero risus tincidunt vestibulum
              vulputate mi integer. Velit nulla at quis in pellentesque cras
              vitae facilisis. Diam vitae nisl duis tincidunt mollis faucibus ut
              massa.
              <br />
              Leo aliquet tincidunt libero justo. Tempor amet enim semper cras
              praesent vel. Faucibus morbi commodo.
            </p>

            <h2 className="text-4xl leading-[40px] tracking-[-0.02em] font-medium mb-4 mt-8">
              Pulvinar
            </h2>

            <p className="text-[16px] leading-[24px] tracking-[-0.02em] font-normal">
              Scelerisque sed orci felis at. Ut morbi sit tellus amet blandit
              nibh donec etiam. Suspendisse scelerisque dui id mattis. Tincidunt
              vel non egestas semper accumsan quam elit ut. Ultricies metus
              justo purus tellus ultrices ut commodo ut vitae. Scelerisque
              tortor non nec ut sed viverra ornare a iaculis. Et dolor quam vel
              mi massa et congue. Et nunc aliquam nam interdum morbi. Odio
              lectus sed velit in tellus mi semper in. Tristique.
            </p>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-lg font-bold mb-4 leading-[24px] tracking-[-0.02em]">FEATURED BLOG</h3>
            <div className="space-y-4">
              {/* Featured blog item */}
              <div className="flex items-center gap-4">
                <img
                  src={detail1}
                  alt="Blog 1"
                  className="w-[139px] h-[100px] object-cover rounded-xl"
                />
                <div>
                  <p className="text-sm leading-[20px] tracking-[-0.02em] text-gray-500 mb-[6px]">
                    January 10, 2025
                  </p>
                  <p className="text-2xl leading-[32px] tracking-[-0.02em] font-semibold">
                    Mi porta volutpat blandit a et
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={detail2}
                  alt="Blog 2"
                  className="w-[139px] h-[100px] object-cover rounded-xl"
                />
                <div>
                  <p className="text-sm leading-[20px] tracking-[-0.02em] text-gray-500 mb-[6px]">January 10, 2025</p>
                  <p className="text-2xl leading-[32px] tracking-[-0.02em] font-semibold">
                    A eu lobortis bibendum facilisi.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={detail3}
                  alt="Blog 3"
                  className="w-[139px] h-[100px] object-cover rounded-xl"
                />
                <div>
                  <p className="text-sm leading-[20px] tracking-[-0.02em] text-gray-500 mb-[6px]">January 10, 2025</p>
                  <p className="text-2xl leading-[32px] tracking-[-0.02em] font-semibold">
                    Dignissim ut ac tristique non quis
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={detail4}
                  alt="Blog 4"
                  className="w-[139px] h-[100px] object-cover rounded-xl"
                />
                <div>
                  <p className="text-sm leading-[20px] tracking-[-0.02em] text-gray-500 mb-[6px]">January 10, 2025</p>
                  <p className="text-2xl leading-[32px] tracking-[-0.02em] font-semibold">
                    Amet morbi accumsan dui eget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
