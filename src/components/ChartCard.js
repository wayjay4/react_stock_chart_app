import Card from 'react-bootstrap/Card';
import DataChart from "./DataChart";
import {Chart} from "react-chartjs-2";

function ChartCard({incomes, balances}) {
    return (
        <div className="d-flex justify-content-center align-items-center    " style={{ minHeight: '100vh' }}>
            {['Light'].map((variant) => (
                <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ position: 'relative', width: '80vw' }}
                    className="mb-2"
                >
                    <Card.Header>Income and Balance Report</Card.Header>
                    <Card.Body>
                        <Card.Title>Line Chart</Card.Title>
                        <Card.Text>
                            Displaying quarterly reports procured from Alpha Vantage API.
                        </Card.Text>

                        <DataChart
                            incomes={incomes}
                            balances={balances}
                        />
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default ChartCard;