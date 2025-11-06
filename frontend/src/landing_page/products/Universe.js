import React from 'react';

function Universe() {
    return (
      <div className="container mt-5 mb-5 text-center">
        <div className="row mt-5">
          <h1>The Zerodha Universe</h1>
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="col-4 p-3 mt-5 ">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="zimage"
              style={{
                width: "120px",
                height: "120px",
                display: "block",
                textalign: "center",
              }}
            />
            <p className="text-small text-muted">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-3 mt-5 ">
            <img
              src="media/images/sensibullLogo.svg"
              alt="sensimage"
              style={{ width: "120px", height: "120px", display: "block" }}
            />
            <p className="text-small text-muted">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="media/images/tijori.svg"
              alt="tiimage"
              style={{ width: "120px", height: "120px", display: "block" }}
            />
            <p className="text-small text-muted">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="media/images/streakLogo.png"
              alt="streakimage"
              style={{ width: "120px", height: "120px", display: "block" }}
            />
            <p className="text-small text-muted">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="media/images/smallcaseLogo.png"
              alt="smallimage"
              style={{ width: "120px", height: "120px", display: "block" }}
            />
            <p className="text-small text-muted">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="media/images/dittoLogo.png"
              alt="dittoimage"
              style={{ width: "120px", height: "120px", display: "block" }}
            />
            <p className="text-small text-muted">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
          <button
            className="p-2 btn btn-primary fs-5 mt-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    );
}

export default Universe;