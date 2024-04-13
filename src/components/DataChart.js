import '../App.css';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,  // x-axis
    LinearScale,    // y-axis
    PointElement,
    Legend, Filler, SubTitle, Title
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,  // x-axis
    LinearScale,    // y-axis
    PointElement,
    Legend,
    Filler,
    SubTitle,
    Title
)

function DataChart({incomes, balances}){
    const net_incomes = (incomes) ? incomes.map((income)=>{
        return income['netIncome'];
    }) : []

    const total_revenue = (incomes) ? incomes.map((income)=>{
        return income['totalRevenue'];
    }) : []

    const dates = (incomes) ? incomes.map((income)=>{
        return income['fiscalDateEnding'];
    }) : []

    const total_shareholder_equity = (balances) ? balances.map((balance)=>{
        return balance['totalShareholderEquity'];
    }) : []

    const dates2 = (balances) ? balances.map((balance)=>{
        return balance['fiscalDateEnding'];
    }) : []

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Net Income',
                data: net_incomes,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.4,
                hoverRadius: 15,
                pointHitRadius: 15,
                fill: true,
            },
            {
                label: 'Total Revenue',
                data: total_revenue,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                tension: 0.4,
                hoverRadius: 15,
                pointHitRadius: 15,
                fill: true,
            },
            {
                label: 'Total Shareholder Equity',
                data: total_shareholder_equity,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                hoverRadius: 15,
                pointHitRadius: 15,
                fill: true,
            }
        ]
    }

    const options = {
        type: 'line',
        animation: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: {
                        size: 22
                    },
                },
            },
            subtitle: {
                display: true,
                text: ''
            },
            title: {
                fullSize: true,
                display: true,
                text: 'Quarterly Report',
                font: {
                    size: 28
                }
            },
            chartAreaBorder: {
                borderColor: 'red',
            }
        },
        layout: {
            padding: 25,
        },
        responsive: true,
    }

    return (
        <div>
            {data ? <Line data={data} options={options} /> : <p>Loading...</p>}
        </div>
    );
}

export default DataChart;