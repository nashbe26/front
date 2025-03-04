import { useEffect, useRef } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";

import ala from "../../../public/assets/imgs/team/ala.webp";
import ali from "../../../public/assets/imgs/team/ali.webp";
import ikbel from "../../../public/assets/imgs/team/ikbel.webp";
import wala from "../../../public/assets/imgs/team/wala.webp";
import ahmed from "../../../public/assets/imgs/team/ahmed.webp";
import hedi from "../../../public/assets/imgs/team/hedi.webp";
import houssem from "../../../public/assets/imgs/team/houssem.webp";
import dali from "../../../public/assets/imgs/team/dali.webp";
import dhia from "../../../public/assets/imgs/team/dhia.webp";
import hatem from "../../../public/assets/imgs/team/hatem.webp";
import mohamed from "../../../public/assets/imgs/team/mohamed.webp";
import lobna from "../../../public/assets/imgs/team/lobna.webp";
import malek from "../../../public/assets/imgs/team/malek.webp";
import yassine from "../../../public/assets/imgs/team/yassine.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link.js";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";


const DATA = [{
  img:ali,
  name:"ALI BEN ABDALLAH",
  job:"CEO & CO-FOUNDER"
},{
  img:ala,
  name:"TOUATI ALAA",
  job:"CTO & CO-FOUNDER"
},{
  img:houssem,
  name:"HOUSSEM ABDA",
  job:"CREATIVE DIRECTOR & GRAPHIC DESIGNER"
},{
  img:hatem,
  name:"HATEM BEN CHIKH ",
  job:"FULL STACK DEVELOPER"
},{
  img:dali,
  name:"MOHAMED ALI NEFZI",
  job:"GRAPHIC DESIGNER"
},{
  img:ikbel,
  name:"IKBEL BEN ABDALLAH",
  job:"COMMUNITY MANAGER"
},{
  img:wala,
  name:"WALA CHAKLEBOU",
  job:"COMMUNITY MANAGER"
},{
  img:dhia,
  name:"DHIA INOUBLI",
  job:"VIDEO GRAPHER & VIDEO EDITOR"
},{
  img:malek,
  name:"MALEK GHARBI",
  job:"VIDEO GRAPHER & VIDEO EDITOR"
},{
  img:lobna,
  name:"LOBNA BOUGHDIRI",
  job:"VIDEO EDITOR"
},{
  img:mohamed,
  name:"MOHAMED BOU SBATA",
  job:"PHOTOGRAPHER"
},{
  img:hedi,
  name:"HEDI AYARI",
  job:"FULL STACK DEVELOPER"
},{
  img:hatem,
  name:"HATEM BEN CHIKH ",
  job:"FULL STACK DEVELOPER"
},{
  img:ahmed,
  name:"AHMED AYARI ",
  job:"FULL STACK DEVELOPER"
},{
  img:yassine,
  name:"YASSINE TABRAKI ",
  job:"FULL STACK DEVELOPER"
}]

const Team1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", mousemoveHandler);
  }
  function mousemoveHandler(e) {
    let team_cursor = document.getElementById("team_cursor");
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

      // Team Page Team Cursor
      if (target.closest(".team__slider")) {
        tl.to(
          team_cursor,
          {
            opacity: 1,
            ease: "power4.out",
          },
          "-=0.3"
        );
      } else {
        t2.to(
          team_cursor,
          {
            opacity: 0,
            ease: "power4.out",
          },
          "-=0.3"
        );
      }
    });
    return () => tHero.revert();
  }
  return (
    <>
      <section className="team__area-6">
        <div className="container line pt-120">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 offset-xxl-4 offset-xl-4">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Talented team{" "}
                </h2>
                <p>
                  We’re a diverse team that works as fancies attention to
                  details, enjoys working on client satisfaction and aspires to design
                  the dent in the universe.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="team__slider">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            speed={2000}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {DATA.map((x,index)=>{
              return(
                <SwiperSlide key={index}>
                  <div className="team__slide">
                    <Link href="/">
                      <Image
                        priority
                        style={{ width: "100%", height: "380px",objectFit:"cover",objectPosition:"18% 0" }}
                        src={x.img}
                        alt="Team Member"
                      />
                      <div className="team__info">
                        <h4 className="team__member-name-6">{x.name}</h4>
                        <h5 className="team__member-role-6">{x.job}</h5>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        <div className="container line pt-150">
          <div className="line-3"></div>
        </div>

    
      </section>
      {/* <section className="team__btm">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 pb-140 text-anim">
                <h2 className="sec-title title-anim">
                  Your digital products & services ensured by our talented team
                </h2>
                <p>
                  A hybrid team with hybrid culture. More than 20 people,
                  including designers, engineers, creatives, thinkers, creative
                  table and media experts always looking from a new perspective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Team1;
