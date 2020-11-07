import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/profile">
            Profile
          </a>
          <a class="nav-item nav-link" href="/orderSummary">
            OrderSummary
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
