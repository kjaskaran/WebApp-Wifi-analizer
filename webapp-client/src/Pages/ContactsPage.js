import React from "react";
import image from "../images/Contact.jpg";

export function ContactsPage() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "80vh",
          color: "#f5f5f5",
        }}
      >
        <h2 className="fw-bold pt-5">Get in Touch</h2>
        <p>
          <em>
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us..
          </em>
        </p>
        <div className="row pt-5 d-flex align-items-center">
          <div className="col-md-4">
            <div>
              <h4 className="fw-bold mb-0">Contact Info</h4>
              <p>
                Email: writetowivibot@gmail.com <br />
                Phone: +1 423-456-789 <br />
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h4 className="fw-bold mb-0">Address</h4>
              <p>
                850 Fountain Street <br />
                South Cambridge, <br />
                ON N3H 0A8
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h4 className="fw-bold mb-0">Hours of Operation</h4>
              <p>
                Monday - Friday <br />
                9:00 am - 5:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
