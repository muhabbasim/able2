import React from "react";
import HeaderSection2 from "../header/HeaderSection2";
import FooterSection2 from "../footer/FooterSection2";
import { useTalimContext } from "../../context/HomeContext";
interface LayoutProps {
  children: any;
}
const Layout3: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkTheme } = useTalimContext();
  return (
    <div
      className={`tl-3-inner tl-inner-courses-body ${
        isDarkTheme ? "dark_mode" : ""
      }`}
    >
      <HeaderSection2
        style="position-relative"
        logo="/src/assets/images/logos/logo.png"
      />
      {children}
      <FooterSection2
        darkLogo="/src/assets/images/logos/logo-dark.png"
        lightLogo="/src/assets/images/logos/logo.png"
      />
    </div>
  );
};

export default Layout3;
