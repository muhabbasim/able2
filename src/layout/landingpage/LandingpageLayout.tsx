import { Outlet } from 'react-router-dom';
import { TalimProvider as ContextProvider } from "kgp-landingpage/context/LandContext";
import { ToastContainer } from 'react-toastify';
import ThemeBtnSection from 'kgp-landingpage/component/theme-btn/ThemeBtnSection';
import SidebarSection from 'kgp-landingpage/component/sidebar/SidebarSection';

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import "flag-icons/css/flag-icons.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "kgp-landingpage/styles/css/all.min.css";
import "kgp-landingpage/styles/css/icofont.min.css";
import "kgp-landingpage/styles/css/sharp-regular.min.css";
import "kgp-landingpage/styles/css/sharp-solid.min.css";
import "kgp-landingpage/styles/css/style.css";

// ==============================|| LAYOUT - BLANK PAGES ||============================== //

export default function LandingpageLayout() {
  return (
    <ContextProvider>
      {/* <ThemeBtnSection /> */}
      <SidebarSection />
      <ToastContainer />
      <Outlet />
    </ContextProvider>
  )
}
