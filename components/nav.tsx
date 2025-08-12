"use client";

import { useEffect, useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("about");

  useEffect(() => {
    const handleHashChange = () => {
      const newActiveNav = window.location.hash.replace("#", "") || "about";
      setActiveNav(newActiveNav);
      // document.getElementById(newActiveNav)?.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        <li>
          <a
            className={`group flex items-center py-3 ${activeNav === "about" ? "active" : ""
              }`}
            href="#about"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              About
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${activeNav === "experience" ? "active" : ""
              }`}
            href="#experience"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Experience
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${activeNav === "writing" ? "active" : ""
              }`}
            href="#writing"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Writing
            </span>
          </a>
        </li>
        {/* <li>
          <a
            className={`group flex items-center py-3 ${activeNav === "sources" ? "active" : ""
              }`}
            href="#sources"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Sources
            </span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
