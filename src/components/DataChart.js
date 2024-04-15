import '../App.css';
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Filler, SubTitle, Title } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Filler, SubTitle, Title);

function DataChart() {
    const income = useSelector(state => state.income); // Assuming 'income' is the slice name in your Redux state
    const balance = useSelector(state => state.balance); // Assuming 'balance' is the slice name in your Redux state

    const getData = (data, key) => {
        return data?.['quarterlyReports']?.map(item => item[key]) ?? [];
    };

    const net_incomes = getData(income, 'netIncome');
    const total_revenue = getData(income, 'totalRevenue');
    const dates = getData(income, 'fiscalDateEnding');
    const total_shareholder_equity = getData(balance, 'totalShareholderEquity');

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
                fill: true
            },
            {
                label: 'Total Revenue',
                data: total_revenue,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                tension: 0.4,
                hoverRadius: 15,
                pointHitRadius: 15,
                fill: true
            },
            {
                label: 'Total Shareholder Equity',
                data: total_shareholder_equity,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                hoverRadius: 15,
                pointHitRadius: 15,
                fill: true
            }
        ]
    };

    const options = {
        type: 'line',
        animation: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        size: 22
                    }
                },
            },
            subtitle: {
                display: true,
                text: ''
            },
            title: {
                fullSize: true,
                display: false,
                text: 'Quarterly Report',
                font: {
                    size: 28
                }
            },
            chartAreaBorder: {
                borderColor: 'red'
            }
        },
        layout: {
            padding: 5
        },
        responsive: true
    };

    return (
        <Line data={data} options={options} />
    );
}

export default DataChart;
