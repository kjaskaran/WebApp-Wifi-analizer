/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
// import image from "../images/R.jpg";
import "../styles/contentpage.css";

export function ContentPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "/api/data";

  useEffect(() => {
    fetch(url).then((res) => {
      res
        .json()
        .then((json) => {
          setData(json);
          console.log(json);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => setLoading(false));
    });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading ... </h1>
      ) : (
        data.map((post, id) => (
          <div className="p-5" key={id}>
            <p>{new Date(post.date)}</p>
            <img
              src={`data:image/png;base64,${post.SlamPicture}`}
              alt="Slam Picture"
            />
            {/* <img
              src={`data:image/png;base64,${post.PersonPicture}`}
              alt="Person Picture"
            /> */}
          </div>
        ))
      )}
    </div>
  );
}
