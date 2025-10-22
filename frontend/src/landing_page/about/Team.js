import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5 p-5">
        <h1 className=" text-center mb-5 ">People</h1>
      </div>

      <div
        className="row mt-5 p-5  text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
      >
        <div className="col-6 mt-5 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "50%", width: "60%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder & CEO</h6>
        </div>
        <div className="col-6 mt-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>{" "}
          <p>Playing basketball is his zen.</p>{" "}
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
