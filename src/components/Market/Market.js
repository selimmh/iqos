import React, { useEffect, useMemo } from 'react'
import styles from './Market.module.scss'

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
const LineChart = () => {
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
                data: [
                    120, 121, 120, 122, 121, 123, 122, 123, 122, 123, 122, 123,
                ],
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
    const stockMarket = useMemo(
        () => [
            {
                name: 'NASDAQ',
                price: '1,000,000',
                change: -0.85,
                lastYear: [
                    120, 121, 120, 122, 121, 123, 120, 123, 122, 123, 122, 123,
                ],
            },
            {
                name: 'AAPL',
                price: '1,000,000',
                change: 0.51,
                lastYear: [
                    120, 121, 120, 122, 121, 120, 122, 123, 122, 123, 122, 123,
                ],
            },
            {
                name: 'DOW J',
                price: '1,000,000',
                change: -0.34,
                lastYear: [
                    120, 121, 120, 122, 121, 123, 122, 123, 122, 123, 122, 123,
                ],
            },
            {
                name: 'GOOG',
                price: '1,000,000',
                change: 0.7,
                lastYear: [
                    120, 121, 120, 122, 121, 123, 122, 123, 122, 123, 122, 123,
                ],
            },
        ],
        []
    )
    return (
        <div className={styles.container}>
            <div className={styles.container__navigation}>
                <ul>
                    {stockMarket.map((item, index) => (
                        <li key={index}>
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
                        <h3>NASDAQ: AAPL</h3>
                        <h1>127.33</h1>
                        <p>Oct 12 2:16 PM EDT</p>
                    </div>
                    <div className={styles.container__content__data__details}>
                        <p>
                            Low <span>126.88</span>
                        </p>
                        <p>
                            Market cap <span>735.34B</span>
                        </p>

                        <p>
                            High <span>127.61</span>
                        </p>
                        <p>
                            Divident yield <span>1.63%</span>
                        </p>
                        <p>
                            Open <span>127.48</span>
                        </p>
                        <p>
                            P/E ratio (ttm) <span>15.73</span>
                        </p>
                    </div>
                    <button>
                        <MdOutlineTimeline />1 YEAR
                    </button>
                </div>
                <div className={styles.container__content__chart}>
                    <LineChart />
                </div>
            </div>
        </div>
    )
}

export default Market
