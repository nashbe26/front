import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import $ from "jquery";
import Link from "next/link";

import afkMobile from "../../public/assets/imgs/portfolio/008.webp";
import camiMobile from "../../public/assets/imgs/portfolio/09.webp";
import vicMobile from "../../public/assets/imgs/portfolio/010.webp";
import waadMobile from "../../public/assets/imgs/portfolio/011.webp";
import studyMobile from "../../public/assets/imgs/portfolio/012.webp";
import wemakeMobile from "../../public/assets/imgs/portfolio/013.webp";


import Portfolio11 from "../../public/assets/imgs/portfolio/01.png";
import afk from "../../public/assets/imgs/portfolio/afk.png";
import cami from "../../public/assets/imgs/portfolio/cami.png";
import vic from "../../public/assets/imgs/portfolio/lecomptoir.png";
import waad from "../../public/assets/imgs/portfolio/skin.png";
import study from "../../public/assets/imgs/portfolio/study.png";
import wemake from "../../public/assets/imgs/portfolio/wemake.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import { Autoplay, EffectFade, FreeMode, Navigation, Pagination, Thumbs } from "swiper";

import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";

import va1 from "../../public/assets/imgs/img/va1.jpg";
import va2 from "../../public/assets/imgs/img/va2.jpg";
import va3 from "../../public/assets/imgs/img/va3.jpg";
import men1 from "../../public/assets/imgs/img/men1.jpg";
import men2 from "../../public/assets/imgs/img/men2.jpg";
import men3 from "../../public/assets/imgs/img/men3.jpg";
import os1 from "../../public/assets/imgs/img/os1.jpg";
import os2 from "../../public/assets/imgs/img/os2.jpg";
import os3 from "../../public/assets/imgs/img/os3.jpg";
import gs1 from "../../public/assets/imgs/img/gs1.jpg";
import gs2 from "../../public/assets/imgs/img/gs2.jpg";
import gs3 from "../../public/assets/imgs/img/gs3.jpg";
import for1 from "../../public/assets/imgs/img/for1.jpg";
import for2 from "../../public/assets/imgs/img/for2.jpg";
import for3 from "../../public/assets/imgs/img/for3.jpg";
import ri1 from "../../public/assets/imgs/img/ri1.jpg";
import ri2 from "../../public/assets/imgs/img/ri2.jpg";
import ri3 from "../../public/assets/imgs/img/ri3.jpg";
import esp1 from "../../public/assets/imgs/img/esp1.jpg";
import esp2 from "../../public/assets/imgs/img/esp2.jpg";
import esp3 from "../../public/assets/imgs/img/esp3.jpg";
import pin1 from "../../public/assets/imgs/img/pin1.jpg";
import pin2 from "../../public/assets/imgs/img/pin2.jpg";
import pin3 from "../../public/assets/imgs/img/pin3.jpg";

import rochelle from "../../public/assets/imgs/img/pack1.jpg";
import lily from "../../public/assets/imgs/img/pack2.jpg";
import vertej from "../../public/assets/imgs/img/pack3.jpg";


gsap.registerPlugin(ScrollTrigger);

const ARRAYIMAGE = [
  { img: va1, name: "VAPOR CLOUD" },
  { img: va2, name: "VAPOR CLOUD" },
  { img: va3, name: "VAPOR CLOUD" },
  { img: men1, name: "BODY GYM" },
  { img: men2, name: "BODY GYM" },
  { img: men3, name: "BODY GYM" },
  { img: os1, name: "OSPORT" },
  { img: os2, name: "OSPORT" },
  { img: os3, name: "OSPORT" },
  { img: gs1, name: "GSPHARMA" },
  { img: gs2, name: "GSPHARMA" },
  { img: gs3, name: "GSPHARMA" },
  { img: for1, name: "FOR THE HOME" },
  { img: for2, name: "FOR THE HOME" },
  { img: for3, name: "FOR THE HOME" },
]

