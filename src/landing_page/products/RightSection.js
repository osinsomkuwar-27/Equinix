import React from 'react';

function RightSection({imageURL,productName, productDescription,learnMore}) {
    return (
      <div className="container mt-5 mb-5">
        <div className="row mt-5">
          <div
            className="col-6 "
            style={{ paddingLeft: "100px", paddingTop: "110px" }}
          >
            <h3 className="fs-7">{productName}</h3>
            <p className="mt-5 fs-6">{productDescription}</p>
            <div>
              <a
                href="{learnMore}"
                style={{ textDecoration: "none" }}
              >
                Learn more{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div
            className="col-6 "
            style={{
              paddingLeft: "80px",
              lineHeight: "1.8",
              fontSize: "1.2rem",
            }}
          >
            <img src={imageURL} alt='imageurl' />
          </div>
        </div>
      </div>
    );
}

export default RightSection;