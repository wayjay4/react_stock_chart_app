import '../App.css';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,  // x-axis
    LinearScale,    // y-axis
    PointElement
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,  // x-axis
    LinearScale,    // y-axis
    PointElement
)

function DataChart({incomes, balances}){
    console.log('incomes: ', incomes)
    console.log('balances: ', balances);

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
                labels: 'Sales of the Week',
                data: net_incomes,
                backgroundColor: 'red',
                borderColor: 'blue',
                pointBorderColor: 'red',
                tension: 0.4
            },
            {
                labels: 'Gross of the Week',
                data: total_revenue,
                backgroundColor: 'red',
                borderColor: 'orange',
                pointBorderColor: 'green',
                tension: 0.4
            },
            {
                labels: 'Gross of the Week',
                data: total_shareholder_equity,
                backgroundColor: 'orange',
                borderColor: 'green',
                pointBorderColor: 'green',
                tension: 0.4
            }
        ]
    }

    const data1 = {
        labels: dates,
        datasets: [
            {
                labels: 'Sales of the Week',
                data: net_incomes,
                backgroundColor: 'red',
                borderColor: 'blue',
                pointBorderColor: 'red',
                tension: 0.4
            }
        ]
    }

    const data2 = {
        labels: dates,
        datasets: [
            {
                labels: 'Gross of the Week',
                data: total_revenue,
                backgroundColor: 'red',
                borderColor: 'orange',
                pointBorderColor: 'green',
                tension: 0.4
            }
        ]
    }

    const data3 = {
        labels: dates2,
        datasets: [
            {
                labels: 'Gross of the Week',
                data: total_shareholder_equity,
                backgroundColor: 'orange',
                borderColor: 'green',
                pointBorderColor: 'green',
                tension: 0.4
            }
        ]
    }

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                // min: 3,
                // max: 6
            }
        }
    }

    return (
        <div>
            <h1>This is the chart component.</h1>

            <Line
                data={data}
                options={options}
            ></Line>

            <Line
                data={data1}
                options={options}
            ></Line>

            <Line
                data={data2}
                options={options}
            ></Line>

            <Line
                data={data3}
                options={options}
            ></Line>
        </div>
    );
}

export default DataChart;