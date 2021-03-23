import React from "react";
import "./Weather.css";

export default function Weather () {
    return(
          <div className="Weather">
            <form>
                <input type="search" placeholder="Enter a city.." className="form-control"/>
            </form>
              <h1>Stuttgart</h1>
              <ul>
                  <li>Monday 15:00</li>
                  <li>Cloudy</li>
              </ul>
              <div className="row">
                  <div className="col-6">
                    <img scr="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="" />
                    6°
                  </div>
                  <div className="col-6">
                      <ul>
                          <li>Humidity: 15%</li>
                          <li>Wind: 15 km/h</li>
                      </ul>
                  </div>
              </div>
        </div>
    
    );
      
}