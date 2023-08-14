import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="hero-section relative">
        <div className="hero-slider overflow-hidden">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* swiper-slide start */}
              <div
                className="swiper-slide 2xl:h-screen lg:h-700px flex flex-wrap items-center px-4 md:px-10 2xl:px-24 py-20 lg:py-0  bg-no-repeat bg-left-bottom bg-cover"
                style={{
                  backgroundImage: 'url("/images/hero/slide4.webp")',
                }}>
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                  <div className="md:flex-grow">
                    <div className="slider-content xl:max-w-[580px] 2xl:max-w-[600px]">
                      <span className="text-lg font-normal text-orange block mb-3">
                        #A watch is a portable
                      </span>
                      <h1 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-8xl 2xl:text-9xl mb-5 inline-block xl:block">
                        Minimal
                      </h1>
                      <h2 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-8xl 2xl:text-9xl mb-7 inline-block xl:block">
                        Watch
                      </h2>
                      <p className="font-normal text-primary text-sm lg:text-md">
                        Experience the decibels like your ears deserve to. Safe
                        for the ears, very for the heart. A treat to your ears.
                      </p>
                      <div className="inline-block mt-8 lg:mt-12">
                        <a
                          className="flex flex-wrap items-center bg-primary transition-all hover:bg-orange hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-orange capitalize font-medium text-sm lg:text-md leading-normal"
                          href="shop-grid-3-column.html">
                          Explore More
                          <i className="icon-basket-loaded ml-3 xl:ml-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex-shrink mt-10 md:mt-0">
                    <img
                      className="sm:max-w-sm mx-auto lg:max-w-lg xl:max-w-full"
                      src="/images/hero/sm/slider1.webp"
                      alt="image"
                      loading="lazy"
                      width={570}
                      height={570}
                    />
                  </div>
                </div>
              </div>
              {/* swiper-slide end*/}
              {/* swiper-slide start */}
              <div
                className="swiper-slide 2xl:h-screen lg:h-700px flex flex-wrap items-center px-4 md:px-10 2xl:px-24 py-20 lg:py-0  bg-no-repeat bg-left-bottom bg-cover"
                style={{
                  backgroundImage: 'url("/images/hero/slide4.webp")',
                }}>
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                  <div className="flex-grow">
                    <div className="slider-content xl:max-w-[580px] 2xl:max-w-[600px]">
                      <span className="text-lg font-normal text-orange block mb-3">
                        #Looking Very Nice
                      </span>
                      <h1 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-8xl 2xl:text-9xl mb-5 inline-block xl:block">
                        Minimal
                      </h1>
                      <h2 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-8xl 2xl:text-9xl mb-7 inline-block xl:block">
                        Watch
                      </h2>
                      <p className="font-normal text-primary text-sm lg:text-md">
                        Experience the decibels like your ears deserve to. Safe
                        for the ears, very for the heart. A treat to your ears.
                      </p>
                      <div className="inline-block mt-12">
                        <a
                          className="flex flex-wrap items-center bg-primary transition-all hover:bg-orange hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-orange capitalize font-medium text-sm lg:text-md leading-normal"
                          href="shop-grid-3-column.html">
                          Explore More
                          <i className="icon-basket-loaded ml-3 xl:ml-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex-shrink mt-10 md:mt-0">
                    <img
                      className="sm:max-w-sm mx-auto lg:max-w-lg xl:max-w-full"
                      src="/images/hero/sm/slider2.webp"
                      alt="image"
                      loading="lazy"
                      width={570}
                      height={570}
                    />
                  </div>
                </div>
              </div>
              {/* swiper-slide end*/}
              {/* swiper-slide start */}
              <div
                className="swiper-slide 2xl:h-screen lg:h-700px flex flex-wrap items-center px-4 md:px-10 2xl:px-24 py-20 lg:py-0  bg-no-repeat bg-left-bottom bg-cover"
                style={{
                  backgroundImage: 'url("/images/hero/slide4.webp")',
                }}>
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                  <div className="flex-grow">
                    <div className="slider-content xl:max-w-[580px] 2xl:max-w-[600px]">
                      <span className="text-lg font-normal text-orange block mb-3">
                        #Clean &amp; Morden Design
                      </span>
                      <h1 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-8xl 2xl:text-9xl mb-5 inline-block xl:block">
                        Minimal
                      </h1>
                      <h2 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-8xl 2xl:text-9xl mb-7 inline-block xl:block">
                        Watch
                      </h2>
                      <p className="font-normal text-primary text-sm lg:text-md">
                        Experience the decibels like your ears deserve to. Safe
                        for the ears, very for the heart. A treat to your ears.
                      </p>
                      <div className="inline-block mt-12">
                        <a
                          className="flex flex-wrap items-center bg-primary transition-all hover:bg-orange hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-orange capitalize font-medium text-sm lg:text-md leading-normal"
                          href="shop-grid-3-column.html">
                          Explore More
                          <i className="icon-basket-loaded ml-3 xl:ml-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex-shrink mt-10 md:mt-0">
                    <img
                      className="sm:max-w-sm mx-auto lg:max-w-lg xl:max-w-full"
                      src="/images/hero/sm/slider3.webp"
                      alt="image"
                      loading="lazy"
                      width={570}
                      height={570}
                    />
                  </div>
                </div>
              </div>
              {/* swiper-slide end*/}
            </div>
          </div>
          {/* Add Pagination */}
          <div className="swiper-pagination mb-5 md:mb-0" />
          {/* swiper navigation */}
          {/*     <div class="hidden">
<div class="swiper-button-prev">
  <i class="ion-chevron-left"></i>
</div>
<div class="swiper-button-next">
  <i class="ion-chevron-right"></i>
</div>
    </div> */}
        </div>
      </section>
    </>
  );
}
