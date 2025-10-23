import React from 'react';

function Hero() {
    return (
      <div className="container">
        <div className="text-center mt-5 p-3">
          <h1>Zerodha Products</h1>
          <h3 className="text-muted mt-3 fs-4">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <h5 className="mt-3">
            Check out our{" "}
            <a href="" style={{ textDecoration: "none" }}>
              investment offerings →
            </a>
          </h5>
        </div>
      </div>
    );
}

export default Hero;