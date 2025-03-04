import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.svg";
import Shape11 from "../../../public/assets/imgs/shape/11.png";
import Shape12 from "../../../public/assets/imgs/shape/12.png";
import Image from "next/image";

const Canvas = ({ bladeMode = "", ofCanvasArea }) => {
  const [accordion, setAccordion] = useState(0);
  const [subAccordion, setSubAccordion] = useState(0);
  const headerTitle = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        let rootParent = headerTitle.current.children;
        for (let i = 0; i < rootParent.length; i++) {
          let firstParent = rootParent[i].children;
          for (let j = 0; j < firstParent.length; j++) {
            if (firstParent[j].className.includes("header_title")) {

              let arr = firstParent[j].children[0].textContent.split("");
              let spanData = "";
              for (let k = 0; k < arr.length; k++) {
                if (arr[k] == " ") {
                  spanData += `<span style='width:2vw;'>${arr[k]}</span>`;
                } else {
                  spanData += `<span>${arr[k]}</span>`;
                }
              }
              let result = '<div class="menu-text">' + spanData + "</div>";
              firstParent[j].children[0].innerHTML = result;
            }
          }
        }
      }, 10);
    }
  }, []);
  const openData = (data) => {
    setAccordion(data);
  };
  const openSubData = (data) => {
    setSubAccordion(data);
  };
  const closeCanvas = () => {
    ofCanvasArea.current.style.opacity = "0";
    ofCanvasArea.current.style.visibility = "hidden";
    if (bladeMode) {
      let header_bg = bladeMode;
      header_bg.style.setProperty("mix-blend-mode", "exclusion");
    }
  };
  return (
    <>
      <div className="offcanvas__area" ref={ofCanvasArea}>
        <div className="offcanvas__body">
          <div className="offcanvas__left">
            <div className="offcanvas__logo">
              <Link href="/digital-agency">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={logoWhite2}
                  alt="Offcanvas Logo"
                />
              </Link>
            </div>
            <div className="offcanvas__social">
              <h3 className="social-title">Follow Us</h3>
              <ul>
                <li>
                  <a href="https://www.instagram.com/xsustain.io" target="_blank">Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100092410189555" target="_blank">Facebook</a>
                </li>
                <li>
                  <a href="https://tn.linkedin.com/company/xsustain" target="_blank">Linkedin</a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@xsustain" target="_blank">Tiktok</a>
                </li>
              </ul>
            </div>
         
          </div>
          <div className="offcanvas__mid">
            <div className="offcanvas__menu-wrapper">
              <nav className="offcanvas__menu">
                <ul className="menu-anim title" ref={headerTitle}>
                  <li>
                    <div className="header_title">
                      <Link href={"/digital-agency"}>HOME</Link>
                    
                    </div>
                   
                  </li>
                  <li>
                    <div className="header_title d-flex">
                      <Link href={"/service"}>SERVICE</Link>
                     
                    </div>
                   
                  </li>
                  <li>
                    <div className="header_title d-flex">
                      <Link href={"/portfolio"}>PORTFOLIO</Link>
                     
                    </div>
                   
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/faq"}>FAQS</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/contact"}>CONTACT</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="offcanvas__right">
            <div className="offcanvas__search">
           
            </div>
            <div className="offcanvas__contact">
              <h3>Get in touch</h3>
              <ul>
              <li>
                    <a href="tel:+(216)58113798">+(216) 58 - 113 - 798</a>
                  </li>
                  <li>
                    <a href="tel:+(216)22199957">+(216) 22 - 199 - 957</a>
                  </li>
                  <li>
                    <a href="mailto:contact@xsustain.io">contact@xsustain.io</a>
                  </li>
                  <li>
                    <span>
                    40 Av. Habib Bourguiba, Bardo <br /> Tunisia
                    </span>
                  </li>
              </ul>
            </div>
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape11}
              alt="shape"
              className="shape-1"
            />
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape12}
              alt="shape"
              className="shape-2"
            />
          </div>
          <div className="offcanvas__close">
            <button type="button" onClick={closeCanvas}>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
