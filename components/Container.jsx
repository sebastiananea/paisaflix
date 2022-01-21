import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import s from "./Container.module.css";
const Container = (props) => {
  return (
    <div className={s.container}>
      <Navigation />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Container;
