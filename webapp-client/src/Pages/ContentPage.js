/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
// import image from "../images/R.jpg";
import "../styles/contentpage.css";
import LoadingSpinner from "../Loading_Spinner/Spinner.js";

function showHideComponent(date) {
  console.log(new Date().getTime());
  return true ? new Date().getTime() - date < 2 * 1000 : false;
}

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
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => setLoading(false));
    });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  } else {
    return data.map(
      (post, id) =>
        showHideComponent(post.date) && (
          <div className="container pt-2" key={id}>
            <div className="row m-2">
              <p className="lead d-inline-flex ms-5">
                <strong>Captured at: </strong>
                <em>
                  <mark>
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    }).format(post.TimeStamp * 1000)}
                  </mark>
                </em>
              </p>
              <div className="col">
                <img
                  className="img-thumbnail"
                  src={`data:image/jpeg;base64,${post.ImgWifi}`}
                  alt="Slam Picture"
                  height={700}
                  width={700}
                />
              </div>
            </div>
            <div className="row m-2">
              <div className="col">
                <img
                  className="img-thumbnail"
                  src={`data:image/jpeg;base64,${post.ImgCam}`}
                  alt="Slam Picture"
                  height={420}
                  width={420}
                />
              </div>
              <div className="col">
                <img
                  className="img-thumbnail"
                  src={`data:image/jpeg;base64,${post.ImgSlam}`}
                  alt="Slam Picture"
                  height={470}
                  width={470}
                />
              </div>
            </div>
          </div>
        )
    );
  }
}
