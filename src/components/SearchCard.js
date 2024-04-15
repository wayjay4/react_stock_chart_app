import Alert from 'react-bootstrap/Alert';
import Search from "./Search";
import { is_demo, base_url, api_key } from "../config";

function SearchCard() {
    return (
        <Alert variant="success" className="d-flex flex-column align-items-center">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p className="pb-3">
                Please input a stock symbol to display the quarterly report.
            </p>
            <div className="mb-7 mt-2">
                <Search is_demo={is_demo} base_url={base_url} api_key={api_key} />
            </div>
        </Alert>
    );
}

export default SearchCard;