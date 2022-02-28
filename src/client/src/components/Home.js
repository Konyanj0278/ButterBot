
import './Home.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

    const [dataLast, setDataLast] = React.useState(null);
    const url = "http://localhost:3001/api/Home"
    const urlrun = "http://localhost:3001/api/Home/Run"

    function run() {
      axios.get(urlrun)
    }

    React.useEffect(() => {
      axios.get(url).then((response) => {
        setDataLast(response.data);
      });
    }, []);

    if (!dataLast)
        return null;
    
    console.log(dataLast)

    return (
        <div className="homeCont">
            <div className="homeWrapper">
                <h2>Dashboard</h2>
                <h3>Recent Runs</h3>
                <table>
                <tbody>
                    <tr>
                  <th>Date</th>
                  <th>Butter Location</th>
                  <th>Robot Location</th>
                  <th>Distance to Butter</th>
                  </tr>
                  <tr>
                    <td>{dataLast[0].Date_ran}</td>
                    <td>{dataLast[0].Butter_Location}</td>
                    <td>{dataLast[0].Robot_Location}</td> 
                    <td>{dataLast[0].Distance_to_butter}</td>
                    </tr>
                  <tr>
                    <td>{dataLast[1].Date_ran}</td>
                    <td>{dataLast[1].Butter_Location}</td>
                    <td>{dataLast[1].Robot_Location}</td> 
                    <td>{dataLast[1].Distance_to_butter}</td>
                    </tr>
                  <tr>
                    <td>{dataLast[2].Date_ran}</td>
                    <td>{dataLast[2].Butter_Location}</td>
                    <td>{dataLast[2].Robot_Location}</td> 
                    <td>{dataLast[2].Distance_to_butter}</td>
                  </tr>
                    </tbody>
                </table>
                <button onClick={run}>Run</button>
                
            </div>
        </div>
    )
}
