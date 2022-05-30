import React from "react";
import logo from "../../images/logos/logo.png";
import CoustomLink from "../CoustomLink/CustomLink";

const Navbar = ({ children }) => {
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
                    home
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
                </ul>
              </div>
            </div>
          </div>
        </div>
        {children}
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul
            class="menu p-4 overflow-y-auto w-80"
            style={{ background: "#fbd062" }}
          >
            <ul class="menu menu-horizontal">
              <CoustomLink className="mr-6" to="/">
                home
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
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
