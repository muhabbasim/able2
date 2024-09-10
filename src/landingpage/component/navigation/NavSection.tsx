import React from "react";
import { NavLink } from "react-router-dom";
interface NavProps {
  ulPosition: string;
  liStyle: string;
}

const NavSection: React.FC<NavProps> = ({ ulPosition, liStyle }) => {
  
  return (
    <ul className={ulPosition}>
      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <a role="button">
          Home <i className="fa-regular fa-angle-down"></i>
        </a>
        <ul className="tl-submenu">
          <li className="tl-submenu-li">
            <NavLink className="tl-navlink" to="/contact">
              <div className="tl-nav-details">
                <img src="/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  Owner & Director
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink className="tl-navlink" to="/contact">
              <div className="tl-nav-details">
                <img src="/assets/landing-images/shape/shape1.png" alt="Logo" />
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
            <NavLink className="tl-navlink" to="/contact">
              <div className="tl-nav-details">
                <img src="/assets/landing-images/shape/shape1.png" alt="Logo" />
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
            <NavLink className="tl-navlink" to="/contact">
              <div className="tl-nav-details">
                <img src="/assets/landing-images/shape/shape5.png" alt="Logo" />
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
            <NavLink className="tl-navlink" to="/contact">
              <div className="tl-nav-details">
                <img src="/assets/landing-images/shape/shape6.png" alt="Logo" />
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
            <NavLink className="tl-navlink" to="/contact">
              <div className="tl-nav-details">
                <img src="/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  Professional development
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </li>
      
      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>

      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <a role="button">
          Resources <i className="fa-regular fa-angle-down"></i>
        </a>
        <ul className="tl-submenu">
          <li className="tl-submenu-li">
            <NavLink className="tl-navlink" to="/blog">
              <div className="tl-nav-details">
                <img src="/assets/landing-images/shape/shape5.png" alt="Logo" />
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
            <NavLink className="tl-navlink" to="/contact">
              <div className="tl-nav-details">
                <img src="/assets/landing-images/shape/shape4.png" alt="Logo" />
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
            <NavLink className="tl-navlink" to="/contact">
              <div className="tl-nav-details">
                <img src="/assets/landing-images/shape/shape3.png" alt="Logo" />
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
            <NavLink className="tl-navlink" to="/contact">
              <div className="tl-nav-details">
                <img src="/assets/landing-images/shape/shape1.png" alt="Logo" />
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
            <NavLink className="tl-navlink" to="/contact">
              <div className="tl-nav-details">
                <img src="/assets/landing-images/shape/shape2.png" alt="Logo" />
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
