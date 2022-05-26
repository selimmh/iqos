import React, { useEffect } from 'react'
import styles from './Weather.module.scss'
import axios from 'axios'
import moment from 'moment'
import dayjs from 'dayjs'

import { RiSunCloudyLine } from 'react-icons/ri'

function Weather() {
    const [weather, setWeather] = React.useState({})

    // api
    const getWeather = async () => {
        try {
            const res = await axios.get(
                'https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&hourly=temperature_2m&current_weather=true'
            )
            setWeather(res.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getWeather()
    }, [])

    const timeArray = []
    if (weather?.hourly?.time) {
        for (let i = 1; i <= 24; i++) {
            if (i % 3 === 0) {
                timeArray.push(weather?.hourly?.time[i])
            }
        }
    }

    const tempArray = []
    if (weather?.hourly?.temperature_2m) {
        for (let i = 1; i <= 24; i++) {
            if (i % 3 === 0) {
                tempArray.push(weather?.hourly?.temperature_2m[i])
            }
        }
    }

    const finalArray = []
    for (let i = 0; i < timeArray.length; i++) {
        finalArray.push({
            time: timeArray[i],
            temp: tempArray[i],
        })
    }

    return (
        <>
            {weather?.current_weather?.temperature ? (
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
                            <h1>
                                {weather?.current_weather?.temperature &&
                                    weather?.current_weather?.temperature + '°'}
                            </h1>
                        </div>
                    </div>
                    <div className={styles.container__hourly}>
                        <ul>
                            {finalArray.map((item, index) => (
                                <li key={index}>
                                    <h6>{item.temp}</h6>
                                    <p>{moment(item.time).format('h a')}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div className={styles.nodata}>
                    <h1>Loading data...</h1>
                </div>
            )}
        </>
    )
}
export default Weather
