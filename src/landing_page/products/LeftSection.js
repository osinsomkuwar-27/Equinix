import React from 'react';

function LeftSection({imageURL,productName, productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
      <div className="container  mt-5 mb-5">
        <div className="row mt-5">
          <div
            className="col-6 "
            style={{
              paddingLeft: "80px",
              paddingTop: "100px",
              lineHeight: "1.8",
              fontSize: "1.2rem",
            }}
          >
            <img src={imageURL} />
          </div>
          <div
            className="col-6 "
            style={{ paddingLeft: "100px", paddingTop: "110px" }}
          >
            <h3 className="fs-7">{productName}</h3>
            <p className='mt-3 fs-6'>{productDescription}</p>
            <div>
              <a href="{tryDemo}" style={{ textDecoration: "none" }}>
                Try demo{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              <a
                href="{learnMore}"
                style={{ textDecoration: "none", marginLeft: "100px" }}
              >
                Learn more{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
            <div className="mt-4">
              <a href="{googlePlay}">
                <img src="media/images/googlePlayBadge.svg" />
              </a>
              <a href="{appStore}" style={{ marginLeft: "50px" }}>
                <img src="media/images/appstoreBadge.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LeftSection;