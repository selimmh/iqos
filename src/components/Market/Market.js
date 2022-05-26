import React, { useEffect, useMemo, useState } from 'react'
import styles from './Market.module.scss'
import moment from 'moment'

// icons
import { MdOutlineTimeline } from 'react-icons/md'

// chart
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip as TT,
    Legend,
    Filler,
} from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    TT,
    Legend,
    Filler
)

// chart component for dynamic data
const LineChart = ({ mydata }) => {
    // const ctx = document.getElementById('canvas').getContext('2d')
    // const gradientBg = ctx.createLinearGradient(0, 0, 0, 400)
    // gradientBg.addColorStop(0, 'gray')
    // gradientBg.addColorStop(0.5, 'white')
    // gradientBg.addColorStop(1, 'black')

    const data = {
        labels: [
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
            'Jan',
            'Feb',
            'Mar',
        ],
        datasets: [
            {
                data: mydata,
                label: 'Lorem ipsum',
                borderColor: 'gray',
                borderWith: 0,
                fill: true,
                backgroundColor: 'rgba(0,0,0,0.05)',
                lineTension: 0.6,
                pointRadius: 7,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'red',
                pointHoverBorderColor: 'red',
                pointHoverBorderWidth: 2,
                pointHitRadius: 10,
                pointBackgroundColor: 'red',
                pointBorderColor: 'red',
                pointBorderWidth: 2,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRation: 2,
        scales: {
            x: {
                position: 'bottom',
                grid: {
                    display: false,
                },
            },
            y: {
                position: 'right',
                ticks: {
                    color: 'red',
                    display: false,
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: 'Lorem',
                align: 'start',
                position: 'top',
                font: {
                    size: 32,
                    weight: 'bold',
                },
            },
        },
        elements: {
            point: {
                radius: 5,
            },
        },
    }

    return (
        <div className={styles.lineChart}>
            <Line id='canvas' data={data} options={options} />
        </div>
    )
}

function Market() {
    // current time
    const [time, setTime] = useState(moment().format('MMM DD HH:mm A Z'))
    const stockMarket = useMemo(
        () => [
            {
                name: 'NASDAQ',
                price: '149,33',
                change: -0.85,
                lastYear: [
                    149, 151, 148, 150, 149, 150, 149, 150, 149, 150, 149, 150,
                ],
                low: 149,
                high: 150,
                open: 149,
                marketCap: '100B',
                dividend: '0.5%',
                peratio: '15.4',
            },
            {
                name: 'AAPL',
                price: '140,54',
                change: 0.51,
                lastYear: [
                    140, 142, 141, 143, 142, 143, 142, 143, 142, 143, 142, 143,
                ],
                low: 139,
                high: 142,
                open: 140,
                marketCap: '200B',
                dividend: '0.15%',
                peratio: '10.4',
            },
            {
                name: 'DOW J',
                price: '32.531,80',
                change: -0.34,
                lastYear: [
                    32.531, 31.531, 31.531, 32.531, 31.531, 32.531, 31.531,
                    32.531, 31.531, 32.531, 31.531, 32.531,
                ],
                low: 32.531,
                high: 32.531,
                open: 32.531,
                marketCap: '300B',
                dividend: '0.15%',
                peratio: '10.4',
            },
            {
                name: 'GOOG',
                price: '2.149,97',
                change: 0.7,
                lastYear: [
                    120, 121, 120, 122, 121, 123, 122, 123, 122, 123, 122, 123,
                ],
                low: 120,
                high: 123,
                open: 120,
                marketCap: '400B',
                dividend: '0.15%',
                peratio: '10.4',
            },
        ],
        []
    )

    const [chartIndex, setChartIndex] = useState(0)
    return (
        <div className={styles.container}>
            <div className={styles.container__navigation}>
                <ul>
                    {stockMarket.map((item, index) => (
                        <li key={index} onClick={() => setChartIndex(index)}>
                            <span>
                                <h2>{item.name}</h2>
                                <h4>{item.price}</h4>
                            </span>
                            <h1
                                className={
                                    item.change <= 0 ? styles.red : styles.green
                                }
                            >
                                {item.change}%
                            </h1>
                            <button>Details</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.container__content}>
                <div className={styles.container__content__data}>
                    <div className={styles.container__content__data__title}>
                        <h3>{stockMarket[chartIndex].name}</h3>
                        <h1>{stockMarket[chartIndex].price}$</h1>
                        <p>{time}</p>
                    </div>
                    <div className={styles.container__content__data__details}>
                        <p>
                            Low <span>{stockMarket[chartIndex].low}</span>
                        </p>
                        <p>
                            Market cap
                            <span>{stockMarket[chartIndex].marketCap}</span>
                        </p>

                        <p>
                            High <span>{stockMarket[chartIndex].high}</span>
                        </p>
                        <p>
                            Divident yield
                            <span>{stockMarket[chartIndex].dividend}</span>
                        </p>
                        <p>
                            Open <span>{stockMarket[chartIndex].open}</span>
                        </p>
                        <p>
                            P/E ratio (ttm)
                            <span>{stockMarket[chartIndex].peratio}</span>
                        </p>
                    </div>
                    <button>
                        <MdOutlineTimeline />1 YEAR
                    </button>
                </div>
                <div className={styles.container__content__chart}>
                    <LineChart mydata={stockMarket[chartIndex].lastYear} />
                </div>
            </div>
        </div>
    )
}

export default Market