const packages = [{
  img: rochelle,
  name: "ROCHELLE",
  description: "Rochelle, a cozy coffee shop in Sfax, offers an artisanal coffee experience. At XSUSTAIN, we crafted its branding and designed elegant packaging boxes to enhance its unique charm."
},
{
  img: vertej,
  name: "VERTEJ",
  description: "Vertej is a cosmetic brand that embodies elegance and quality. At XSUSTAIN, we enhanced its branding to reflect its sophistication, creating a visual identity that resonates with its premium products."
}, {
  img: rochelle,
  name: "JOURIMA",
  description: "Jourima is a fun and interactive card game designed for couples to deepen their connection and enjoy meaningful moments together. At XSUSTAIN, we crafted its branding to reflect its playful and intimate essence."
}, {
  img: rochelle,
  name: "LILY",
  description: "Lily is a home-based pastry brand known for its delicious, handcrafted treats. At XSUSTAIN, we developed its branding to showcase its warmth and artisanal quality, creating a sweet and inviting identity."
},]

const ARRAY2 = [
  { img: ri1, name: "JOURIMA" },
  { img: ri2, name: "JOURIMA" },
  { img: ri3, name: "JOURIMA" },
  { img: esp1, name: "EPSEROO" },
  { img: esp2, name: "EPSEROO" },
  { img: esp3, name: "EPSEROO" },
  { img: pin1, name: "PINOCHIOO" },
  { img: pin2, name: "PINOCHIOO" },
  { img: pin3, name: "PINOCHIOO" },
];


const desktopSlides = [
  { src: Portfolio11, link: "http://51.255.168.69:3000" },
  { src: study, link: "http://study-link-hub.com/" },
  { src: cami, link: "http://92.205.224.24:3000" },
  { src: afk, link: "https://www.afk-art.com" },
  { src: vic, link: "https://www.lecomptoirdevictoria.com/en" },
  { src: wemake, link: "https://wemake3dp.com/" },
  { src: waad, link: "https://skinandbeauty.tn/" },
];

// Mobile slides
const mobileSlides = [
  { src: studyMobile, link: "http://study-link-hub.com/" },
  { src: camiMobile, link: "http://92.205.224.24:3000" },
  { src: afkMobile, link: "https://www.afk-art.com" },
  { src: vicMobile, link: "https://www.lecomptoirdevictoria.com/en" },
  { src: wemakeMobile, link: "https://wemake3dp.com/" },
  { src: waadMobile, link: "https://skinandbeauty.tn/" },
];

