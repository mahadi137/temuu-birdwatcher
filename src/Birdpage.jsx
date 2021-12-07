import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import Data from "./fetch";
import "../src/App.css";

export default function Birdpage(props) {
  const [birdData, setBirdData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await Data();
      setBirdData(data);
    }
    getData();
  }, [birdData]);

  return (
    <div className="Gallery">
      {birdData
        .filter((e) => {
          if (props.searchTearm === "") {
            return e;
          } else if (e.name.includes(props.searchTearm.toLowerCase())) {
            return e;
          } else if (e.timestand && e.timestand.includes(props.searchTearm)) {
            return e;
          }
        })
        .map((value) => {
          return (
            <div>
              <Gallery src={value.imgSource} alt={value.name} />
            </div>
          );
        })}
    </div>
  );
}
