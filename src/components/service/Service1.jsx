import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1.png";
import Service12 from "../../../public/assets/imgs/service/2.jpg";
import Service13 from "../../../public/assets/imgs/service/3.png";
import Service14 from "../../../public/assets/imgs/service/4.png";
import Service15 from "../../../public/assets/imgs/service/5.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          gsap.to(".service__list-6", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".service__list-6",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
            },
          });

          gsap.to(".service__image-wrap", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".mid-content",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
              markers: false,
            },
          });

          let service_images = gsap.utils.toArray(".service__image");
          let service_imagess = gsap.utils.toArray(".service__image img");
          let service_items = gsap.utils.toArray(".service__item-6");

          if (service_items) {
            service_items.forEach((image, i) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top top-=600",
                  markers: false,
                },
              });
              tl.to(service_images[i], {
                zIndex: "1",
              });
              tl.to(
                service_imagess[i],
                {
                  opacity: 0,
                  duration: 1,
                  scale: 1.2,
                  ease: "power4.out",
                },
                "-=1"
              );
            });
          }

          let navItems = gsap.utils.toArray(".service__list-6 li a");
          if (navItems) {
            navItems.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                e.preventDefault();
                const ids = nav.getAttribute("href");
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: ids,
                  ease: "power4.out",
                });
              });
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">

                    <li>
                      <a href="#service_1">
                        Web & Mobile <br />
                        Development
                      </a>
                    </li>

                    <li>
                      <a href="#service_2">
                        Video <br /> Production
                      </a>
                    </li>
                    <li>
                      <a href="#service_3">
                        Digital  <br /> Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#service_4">
                        Branding and <br />
                        Strategy
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mid-content">
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service11}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service12}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service13}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                </div>
                <div className="right-content">
                  <div className="service__items-6">
                    <div
                      className="service__item-6 has__service_animation"
                      id="service_1"
                      data-secid="1"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service11}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Web & Mobile Development
                        </h2>
                        <p>
                          Unlock the full potential of your digital presence with our comprehensive
                          Web & Mobile Development services.
                          From captivating websites to intuitive mobile apps, we craft seamless
                          digital experiences tailored to your unique needs.
                        </p>
                        <ul>
                          <li>+ Back End Development</li>
                          <li>+ Front End Development</li>
                          <li>+ React Native</li>
                          <li>+ Fluter Framework</li>
                          <li>+ WordPress</li>
                          <li>+ API Development</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_2"
                      data-secid="2"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service12}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Video Production
                        </h2>
                        <p>
                          Elevate your brand is storytelling with our expert Video Production services. From concept to creation, we bring your
                          vision to life with stunning visuals and compelling narratives that captivate and engage your audience.
                        </p>
                        <ul>
                          <li>+ Scriptwriting</li>
                          <li>+ High Quality Filming</li>
                          <li>+ Professional Video Editing</li>
                          <li>+ Visual Effects</li>
                          <li>+ Motion Graphics</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_3"
                      data-secid="3"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service13}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Digital Marketing
                        </h2>
                        <p>
                          Transform your brand is online presence with our
                          comprehensive Digital Marketing solutions. From SEO
                          strategies to engaging content and social media campaigns,
                          we enhance your visibility and reach, ensuring maximum impact
                          and engagement with your target audience.
                        </p>
                        <ul>
                          <li>+ SEO</li>
                          <li>+ PPC Advertising</li>
                          <li>+ Social Media Marketing</li>
                          <li>+ Content Marketing</li>
                          <li>+ Email Marketing</li>
                          <li>+ Analytics and Reporting</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_4"
                      data-secid="4"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                        Branding and strategy
                        </h2>
                        <p>
                          Unlock the full potential of your brand with our innovative
                          Branding and Strategy services. From crafting compelling brand narratives to developing strategic
                          marketing plans, we help you stand out in a crowded market and
                          build lasting connections with your audience.
                        </p>
                        <ul>
                          <li>+ Brand Identity Development</li>
                          <li>+ Market Research</li>
                          <li>+ Brand Positioning</li>
                          <li>+ Strategic Planning</li>
                          <li>+ Competitive Analysis</li>
                          <li>+ Brand Guidelines</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service1;