const Portfolio1 = () => {
  const charAnim = useRef();
  const charAnim2 = useRef();
  const portfolioItemList = useRef();
  const PortfolioTotal = useRef();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current, 0.15);
    if (typeof window !== "undefined") {
      const totalPortfolioItems = portfolioItemList.current.children.length;

      if (totalPortfolioItems) {
        PortfolioTotal.current.innerHTML = totalPortfolioItems;
      }

      $(document).on("scroll", function () {
        $(".portfolio__item-6").each(function () {
          if (
            $(this).position().top <= $(document).scrollTop() &&
            $(this).position().top + $(this).outerHeight() >
            $(document).scrollTop()
          ) {
            var item_num = $(this).data("portfitem");
            $(".portfolio__current").html(item_num);
            $(this).addClass("active").siblings().removeClass("active");
          }
        });
      });

      let tHero = gsap.context(() => {
        const portfolio_listss = gsap.utils.toArray(".portfolio__item-6 img");
        if (portfolio_listss) {
          portfolio_listss.forEach((item, i) => {
            gsap.from(item, {
              scrollTrigger: {
                trigger: item,
                start: "top center",
                scrub: 1.5,
              },
              scale: 2.5,
              duration: 1,
            });
          });
        }
        function mousemoveHandler(e) {
          const target = e.target;

          let tl = gsap.timeline({
            defaults: {
              x: e.clientX,
              y: e.clientY,
            },
          });
          let t2 = gsap.timeline({
            defaults: {
              x: e.clientX,
              y: e.clientY,
            },
          });
        }
        ScrollTrigger.create({
          trigger: ".portfolio__wrapper-6",
          start: "top top",
          end: "bottom bottom",
          pin: ".portfolio__title-wrap-6",
          pinSpacing: false,
        });
        document.addEventListener("mousemove", mousemoveHandler);
      });
      return () => {
        tHero.revert();
      };
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Our Work | XSUSTAIN Portfolio</title>
        <meta name="description" content="Explore XSUSTAIN’s portfolio showcasing our expertise in web development, mobile apps, branding, and digital marketing. See how we help businesses grow." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="XSUSTAIN portfolio, digital agency projects, web development, branding, mobile apps, social media marketing" />
        <meta name="author" content="XSUSTAIN" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="XSUSTAIN Portfolio | Transforming Businesses with Digital Innovation" />
        <meta property="og:description" content="Discover our latest projects in web development, mobile apps, branding, and digital marketing. See how XSUSTAIN creates success stories." />
        <meta property="og:image" content="https://www.xsustain.io/logo.png" />
        <meta property="og:url" content="https://www.xsustain.io/portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="XSUSTAIN Portfolio | Transforming Businesses with Digital Innovation" />
        <meta name="twitter:description" content="See how XSUSTAIN delivers cutting-edge web development, branding, and marketing solutions for businesses worldwide." />
        <meta name="twitter:image" content="https://www.xsustain.io/logo.png" />
      </Head>

      <main>
        <RootLayout>
          <section className="portfolio__area-6">
            <div className="container line pt-100 pb-140">
              <span className="line-3"></span>
              <div className="zi-9">
                <div className="row">
                  <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
                    <div className="sec-title-wrapper portfolio__title-wrap-6">
                      <div className="">
                        <h2
                          className="sec-sub-title animation__char_come"
                          ref={charAnim}
                        >
                          Work
                        </h2>
                        <h3
                          className="sec-title animation__char_come_long"
                          ref={charAnim2}
                        >
                          VIDEO
                        </h3>
                        <p>
                          Creating compelling visuals and cinematic stories at
                          the intersection of creativity and digital innovation.
                        </p>
                      </div>
                      <div className="portfolio__pagination-6">
                        <span className="portfolio__current">01</span> / 0
                        <span
                          className="portfolio__total"
                          ref={PortfolioTotal}
                        ></span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-6">
                    <div className="portfolio__wrapper-6">
                      <div className="portfolio__list-6" ref={portfolioItemList}>
                        <div className="portfolio__item-6" data-portfitem="1">

                          <video width={isMobile ? "100%" : "700"} height="800" controls preload="none" poster="/assets/imgs/logo/skarsa.jpg">
                            <source src={"/assets/video/1.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="portfolio__content-6">
                            <h4 className="portfolio__title-6">SKARSA</h4>
                            <h5 className="portfolio__date">7 July 2024</h5>
                          </div>

                        </div>
                        <div className="portfolio__item-6" data-portfitem="2">

                          <video width={isMobile ? "100%" : "700"} height="800" controls preload="none" poster="/assets/imgs/logo/optic.jpg" style={{ background: "#CECECE" }}>
                            <source src={"/assets/video/10.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="portfolio__content-6">
                            <h4 className="portfolio__title-6">Paradeyes optique</h4>
                            <h5 className="portfolio__date">28 November 2024</h5>
                          </div>

                        </div>

                        <div className="portfolio__item-6" data-portfitem="3">

                          <video width={isMobile ? "100%" : "700"} height="800" controls preload="none" style={{ background: "#F7F7F7" }} poster="/assets/imgs/logo/amiral.jpg">
                            <source src={"/assets/video/2.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="portfolio__content-6">
                            <h4 className="portfolio__title-6">AMIRAL LINGERIE</h4>
                            <h5 className="portfolio__date">11 August 2024</h5>
                          </div>

                        </div>
                        <div className="portfolio__item-6" data-portfitem="4">

                          <video width={isMobile ? "100%" : "700"} height="800" controls preload="none" style={{ background: "#20376B" }} poster="/assets/imgs/logo/padel.jpg">
                            <source src={"/assets/video/3.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="portfolio__content-6">
                            <h4 className="portfolio__title-6">Padel Pro League</h4>
                            <h5 className="portfolio__date">24 OCTOBER 2024</h5>
                          </div>

                        </div>
                        <div className="portfolio__item-6" data-portfitem="5">

                          <video width={isMobile ? "100%" : "700"} height="800" controls preload="none" style={{ background: "black" }} poster="/assets/imgs/logo/ssk.jpg">
                            <source src={"/assets/video/4.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="portfolio__content-6">
                            <h4 className="portfolio__title-6">Tunisia Pro League</h4>
                            <h5 className="portfolio__date">01 December 2024</h5>
                          </div>

                        </div>
                        <div className="portfolio__item-6" data-portfitem="6">

                          <video width={isMobile ? "100%" : "700"} height="800" controls preload="none" style={{ background: "white" }} poster="/assets/imgs/logo/lvl.jpg">
                            <source src={"/assets/video/5.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="portfolio__content-6">
                            <h4 className="portfolio__title-6">NEXT LEVEL ACADEMIE</h4>
                            <h5 className="portfolio__date">07 JANVIER 2025</h5>
                          </div>

                        </div>
                        <div className="portfolio__item-6" data-portfitem="7">

                          <video width={isMobile ? "100%" : "700"} height="800" controls preload="none" style={{ background: "white" }} poster="/assets/imgs/logo/for.jpg">
                            <source src={"/assets/video/6.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="portfolio__content-6">
                            <h4 className="portfolio__title-6">FOR THE HOME</h4>
                            <h5 className="portfolio__date">14 December 2024</h5>
                          </div>

                        </div>
                        <div className="portfolio__item-6" data-portfitem="8">

                          <video width={isMobile ? "100%" : "700"} height="800" controls preload="none" style={{ background: "#F7D8E1" }} poster="/assets/imgs/logo/pino.jpg">
                            <source src={"/assets/video/8.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="portfolio__content-6">
                            <h4 className="portfolio__title-6">PINOCHIOO</h4>
                            <h5 className="portfolio__date">13 AUGUST 2024</h5>
                          </div>


                        </div>
                        <div className="portfolio__item-6" data-portfitem="9">

                          <video width={isMobile ? "100%" : "700"} height="800" controls preload="none" style={{ background: "#0E1520" }} poster="/assets/imgs/logo/body.jpg">
                            <source src={"/assets/video/9.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="portfolio__content-6">
                            <h4 className="portfolio__title-6">BODY GYM</h4>
                            <h5 className="portfolio__date">19 JANVIER 2025</h5>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="portfolio__area-7">
            <div className="container pt-140 pb-100">
              <div className="row">
                <div className="col-xxl-12">


                  <div className="sec-title-wrapper portfolio__title-wrap-6">
                    <div className="">
                      <h2
                        className="sec-sub-title animation__char_come"
                        ref={charAnim}
                      >
                        Work
                      </h2>
                      <h3
                        className="sec-title animation__char_come_long"
                        ref={charAnim2}
                      >
                        Graphic Design Work
                      </h3>
                      <p>
                        Collaborating with global brands and agencies at the crossroads
                        of bold creativity and cutting-edge design.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio__slider-7 my-5">
              <Swiper
                modules={[FreeMode]}
                spaceBetween={30}
                slidesPerView={1}
                freeMode={true}
                loop={true}
                centeredSlides={true}
                speed={2000}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  800: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
              >
                {ARRAYIMAGE.map((x, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="portfolio__slide-7">
                        <div className="slide-img">

                          <Image
                            priority
                            style={{ width: "100%", height: "auto" }}
                            src={x.img}
                            alt="Portfolio Image"
                          />

                        </div>
                        <div className="slide-content">
                          <Link href="/portfolio-details">
                            <h2 className="title">

                              {x.name}
                            </h2>
                          </Link>
                          <h4 className="date">BY XSUSTAIN.</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}

              </Swiper>
            </div>
            <div className="portfolio__slider-7">
              <Swiper
                modules={[FreeMode]}
                spaceBetween={30}
                slidesPerView={1}
                freeMode={true}
                loop={true}
                centeredSlides={true}
                speed={2000}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  800: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
              >
                {ARRAY2.map((x, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="portfolio__slide-7">
                        <div className="slide-img">

                          <Image
                            priority
                            style={{ width: "100%", height: "auto" }}
                            src={x.img}
                            alt="Portfolio Image"
                          />

                        </div>
                        <div className="slide-content">
                          <Link href="/portfolio-details">
                            <h2 className="title">

                              {x.name}
                            </h2>
                          </Link>
                          <h4 className="date">BY XSUSTAIN.</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}

              </Swiper>
            </div>
          </section>
          <section className="portfolio-v5 portfolio__project">
            <div className="container line">
              <div className="line-3"></div>
              <div className="row pt-130 pb-100">
                <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                      Awesome <br />
                      WEBSITES
                    </h2>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                  <div className="blog__text">
                    <p>
                      Crafting stunning websites, seamless user experiences, and dynamic digital
                      platforms designed for innovation and impact.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="pp-title-wrap">
                    <h2 className="pp-title">
                      Selected <br /> Work
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                  <div className="pp-slider-wrapper">
                    <Swiper
                      modules={[Navigation, Thumbs]}
                      spaceBetween={10}
                      loop={true}
                      navigation={{
                        nextEl: ".pp-next",
                        prevEl: ".pp-prev",
                      }}
                      thumbs={{
                        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                      }}
                      // Optional: Add different settings for mobile vs desktop
                      slidesPerView={1} // Example: 1 slide on mobile, 3 on desktop
                    >
                      <div className="swiper-wrapper">
                        {slides.map((slide, index) => (
                          <SwiperSlide key={index}>
                            <div className="pp-slide">
                              <Link href={slide.link}>
                                <Image
                                  priority
                                  style={{ width: "100%", objectFit: "contain" }}
                                  src={slide.src}
                                  alt="Portfolio Thumbnail"
                                />
                              </Link>
                            </div>
                          </SwiperSlide>
                        ))}
                      </div>
                    </Swiper>

                    <div style={{ cursor: "pointer" }} className="pp-next swipper-btn">
                      prev
                    </div>
                    <div style={{ cursor: "pointer" }} className="pp-prev swipper-btn">
                      Next
                    </div>

                    {/* Optional: Add CSS to hide/show navigation based on screen size */}
                    <style jsx>{`
                      @media (max-width: 768px) {
                        .pp-slider-wrapper {
                          /* Mobile-specific styles */
                        }
                      }
                      @media (min-width: 769px) {
                        .pp-slider-wrapper {
                          /* Desktop-specific styles */
                        }
                      }
                    `}</style>
                  </div>
                </div>

                {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                      <Swiper
                        // modules={[Thumbs, FreeMode]}
                        spaceBetween={10}
                        // loop={true}
                        slidespreview={1}
                        // freeMode={true}
                        // watchSlidesProgress
                        allowTouchMove={false}
                        className="portfolio__project-thumbs"
                        onSwiper={setThumbsSwiper}
                      >
                        <SwiperSlide>
                          <div className="pp-slide-thumb">
                            <h3 className="pp-slide-title">OSPORT</h3>
                            <p>November 2024</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="pp-slide-thumb">
                            <h3 className="pp-slide-title">STUDY LINK HUB</h3>
                            <p>Januray 2025</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="pp-slide-thumb">
                            <h3 className="pp-slide-title">CAMINVEST</h3>
                            <p>SEPTEMBER 2024</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="pp-slide-thumb">
                            <h3 className="pp-slide-title">AFK'ART</h3>
                            <p>FEBURARY 2025</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="pp-slide-thumb">
                            <h3 className="pp-slide-title">VICTORIA</h3>
                            <p>NOVEMBER 2024</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="pp-slide-thumb">
                            <h3 className="pp-slide-title">WEMAKE3D</h3>
                            <p>JUNE 2024</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="pp-slide-thumb">
                            <h3 className="pp-slide-title">WAAD RHAIEM CLINIIC</h3>
                            <p>DECEMBER 2024</p>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div> */}
              </div>
            </div>
          </section>

        </RootLayout>
      </main>
    </div>

  );
};

export default Portfolio1;
