import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>App Login</Link>
          </li>
          <li>
            <Link to={"admin"}>Dashboard Login</Link>
          </li>
          <li>
            <Link to={"signup"}>Create Create Account</Link>
          </li>
          <li>
            <Link to={"resetPassword"}>Forgot Password?</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
