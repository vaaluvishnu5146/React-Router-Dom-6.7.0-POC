import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const _navigator = useNavigate();
  return (
    <div>
      <input placeholder="Enter your Email" />
      <input placeholder="Enter your Password" />
      <button
        onClick={() =>
          _navigator("/dashboard", {
            replace: true,
          })
        }
      >
        Login
      </button>
    </div>
  );
}
