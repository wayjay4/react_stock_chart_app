import Card from 'react-bootstrap/Card';
import DataChart from "./DataChart";
import {useSelector} from "react-redux";
import SearchCard from "./SearchCard";

function ChartCard() {
    const stock = useSelector(state => {
        return state.stock;
    });

    const date_range = useSelector(state => {
        if(state.income){
            let date_range = null;
            if (state.income['quarterlyReports']) {
                const quarterly = state.income['quarterlyReports'];

                date_range = convertDates({
                    start_date: quarterly[0]['fiscalDateEnding'],
                    end_date: quarterly[quarterly.length-1]['fiscalDateEnding'],
                });
            }

            return date_range;
        }
    });

    function convertDates(obj) {
        const convertedObj = {};
        for (const [key, value] of Object.entries(obj)) {
            if (key.endsWith('_date')) {
                const date = new Date(value);
                convertedObj[key] = date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            } else {
                convertedObj[key] = value;
            }
        }
        return convertedObj;
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>

            {stock.symbol
                ?
                    ['Light'].map((variant) => (
                    <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ position: 'relative', width: '80vw' }}
                        className="mb-2"
                    >
                        <Card.Header>Income and Balance Report</Card.Header>
                        <Card.Body>
                            <Card.Title>{(stock.symbol) ? stock.symbol+' - '+stock.name : ''}</Card.Title>
                            <Card.Text>
                                {
                                    (date_range)
                                        ? date_range.start_date+' - '+date_range.end_date
                                        : ''
                                }
                            </Card.Text>

                            {
                                (date_range)
                                    ?
                                    <DataChart />
                                    :
                                    <div className="flex justify-content-center text-5xl pt-10 pb-20">There is no data to display.</div>
                            }
                        </Card.Body>
                    </Card>
                ))
            :
                <SearchCard />
        }
        </div>
    );
}

export default ChartCard;