import React from 'react';

function CreateTicket() {
    return (
      <div className="conatiner">
        <div className="row p-5 mt-5 mb-5" style={{textAlign:"left"}}>
          <h3 className="fs-2 " style={{paddingLeft:"50px"}}>To create a ticket select a relevant topic</h3>
          <div className="col-4 p-5" style={{ textAlign: "left" }}>
            <h4 className="fs-5">
              <i class="fa fa-plus-circle" aria-hidden="true"></i> Account
              Related
            </h4>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Open demat account</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Minor demat account</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>NRI demat account</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Commodity</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Dematerialisation</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Fund transfer</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>MTF</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Referral program</li>
              </a>
            </ul>
          </div>
          <div className="col-4 p-5" style={{ textAlign: "left" }}>
            <h4 className="fs-5">
              <i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
            </h4>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Careers</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Zerodha Cares (CSR)</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Zerodha.tech </li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Open source</li>
              </a>
            </ul>
          </div>
          <div className="col-4 p-5" style={{ textAlign: "left" }}>
            <h4 className="fs-5">
              <i class="fa fa-bar-chart" aria-hidden="true"></i> Your Zerodha
              Account
            </h4>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Support portal</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Contact us</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>How to file a complaint?</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Status of your complaints</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Bulletin</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Circular</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Z-Connect blog</li>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <li>Downloads</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default CreateTicket;