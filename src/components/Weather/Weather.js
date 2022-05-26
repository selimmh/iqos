import React, { useEffect } from "react";
import styles from "./Weather.module.scss";
import axios from "axios";

import { RiSunCloudyLine } from "react-icons/ri";

function Weather() {
  const [weather, setWeather] = React.useState({});

  const getWeather = async () => {
    try {
      const res = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&hourly=temperature_2m&current_weather=true"
      );
      setWeather(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, []);

  console.log(
    weather?.current_weather?.temperature
      ? weather?.current_weather?.temperature
      : "No data"
  );

  return (
    <div className={styles.container}>
      <div className={styles.container__details}>
        <div className={styles.container__details__city}>
          <span>
            <RiSunCloudyLine />
          </span>
          <h2>Mostly Cloudy</h2>
          <h3>New York</h3>
        </div>
        <div className={styles.container__details__degree}>
          <ul>
            <li>Today</li>
            <li>Tomorrow</li>
            <li>Week</li>
          </ul>
          <h1>{}</h1>
        </div>
      </div>
      <div>
        {/* <ul>
          {weather.hourly.temperature_2m.map((item) => (
            <li key={item}>
              <h6>65°</h6>
              <p>6 AM</p>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default Weather;
