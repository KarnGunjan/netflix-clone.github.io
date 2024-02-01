import React from "react";
import "./FirstNav.css";
import logoimg from "../Resources/Netflix-Brand-Logo.png";

function FirstNav() {
  return (
    <div className="bg-image">
      <div className="ist-comp">
        <nav className="nav">
          <div>
            <img className="logo" src={logoimg} alt="" />
          </div>
          <div className="menu">
            <select className="language">
              <option value="Hindi">English</option>
              <option value="Hindi">Hindi</option>
            </select>
            <div className="signin">Sign In</div>
          </div>
        </nav>
        <div className="content">
          <div className="offer">
            Enjoy big movies, hit series and more from ₹149.
          </div>
          <div className="join-cancel">Join today. Cancel anytime.</div>
          <div className="ready-to-watch">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="start">
            <div className="email">Email Address</div>
            <div className="getstarted">Get Started &gt; </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstNav;
