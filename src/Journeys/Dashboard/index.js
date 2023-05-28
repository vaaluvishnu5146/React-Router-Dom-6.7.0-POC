import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function index() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"createUsers"}>Create Users</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Manage Users</Link>
          </li>
          <li>
            <Link to={"createCategories"}>Create Categories</Link>
          </li>
          <li>
            <Link to={"manageCategories"}>Manage Categories</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
