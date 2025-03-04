import Head from "next/head";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyHero from "@/components/hero/DigitalAgencyHero";
import DigitalAgencyRoll from "@/components/roll/DigitalAgencyRoll";
import DigitalAgencyAbout from "@/components/about/DigitalAgencyAbout";
import DigitalAgencyService from "@/components/service/DigitalAgencyService";
import DigitalAgencyCounter from "@/components/counter/DigitalAgencyCounter";
import DigitalAgencyWorkflow from "@/components/workflow/DigitalAgencyWorkflow";
import DigitalAgencyPortfolio from "@/components/portfolio/DigitalAgencyPortfolio";
import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import DigitalAgencyTestimonial from "@/components/testimonial/DigitalAgencyTestimonial";
import DigitalAgencyBlog from "@/components/blog/DigitalAgencyBlog";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import DigitalMarketingWorkflow from "@/components/workflow/DigitalMarketingWorkflow";
import DigitalMarketingPrice from "@/components/price/DigitalMarketingPrice";
import Team1 from "@/components/team/Team1";

const DigitalAgency = () => {
  const modalTestimonial1 = useRef();
  const modalTestimonial2 = useRef();
  const modalTestimonial3 = useRef();

  const modalClose1 = useRef();
  const modalClose2 = useRef();
  const modalClose3 = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      playCursor();
    }
  }, []);
  function playCursor() {
    try {
      let client_cursor = document.getElementById("client_cursor");
      document.addEventListener("mousemove", (e) => {
        const target = e.target;
        let tHero = gsap.context(() => {
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

          // Home Page Client Cursor
          if (target.closest(".testimonial__img")) {
            tl.to(
              client_cursor,
              {
                opacity: 1,
                ease: "power4.out",
              },
              "-=0.3"
            );
          } else {
            t2.to(
              client_cursor,
              {
                opacity: 0,
                ease: "power4.out",
              },
              "-=0.3"
            );
          }
        });
        return () => tHero.revert();
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <Head>
      <title>XSUSTAIN | Digital Solutions for Business Growth</title>

      <meta name="description" content="XSUSTAIN is a leading digital agency specializing in web development, mobile apps, CRM solutions, social media management, and branding to drive business success." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="digital agency, web development, mobile apps, CRM solutions, branding, social media management, business growth" />
      <meta name="author" content="XSUSTAIN" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="XSUSTAIN | Digital Solutions for Business Growth" />
      <meta property="og:description" content="Explore cutting-edge digital solutions with XSUSTAIN, from web and mobile development to CRM and social media growth strategies." />
      <meta property="og:image" content="https://www.xsustain.io/logo.png" />
      <meta property="og:url" content="https://www.xsustain.io" />


      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="XSUSTAIN | Digital Solutions for Business Growth" />
      <meta name="twitter:description" content="XSUSTAIN delivers top-notch digital services, including web development, branding, CRM solutions, and social media marketing." />
      <meta name="twitter:image" content="https://www.xsustain.io/logo.png" />

      </Head>
      <main>
        <div className="cursor" id="client_cursor">
          Play
        </div>
        <RootLayout header="header3" footer="footer1">
          <DigitalAgencyHero />
          <DigitalAgencyRoll />
          <DigitalAgencyAbout />
          <DigitalAgencyService />
          <DigitalAgencyPortfolio />
          <Team1></Team1>
          <DigitalAgencyBrand></DigitalAgencyBrand>
          <DigitalMarketingWorkflow />
          <DigitalMarketingPrice />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>

      {/* Modal 1 */}
      <div
        className="modal__testimonial"
        id="modal_testimonial"
        ref={modalTestimonial1}
      >
        <div className="modal__testimonial-content">
          <span className="modal__close" id="modal_close" ref={modalClose1}>
            <i className="fa-solid fa-xmark"></i>
          </span>
          <iframe
            src="https://www.youtube.com/embed/vZgyWfmw_Kw"
            title="Testimonial Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Modal 2 */}
      <div
        className="modal__testimonial"
        id="modal_testimonial2"
        ref={modalTestimonial2}
      >
        <div className="modal__testimonial-content">
          <span className="modal__close" id="modal_close2" ref={modalClose2}>
            <i className="fa-solid fa-xmark"></i>
          </span>
          <iframe
            src="https://www.youtube.com/embed/JulIeG1V8T4"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Modal 3 */}
      <div
        className="modal__testimonial"
        id="modal_testimonial3"
        ref={modalTestimonial3}
      >
        <div className="modal__testimonial-content">
          <span className="modal__close" id="modal_close3" ref={modalClose3}>
            <i className="fa-solid fa-xmark"></i>
          </span>
          <iframe
            src="https://www.youtube.com/embed/7QkL-40FRfE"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DigitalAgency;
