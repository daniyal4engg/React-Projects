import { useEffect } from "react";
import { useState } from "react";
import "./covid.css";
export const Covid = () => {
  const [info, setInfo] = useState([]);
  const getdata = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      let data = await res.json();
      console.log(data.statewise[0]);
      let covdetails = data.statewise[0];
      setInfo(covdetails);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="father">
      <div className="box1 box">
        <p>
          <span>Our</span> <h3>Country</h3>
        </p>
        <h1>India</h1>
      </div>
      <div className="box2 box">
        <p>
          <span>Total</span> <h3>Recovered</h3>
        </p>
        <h1>{info.recovered}</h1>
      </div>
      <div className="box3 box">
        <p>
          <span>Total</span> <h3>Confirmed</h3>
        </p>
        <h1>{info.confirmed}</h1>
      </div>
      <div className="box4 box">
        <p>
          <span>Total</span> <h3>Death</h3>
        </p>
        <h1>{info.deaths}</h1>
      </div>
      <div className="box5 box">
        <p>
          <span>Total</span> <h3>Active</h3>
        </p>
        <h1>{info.active}</h1>
      </div>
      <div className="box6 box">
        <p>
          <span>Total</span> <h3>Update</h3>
        </p>
        <h1>{info.lastupdatedtime}</h1>
      </div>
    </div>
  );
};
