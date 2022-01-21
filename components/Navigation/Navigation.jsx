import Link from "next/link";
import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={s.navBar}>
      <div className={s.leftSideNav}>
        <span className={s.brand}>PaisaFlix</span>
        <ul className={s.linksNav}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Pricing</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={s.rightSideNav}>
        <span>Lupita</span>
        <span>Imagen</span>
        <span>Soy Paisanx</span>
      </div>
    </div>
  );
};

export default Navigation;
