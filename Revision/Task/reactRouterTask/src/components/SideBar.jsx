import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function SideBar() {
  const [active, setActive] = useState("tab1");

  return (
    <div className="flex gap-2">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: 280, height: 500 }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link
              to="/dashboard/products"
              className={`nav-link text-white ${
                active === "tab2" ? "active" : ""
              }`}
              onClick={() => setActive("tab2")}
            >
              Products
            </Link>
          </li>
        </ul>

        <hr />
      </div>
      <Outlet />
    </div>
  );
}

export default SideBar;
