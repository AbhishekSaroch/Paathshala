import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";

import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropDown from "../core/auth/ProfileDropDown";

// const subLinks = [
//   {
//     title: "Python",
//     link: "/catalog/python",
//   },
//   {
//     title: "javascript",
//     link: "/catalog/javascript",
//   },
//   {
//     title: "web-development",
//     link: "/catalog/web-development",
//   },
//   {
//     title: "Android Development",
//     link: "/catalog/Android Development",
//   },
// ];

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        const ans = res.data.data;
        console.log("ans is", ans);
        setSubLinks(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);

  // console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-serif text-3xl font-bold tracking-wide shadow-lg"
        >
          पाठशाला
        </Link>
        {/* Navigation links */}
        {/* Mobile Menu */}

        {/* Desktop Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="group relative cursor-pointer flex items-center gap-1">
                    <p>{link.title}</p>
                    <BsChevronDown />
                    <div className="invisible absolute left-[50%] top-[100%] z-[1000] flex w-[200px] -translate-x-1/2 translate-y-2 flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-3 group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 select-none rounded bg-richblack-5" />
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks.length ? (
                        subLinks.map((linkk, i) => (
                          <Link
                            key={i}
                            to={`/catalog/${linkk.name
                              .split(" ")
                              .join("-")
                              .toLowerCase()}`}
                            className="rounded-lg bg-transparent py-2 px-4 hover:bg-richblack-50"
                          >
                            {linkk.name}
                          </Link>
                        ))
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`${
                      matchRoute(link.path)
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {isMenuOpen && (
          <div className="absolute top-14 left-0 z-50 w-full bg-richblack-800 px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-4 text-richblack-25">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer">
                        <span>{link.title}</span>
                        <BsChevronDown />
                      </summary>
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {loading ? (
                          <p>Loading...</p>
                        ) : subLinks.length ? (
                          subLinks.map((linkk, i) => (
                            <Link
                              key={i}
                              to={`/catalog/${linkk.name
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                              onClick={() => setIsMenuOpen(false)} // close on click
                              className="hover:underline"
                            >
                              {linkk.name}
                            </Link>
                          ))
                        ) : (
                          <p>No Courses Found</p>
                        )}
                      </div>
                    </details>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`${
                        matchRoute(link.path) ? "text-yellow-25" : ""
                      }`}
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Auth Buttons for Mobile */}
            <div className="mt-6 flex flex-col gap-4">
              {token === null ? (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full rounded-md bg-richblack-700 py-2 text-white">
                      Log In
                    </button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full rounded-md bg-richblack-700 py-2 text-white">
                      Sign Up
                    </button>
                  </Link>
                </>
              ) : (
                <ProfileDropDown />
              )}
            </div>
          </div>
        )}
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
        <button
          className="mr-4 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
