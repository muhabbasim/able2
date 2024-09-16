import React from "react";
import { Link, NavLink } from "react-router-dom";
interface NavProps {
  ulPosition: string;
  liStyle: string;
}

const NavSection: React.FC<NavProps> = ({ ulPosition, liStyle }) => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can remove 'smooth' if you don't want smooth scrolling
    });
  }
  
  return (
    <ul className={ulPosition}>
      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <a role="button">
          Home <i className="fa-regular fa-angle-down"></i>
        </a>
        <ul className="tl-submenu">
          <li className="tl-submenu-li">
            <Link className="tl-navlink" onClick={handleScrollToTop} to="/users/directors">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  Owner & Director
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </Link>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/users/teachers">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  Educator
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/users/parents">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  Family
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </li>

      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <a role="button">
          Solutions <i className="fa-regular fa-angle-down"></i>
        </a>
        <ul className="tl-submenu">
          <li className="tl-submenu-li">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/feature/center_management">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape5.png" alt="Logo" />
              </div>
              <div>
                <span>
                  Center management
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/feature/family_engagement">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape6.png" alt="Logo" />
              </div>
              <div>
                <span>
                  Family dngagement
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/feature/engaging_lessons">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  Plan engaging lessons
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/feature/billing">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  Biling & payments
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </li>
      
      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <NavLink onClick={handleScrollToTop} to="/pricing">Pricing</NavLink>
      </li>

      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <a role="button">
          Resources <i className="fa-regular fa-angle-down"></i>
        </a>
        <ul className="tl-submenu">
          <li className="tl-submenu-li">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/blog">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape5.png" alt="Logo" />
              </div>
              <div>
                <span>
                  Blog
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/contact">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape4.png" alt="Logo" />
              </div>
              <div>
                <span>
                  KGP Activities
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </li>

      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <a>
          About <i className="fa-regular fa-angle-down"></i>
        </a>

        <ul className="tl-submenu">
          <li className="tl-submenu-li">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/contact">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape3.png" alt="Logo" />
              </div>
              <div>
                <span>
                  Contact Us
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/contact">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  Customer Service
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/contact">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape2.png" alt="Logo" />
              </div>
              <div>
                <span>
                  Download
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavSection;
