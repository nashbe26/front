import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link.js";
import { InlineWidget, PopupWidget } from "react-calendly";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingPrice = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });
        let pricing_timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".price__table",
            start: "top center",
          },
        });

        gsap.set(".animation_from_bottom", { yPercent: 50 });

        pricing_timeline.to(".animation_from_bottom", {
          yPercent: 0,
          duration: 2,
          ease: "power4.out",
        });

        gsap.set(".animation_from_top", { yPercent: -50, opacity: 0 });
        pricing_timeline.to(
          ".animation_from_top",
          {
            yPercent: 0,
            duration: 2,
            opacity: 1,
            ease: "power4.out",
          },
          "-=2"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="price__area pt-130 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">F.A.Q TABEL</h2>
                <h3 className="sec-title title-anim">
                  Be kind to your <br />
                  mind
                </h3>
              </div>
              <div className="faq__list-3">
                <Accordion defaultActiveKey="0" className="accordion">
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header>
                      What is XSUSTAIN?
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                        XSUSTAIN is a digital agency specializing in 
                        software development, mobile app development, 
                        e-commerce solutions, social media management, 
                        branding, and video production. We help businesses 
                        optimize their digital presence and streamline operations.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" className="accordion-item">
                    <Accordion.Header>
                    How can I contact XSUSTAIN?
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                        You can reach us via email at 
                        contact@xsustain.io or 
                        through our social media channels.


                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="accordion-item">
                    <Accordion.Header>
                    What industries does XSUSTAIN serve?

                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                        We primarily work with  e-commerce businesses, service providers
                        and corporate clients looking for digital transformation solutions.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" className="accordion-item">
                    <Accordion.Header>
                    Can you manage my social media accounts?
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                        Yes, we provide end-to-end social media management, 
                        including content creation, posting schedules, 
                        audience engagement, and analytics tracking.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4" className="accordion-item">
                    <Accordion.Header>
                    Do you create branding materials?
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                        Yes, we offer logo design, 
                        brand identity development, packaging design, 
                        and more to help establish a strong brand presence.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="price__table">
                <div className="price__item animation_from_bottom">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className="price__info">
                    <h2 className="price__type">MORE INFORMATIONS ?</h2>
                    <h3 className="price__title">Get in Touch Now</h3>
                    <p>
                    Dive into the transformative pages of XSUSTAIN and unlock the blueprint for impactful change.
                    </p>
                  </div>
                  <div className="price__amount">
                    <h4 className="best-value"  onClick={() => window.open("https://calendly.com/alatouatiii/30min?back=1&month=2024-04",'_blank') }>BOOK A CALL</h4>
                   
                  </div>
                </div>
                <div className="price__item-2 animation_from_bottom">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                    <h3 className="price__title">Get in Touch Now</h3>

                  </div>
                  <div className="price__info">
                    <p>
                    Dive into the transformative pages of XSUSTAIN and unlock the blueprint for impactful change.
                    </p>
                  </div>
                  <div className="price__amount">
                    <h4 className="best-value"   onClick={() => window.open("https://calendly.com/alatouatiii/30min?back=1&month=2024-04",'_blank') }>BOOK A CALL</h4>
                   
                  </div>
                </div>

              </div>
              <div className="price__btn btn_wrapper">
                <Link
                  href="/contact"
                  className="wc-btn-black btn-hover btn-item"
                >
                  <span></span> Contact us <br />
                  Now <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingPrice;
