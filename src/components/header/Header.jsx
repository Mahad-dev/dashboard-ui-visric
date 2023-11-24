import React, { useEffect, useMemo, useRef, useState } from "react";
import { Bell, Info, Moon, Search } from "../icons/Icons";
import { navLinks } from "../sidebar/NavLinks";
import { useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  const handleTheme = () => {
    const htmlElement = document.documentElement;
    const isDarkModeEnabled = !htmlElement.classList.contains("dark");
    htmlElement.classList.toggle("dark", isDarkModeEnabled);
    localStorage.setItem("theme", isDarkModeEnabled ? "dark" : "light");
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || (!storedTheme && prefersDarkMode)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Add event listener for changes in system color scheme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const isDarkModeEnabled = mediaQuery.matches;
      document.documentElement.classList.toggle("dark", isDarkModeEnabled);
      localStorage.setItem("theme", isDarkModeEnabled ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const CurrentPage = useMemo(() => {
    return navLinks.find((item) => location.pathname.includes(item.path)).name;
  }, [location.pathname]);

  const [dropDown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to handle outside clicks
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <header className="flex items-center justify-between bg-body-light dark:bg-body-dark fixed z-[9999] w-[calc(100%-360px)] top-7">
      <div className="flex flex-col">
        <span className="text-[#707EAE] text-sm dark:text-primary">
          Pages/{CurrentPage}
        </span>
        <h3 className="text-3xl font-bold">
          {CurrentPage === "Dashboard" ? "Main Dasboard" : CurrentPage}
        </h3>
      </div>
      <div className="shadow-light dark:shadow-none bg-primary dark:bg-secondary  min-h-[61px] rounded-[30px] p-[10px] flex justify-center items-center gap-3">
        <div className="min-w-[214px] max-w-[214px] relative">
          <input
            className="w-full outline-none border-none h-[40px] p-4 pl-[2rem] rounded-full bg-body-light dark:bg-body-dark"
            placeholder="Search"
            type="text"
          />
          <Search className="absolute top-2/4 translate-y-[-50%] left-3" />
        </div>
        <div className="flex items-center gap-3">
          <Bell className="cursor-pointer fill-gray dark:fill-primary" />
          <Moon
            onClick={handleTheme}
            className="cursor-pointer fill-gray dark:fill-primary"
          />
          <Info className="cursor-pointer fill-gray dark:fill-primary" />
        </div>
        <figure
          onClick={() => setShowDropdown(!dropDown)}
          ref={dropdownRef}
          className="w-[41px] h-[41px] relative cursor-pointer bg-gray rounded-full"
        >
          <img
            className="w-full h-full rounded-full overflow-hidden object-cover"
            src="https://i.ibb.co/ngZfJGg/2d815373-4633-4d20-b408-1e64ff7b385d.png"
            alt="User profile"
          />
          {dropDown && <ProfileInfo />}
        </figure>
      </div>
    </header>
  );
}

export default Header;

function ProfileInfo() {
  return (
    <ul className="shadow-light dark:shadow-none absolute top-[40px] left-[-100px] min-w-[150px] max-w-[150px] font-medium text-[12px] text-gray flex flex-col gap-2 rounded-[10px] bg-body-light dark:bg-body-dark p-[8px]">
      {["Name: Mahad Khurshid", "Age: 22", "Education: BScs" , "Profession: Software Engineer"].map((item) => (
        <li
          className="cursor-pointer hover:text-base-blue dark:hover:text-primary"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
