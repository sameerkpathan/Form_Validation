import { useState } from "react";
import { useEffect } from "react";

const Apicall = () => {
  const [data, setdata] = useState();
  const getCoviddata = async () => {
    const data = await fetch("https://api.covid19india.org/data.json");
    let apidata = await data.json();
    console.log(apidata.statewise);
    setdata(apidata.statewise);
  };
  useEffect(() => {
    getCoviddata();
  }, []);
  return (
    <div>
      <h1>INDIA COVID-19 DASHBOARD</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovery</th>
              <th>deaths</th>
              <th>active</th>
              <th>updated</th>
            </tr>
          </thead>

          <tbody>
            {data.map((elm, index) => {
              return (
                <tr key={index}>
                  <th>{elm.state}</th>
                  <td>{elm.confirmed}</td>
                  <td>{elm.recovered}</td>
                  <td>{elm.deaths}</td>
                  <td>{elm.active}</td>
                  <td>{elm.lastupdatedtime}</td>
                  <tr></tr>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Apicall;

// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled. this will give this error
