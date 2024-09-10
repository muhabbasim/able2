import React from "react";
import NavSection from "../navigation/NavSection";
import { useTalimContext } from "../../context/HomeContext";
import { Link } from "react-router-dom";
import Language from "components/language/Language";
import FullScreen from "layout/Dashboard/Header/HeaderContent/FullScreen";
interface HeaderProps {

  btnStyle: string;
  loginBtn?: boolean;
}
const HeaderSection8: React.FC<HeaderProps> = ({
  btnStyle,
  loginBtn,
}) => {

  const { isHeaderFixed, handleSidebarOpen } = useTalimContext();
  return (
    <div
      className={`tl-header ${
        isHeaderFixed ? "sticky" : ""
      }`}
    >
      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="col-xl-2 col-lg-2">
            <div className="row align-items-center">
              <div className="col-lg-12 col-6">
                <div className="logo">
                  <Link to="/">
                    <img src="/kgb-logo2.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="d-lg-none d-flex justify-content-end col-6">
                <button
                  className="tl-hamburger navbar-toggler"
                  onClick={handleSidebarOpen}
                >
                  <i className="icofont-navigation-menu"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="tl-nav-menu">
              <NavSection ulPosition="" liStyle="" />
            </div>
          </div>

          <div className="col-4 d-lg-block d-none">
            
            <div className="tl-header-actions d-flex justify-content-end">
              {loginBtn ? (
                <>
                  <Language/>
                  <FullScreen />
                  <Link to="/login" className={btnStyle}>
                    <i className="fa-regular fa-user"></i> Login
                  </Link>
                </>
              ) : (
                <>
                  <Language/>
                  <Link to="/register" className="kb-10-def-btn">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection8;
