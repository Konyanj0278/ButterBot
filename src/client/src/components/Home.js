
import './Home.css'
import React, { useState } from 'react';
import axios from 'axios';
import logo from '../rmlogo.jpg';

import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";

const override = css
`display: block;
margin: 0 auto;
border-color: blue;`;

export default function Home() {

  const [dataLast, setDataLast] = React.useState(null);
  const url = "http://localhost:3001/api/Home"
  const urlrun = "http://localhost:3001/api/Home/Run"

  let [loading, setLoading] = useState(false);

  function run() {
    setLoading(!loading)
    document.querySelector('#mybtn').disabled = true
    axios.get(urlrun).then((response) => {
      // Code is a little weird, but what's happening here ...
      // is that once the client gets the response from python spitting out code (0 or 1)
      // it will pause for 5 seconds to give time for robot to send data to db and refresh the page
      // (you can change the 5000 to something else to increase/decrease delay)
      // instead of displaying successful/unsuccessful, we will know if it's successful by seeing a new row of data
      if (response.data.success === "true") {
        document.querySelector('#mybtn').disabled = false
        setTimeout(function(){
          window.location.reload(true);
        }, 5000);
      }
      else {
        document.querySelector('#mybtn').disabled = false
        setTimeout(function(){
          document.querySelector('#mybtn').disabled = false
          window.location.reload(true);
        }, 5000);
      }
    });

  }


  React.useEffect(() => {
    axios.get(url).then((response) => {
      setDataLast(response.data);
    });
  }, []);

  if (!dataLast)
  return null;

  var d1 = new Date(dataLast[0].Date_ran);
  var d2 = new Date(dataLast[1].Date_ran);
  var d3 = new Date(dataLast[2].Date_ran);

  return (
    <div>
      <img alt="Rick and Morty" src={logo} className="rmlogo" />
      <div className="homeCont">
        <div className="homeWrapper">
          <h1>Butter Bot</h1>
          <h2>Recent Runs</h2>
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Butter Location</th>
                <th>Initial Distance</th>
                <th>Distance To Grab</th>
              </tr>
              <tr>
                <td>{d1.toLocaleDateString('en-US')}<br></br>{d1.toLocaleTimeString('en-US')}</td>
                <td>{dataLast[0].Object_Location} px</td>
                <td>{dataLast[0].Intial_Distance} cm</td>
                <td>{dataLast[0].Distance_To_Grab} cm</td>
              </tr>
              <tr>
                <td>{d2.toLocaleDateString('en-US')}<br></br>{d2.toLocaleTimeString('en-US')}</td>
                <td>{dataLast[1].Object_Location} px</td>
                <td>{dataLast[1].Intial_Distance} cm</td>
                <td>{dataLast[1].Distance_To_Grab} cm</td>
              </tr>
              <tr>
                <td>{d3.toLocaleDateString('en-US')}<br></br>{d3.toLocaleTimeString('en-US')}</td>
                <td>{dataLast[2].Object_Location} px</td>
                <td>{dataLast[2].Intial_Distance} cm</td>
                <td>{dataLast[2].Distance_To_Grab} cm</td>
              </tr>
            </tbody>
          </table>
          <div className="sweet-loading">
          <button id="mybtn" onClick={run} className="btn">Fetch</button>
          <MoonLoader color="gray" loading={loading} css={override} speedMultiplier={.2} />
          </div>

        </div>
      </div>
    </div>
  )
}
