import s from "./footer.module.css";
import cn from 'classnames';

const Footer = () => {
  return (
    <footer>
      <div className={cn(s.wrapper)}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </footer>
  );
};

export default Footer;
