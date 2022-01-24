import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import s from "./Navigation.module.css";
const Navigation = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState("home");

  useEffect(() => {
    if (router.pathname !== "/") {
      setClicked("");
    }
  }, []);

  return (
    <div className={s.navBar}>
      <div className={s.leftSideNav}>
        <h2 className={s.brand}>PaisaFlix</h2>
        <ul className={s.linksNav}>
          <li>
            <Link href="/">
              <a
                onClick={() => setClicked("home")}
                className={clicked === "home" ? s.links : " "}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a
                onClick={() => setClicked("contact")}
                className={clicked === "contact" ? s.links : " "}
              >
                Contact Us
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a
                onClick={() => setClicked("faq")}
                className={clicked === "faq" ? s.links : " "}
              >
                FAQ
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a
                onClick={() => setClicked("pricing")}
                className={clicked === "pricing" ? s.links : " "}
              >
                Pricing
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={s.rightSideNav}>
        <span>
          <img src="/Search.png" alt="search" />
        </span>
        <div className={s.profile}>
          <span>
            <img src="/photo.png" alt="profile-pic" />
          </span>
          <span>Soy Paisanx</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
