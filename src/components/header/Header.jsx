import React, { useEffect } from "react";
import { Bell, Info, Moon, Search } from "../icons/Icons";

function Header() {
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

  return (
    <header className="flex items-center justify-between bg-body-light dark:bg-body-dark fixed z-[9999] w-[calc(100%-360px)] top-7">
      <div className="flex flex-col">
        <span className="text-[#707EAE] text-sm dark:text-primary">
          Pages/Dashboard
        </span>
        <h3 className="text-3xl font-bold">Main Dashboard</h3>
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
        <figure className="w-[41px] h-[41px] overflow-hidden">
          <img
            className="w-full h-full rounded-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/b940/caf9/f3a52bcc9317c793ebc094db911b237b?Expires=1701648000&Signature=lYZRBo~OqRlGfyBOr7zEnyHpg2vnF6dNUYOIEdLXzBHi37TyOEjWW1~zbIdgKO5NXu73ZlwVGYJgfQWbkGX

KseASlWxD2tlsczeIS7-Oc2l8m~cywB-4rBmefI1u1yI22j6na7rf6bN3jlXqZN6PkKadeoogCU6AKNtXSpMVkZO2AbTXv0xzLNlLdh6uTj0Bp-0y~aJh2X~9o9JaVTAgQa2IvELwnEjSnzCMUl99r9S1YcDANBXSR2b4ypycLMq8xcyOwZ-kgWWB6v1BprICZ6tW1DL9qTjII2QUzraJJubgewPDyFhcGhclkN1NfNmjCdWb0c3FX3skfK1NQzdmmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="User profile"
          />
        </figure>
      </div>
    </header>
  );
}

export default Header;
