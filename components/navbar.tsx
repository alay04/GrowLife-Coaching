"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

interface MenuItem {
  title: string;
  url?: string;
  children?: { title: string; url: string }[];
}

interface NavbarProps {
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const textColor = path === "/" ? "" : "black";

  // Desktop dropdown
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const desktopRef = useRef<HTMLUListElement | null>(null);

  // Mobile dropdowns
  const [openChild, setOpenChild] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        desktopRef.current &&
        !desktopRef.current.contains(e.target as Node)
      ) {
        setOpenDesktopMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDesktopMenu = (title: string) => {
    setOpenDesktopMenu(openDesktopMenu === title ? null : title);
  };

  const toggleChild = (title: string) => {
    setOpenChild(openChild === title ? null : title);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 p-6 ${
        isScrolled ? "bg-green-50 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold flex flex-row items-center gap-4 justify-between"
        >
          <img className="h-12" src="/logo_cropped.png" alt="" />
          <div className="flex items-center flex-col gap-0">
            <p className="text-[#f9ca56] uppercase">GROW</p>
            <p className="text-[#08f345] font-bold text-lg uppercase">
              LIFE COACHING
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul
          ref={desktopRef}
          className="hidden text-gray-900 md:flex gap-8 text-lg relative"
        >
          {menuItems.map((item) => {
            const isOpenDesktop = openDesktopMenu === item.title;
            return (
              <li key={item.title} className="relative">
                <button
                  onClick={() =>
                    item.children ? toggleDesktopMenu(item.title) : null
                  }
                  className={`${
                    isScrolled
                      ? "text-gray-900"
                      : textColor === "black"
                        ? "text-gray-900"
                        : "text-white"
                  } hover:text-green-500 transition-colors flex items-center gap-2`}
                >
                  {item.url ? (
                    <Link href={item.url}>{item.title}</Link>
                  ) : (
                    <span>{item.title}</span>
                  )}

                  {item.children &&
                    (isOpenDesktop ? <FiChevronUp /> : <FiChevronDown />)}
                </button>

                {/* Desktop dropdown (CLICK-based) */}
                {item.children && isOpenDesktop && (
                  <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-4 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.url}
                        className="block whitespace-nowrap px-8 text-lg py-2 hover:bg-green-100"
                        onClick={() => setOpenDesktopMenu(null)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-3xl ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-amber-50/70 backdrop-blur-lg flex flex-col items-center justify-center gap-6 text-gray-900 text-3xl md:hidden p-6">
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>

          {menuItems.map((item) => (
            <div key={item.title} className="w-full text-center">
              <button
                onClick={() =>
                  item.children ? toggleChild(item.title) : setIsOpen(false)
                }
                className="flex items-center justify-center gap-3 w-full hover:text-green-600 transition-colors"
              >
                {item.url ? (
                  <Link href={item.url} onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                ) : (
                  <span>{item.title}</span>
                )}

                {item.children &&
                  (openChild === item.title ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  ))}
              </button>

              {/* Mobile children */}
              {item.children && openChild === item.title && (
                <div className="mt-3 bg-green-100 rounded-md py-3 flex flex-col gap-3 text-xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.title}
                      href={child.url}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-green-600"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
