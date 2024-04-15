import Alert from 'react-bootstrap/Alert';
import Search from "./Search";

function SearchCard() {
    return (
        <Alert variant="success" className="d-flex flex-column align-items-center">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p className="pb-3">
                Please input a stock symbol to display the quarterly report.
            </p>
            <div className="mb-7 mt-2">
                <Search />
            </div>
        </Alert>
    );
}

export default SearchCard;