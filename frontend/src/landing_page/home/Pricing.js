import React from "react";

function Pricing() {
  return (
    <section className="container my-5 mb-5">
      <div className="row align-items-center">
        {/* Left content */}
        <div className="col-md-5">
          <h2 className="fw-bold">Unbeatable pricing</h2>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{textDecoration:"none"}}>See pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          
        </div>

        {/* Right pricing items */}
        <div className="col-md-7 d-flex justify-content-around flex-wrap">
        {/* Item 1 */}
        <div className="d-flex align-items-center mx-3">
        <img src="media/images/pricing-eq.svg"></img>
        <p className="text-muted ms-2 mb-0">free account opening</p>
        </div>

        {/* Item 2 */}
        <div className="d-flex align-items-center mx-3">
        <img src="media/images/pricing-eq.svg"></img>
        <p className="text-muted ms-2 mb-0">
          free equity &amp;mutuals
        </p>
        </div>

        {/* Item 3 */}
        <div className="d-flex align-items-center mx-3">
        <img src="media/images/other-trades.svg"></img>
        <p className="text-muted ms-2 mb-0">
          intraday and <br /> f&amp;o
        </p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
