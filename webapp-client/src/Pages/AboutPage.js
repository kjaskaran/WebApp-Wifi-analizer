import React from "react";

export function AboutPage() {
  return (
    <>
      <div className="text-start p-5">
        <h2 className="pb-2 border-bottom">Problem Statement</h2>
        <p>
          In wider scenarios, a robot with a navigation system could be used for
          different purposes. From already existing domestics-related robots to
          self-driving software improvements on conventional vehicles. More
          specifically, a small self-driving robot with Network connectivity
          could be used for other more specialized tasks like, room and network
          mapping, object searching, or security purposes. Although our project
          does not cover room or network mapping in its scope, we believe it is
          a foundation for other more complicated projects, that require the
          basis of a system like ours.
        </p>
        <h2 className="pb-2 border-bottom">Project Requirements</h2>
        <p>The requirements of the minimum viable product are the following:</p>
        <ol>
          <li>
            <h3>Hardware</h3>
            <ul>
              <li>
                <h4>MVP</h4>
                <p>
                  The robot would make use of a camera module, motors, an
                  ultrasonic sensor, and a Raspberry Pi with a WiFi module.
                </p>
              </li>
              <li>
                <h4>Nice-to-have features</h4>
                <p>
                  The project might also include an external module/antenna for
                  improved WiFi signal acquisition.
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h3>Navigation</h3>
            <ul>
              <li>
                <h4>MVP</h4>
                <p>
                  The robot would move using user input, but will overwrite any
                  instruction to avoid obstacles coming from the front.
                </p>
              </li>
              <li>
                <h4>Nice-to-have features</h4>
                <p>
                  The robot will have a basic self-driving software that avoids
                  collisions and can map the place where the data was recorded.
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h3>Data acquisition</h3>
            <ul>
              <li>
                <h4>MVP</h4>
                <p>
                  The robot will acquire low quality low frame-rate video,
                  ultrasonic sensor data, and WiFi signal strength of at least
                  1Hz.
                </p>
              </li>
              <li>
                <h4>Nice-to-have features</h4>
                <p>
                  The robot will acquire higher quality and higher frequency of
                  all the signals stated above.
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h3>Web Interface</h3>
            <ul>
              <li>
                <h4>MVP</h4>
                <p>
                  The data will be represented in a Web dashboard/portal,
                  showing WiFi signal quality in dBm/dB against time in a line
                  graph, along with the video in the corresponding time.
                </p>
              </li>
              <li>
                <h4>Nice-to-have features</h4>
                <p>
                  Additional data can be showed in the dashboard, like mapped
                  position of the vehicle or additional information when
                  hovering over the graphs.
                </p>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
}
