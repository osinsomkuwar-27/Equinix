import React from 'react';

function Hero() {
    return (
      <div className="container border-bottom">
        <div className="text-center mt-5 p-3">
          <h1 className='fs-3'>Zerodha Products</h1>
          <h3 className="text-muted mt-3 fs-4">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <h5 className="mt-3 mb-5 fs-6">
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