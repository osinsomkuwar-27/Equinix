import React from "react";
import OpenAccount from "../OpenAccount";

function Signup() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5">
        <h2>Open a free demat and trading account online</h2>
        <p className="text-muted fs-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
        <div className="col-md-6 text-center mt-5">
          <img src="media/images/signup.png" alt="Signup"/>
        </div>
        <div className="col-md-6 text-center mt-5">
          <h1></h1>
        </div>
      </div>
    </div>
    // <>
    // <OpenAccount />
    // </>
  );
}

export default Signup;
