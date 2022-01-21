import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerLeft}>
        <h3>Paisanos</h3>
      </div>
      <div className={s.footerRight}>
        <div className={s.lists}>
          <ul>
            <li>asdasdasd</li>
            <li>asds</li>
            <li>asdasdsa</li>
            <li>asdasd</li>
          </ul>
          <ul>
            <li>asdasdasd</li>
            <li>asds</li>
            <li>asdasdsa</li>
            <li>asdasd</li>
          </ul>
          <ul>
            <li>asdasdasd</li>
            <li>asds</li>
            <li>asdasdsa</li>
            <li>asdasd</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
