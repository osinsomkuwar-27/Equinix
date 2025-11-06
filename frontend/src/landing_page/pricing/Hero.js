import React from 'react';

function Hero() {
    return (
      <div className="container">
        <div className="row text-center mt-5 mb-5">
          <h1 className="fs-3 mt-5">Charges</h1>
          <p className="text-muted mt-3 fs-4">List of all charges and taxes</p>
          <div className="col-4 p-5 mt-5">
            <img src="media/images/pricingEquity.svg" alt="price" />
            <h3 className="mt-3">Free equity delivery</h3>
            <p className="text-muted fs-6 mb-5">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-5 mt-5">
            <img src="media/images/other-trades.svg" alt="otprice" />
            <h3 className="mt-3">Intraday and F&O trades</h3>
            <p className="text-muted fs-6">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-5 mt-5">
            <img src="media/images/pricingEquity.svg" alt="pprice" />
            <h3 className="mt-3">Free direct MF</h3>
            <p className="text-muted fs-6">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Hero;