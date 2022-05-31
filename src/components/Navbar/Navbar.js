import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logos/logo.png";
import CoustomLink from "../CoustomLink/CustomLink";
import "./Navbar.css";

const Navbar = ({ children }) => {
  let [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <div class="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar" style={{ background: "#fbd062" }}>
            <div className="container mx-auto">
              <div class="flex-1 px-2 mx-2">
                <img
                  style={{ width: "150px", height: "47px" }}
                  src={logo}
                  alt=""
                />
              </div>
              <div class="flex-none lg:hidden">
                <label for="my-drawer-3" class="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>

              <div class="flex-none hidden lg:block">
                <ul class="menu menu-horizontal">
                  <CoustomLink className="mr-6" to="/home">
                    Home
                  </CoustomLink>
                  <CoustomLink className="mr-6" to="/portifolio">
                    Our Portfolio
                  </CoustomLink>
                  <CoustomLink className="mr-6" to="/team">
                    Our Team
                  </CoustomLink>
                  <CoustomLink className="mr-6" to="/contuct">
                    Contact Us
                  </CoustomLink>
                  {user && (
                    <CoustomLink className="mr-6" to="/dashboard">
                      Dashboard
                    </CoustomLink>
                  )}
                  {user ? (
                    <button
                      onClick={logOut}
                      className="btn btn-primary ml-32 login rounded-lg"
                      to="/login"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>{" "}
                      Logout
                    </button>
                  ) : (
                    <Link className="ml-32 login" to="/login">
                      Login
                    </Link>
                  )}
                </ul>
              </div>
            </div>
          </div>
          {children}
        </div>

        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul
            class="menu p-4 overflow-y-auto w-80"
            style={{ background: "#fbd062" }}
          >
            <li>
              <CoustomLink className="mr-6" to="/home">
                home
              </CoustomLink>
            </li>
            <li>
              <CoustomLink className="mr-6" to="/portifolio">
                Our Portfolio
              </CoustomLink>
            </li>
            <li>
              <CoustomLink className="mr-6" to="/team">
                Our Team
              </CoustomLink>
            </li>
            <li>
              <CoustomLink className="mr-6" to="/contuct">
                Contact Us
              </CoustomLink>
            </li>
            {user && (
              <CoustomLink className="mr-6" to="/dashboard">
                Dashboard
              </CoustomLink>
            )}
            {user ? (
              <button onClick={logOut} className=" btn btn-primary mr-6 login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>{" "}
                Logout
              </button>
            ) : (
              <Link className="mr-6 login" to="/login">
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
