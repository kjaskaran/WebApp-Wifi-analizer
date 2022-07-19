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
        data.map((post) => (
          <div className="p-5">
            <p>Lattitude of the location: {post.latitude}</p>
            <p>Longitude of the location: {post.longitude}</p>
            <p>Signal Strength at this location: {post.signalStrength}</p>
          </div>
        ))
      )}
    </div>
  );
}
