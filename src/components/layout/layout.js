import cn from "classnames";
import s from "./layout.module.css";

const Layout = ({ id, title, urlBg, colorBg, colorTitle, children }) => {
  const sectionStyle = {};
  if (urlBg) {
    sectionStyle.backgroundImage = `url(${urlBg})`;
  }
  if (colorBg) {
    sectionStyle.backgroundColor = `${colorBg}`;
  }

  return (
    <section id={id} className={cn(s.root)} style={sectionStyle}>
      <div className={cn(s.wrapper)}>
        <article>
          <div className={cn(s.title)}>
            <h3 style={{ color: `${colorTitle}` }}>{title}</h3>
            <span className={cn(s.separator)}></span>
          </div>
          <div className={cn(s.desc, s.full)}>{children}</div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
