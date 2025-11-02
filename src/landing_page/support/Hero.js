import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 mt-5 mb-5" id="supportWrapper">
        <h5 className="fs-1 fw-bold">Support Center</h5>
        <a href="#" style={{ textDecoration: "none", color: "white",textDecoration:"none"}}>
          Track your ticket status
        </a>
      </div>
      <div className="row p-5 mt-5 mb-5">
        <div className="col-6 P-5">
          <h3 className="fs-3 fw-bold">How can we help you?</h3>
          <p className="fs-5">
            Find answers to common questions, explore our support articles, or</p>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
