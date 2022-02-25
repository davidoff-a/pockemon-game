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
    <section id={id} className={s.root} style={sectionStyle}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3 style={{ color: `${colorTitle}` }}>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={cn(s.desc, s.full)}>{children}</div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
