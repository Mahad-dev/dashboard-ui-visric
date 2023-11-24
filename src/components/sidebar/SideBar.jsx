import React from "react";
import { NavLink as Link, useLocation } from "react-router-dom";
import { navLinks } from "./NavLinks";

function SideBar({ width }) {
  const location = useLocation();
  const pathname = location.pathname;
  const sideBarStyle = {
    width: width,
    maxWidth: width,
  };
  return (
    <aside
      style={sideBarStyle}
      className="bg-primary dark:bg-secondary pl-4 pt-8"
    >
      <div className="font-bold text-[26px] mb-[40px] mt-[20px] ml-[45px]">Visric</div>
      <ul className="pl-4">
        {navLinks.map((route, index) => (
          <li
            key={index}
            className={`py-[10px] rounded-[4px]  text-gray dark:text-primary`}
          >
            <Link
              to={route.path}
              className={({ isActive }) =>
                `flex items-center gap-[18px] py-[3px] ${
                  isActive && "border-r-[3px] border-r-blue dark:border-purple"
                }`
              }
            >
              <span>
                {React.cloneElement(route.icon, {
                  className: `fill-gray dark:fill-primary ${
                    pathname.includes(route.path) && "!fill-blue"
                  }`,
                })}
              </span>
              <span className={`${pathname.includes(route.path) ? 'font-bold text-font dark:text-primary' : 'font-medium'}`}>{route.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
