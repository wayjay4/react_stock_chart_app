import {useMemo, useState} from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import { Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import {Col, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import { setIncome } from '../store/incomeSlice';
import { setBalance } from '../store/balanceSlice';

function Search() {
    const dispatch = useDispatch();

    const [filter, setQuery] = useState('');
    const [tickers, setTickers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const search_filter = document.getElementById('search_filter');

    const handleFilterChange = (event) => {
        let filter = event.target.value;
        // const base_url = event.target.getAttribute('data-route');
        const base_url = 'https://www.alphavantage.co/query';
        // const apikey = 'A5WWOS39PUQAJ1S6';
        const apikey = 'demo';

        setQuery(filter);
        setIsLoading(true);

        // Your array of strings
        const stringsArray = ["tesco", "tencent", "fake"];

        // Generate a random index within the range of the array's length
        const randomIndex = Math.floor(Math.random() * stringsArray.length);

        // Get the random string using the random index
        filter = stringsArray[randomIndex];

        axios({
            method: 'get',
            baseURL: `${base_url}?function=SYMBOL_SEARCH&keywords=${filter}&apikey=${apikey}`,
            responseType: 'json',
        }).then((response) => {
            if(response.data.bestMatches !== undefined){
                setTickers(response.data.bestMatches);
            }
            else {
                setTickers([]);
            }

            setIsLoading(false);
        })
    };

    const debounceChangeHandler = useMemo(
        () => debounce(handleFilterChange, 300),
        [filter]
    );

    const handleOnBlur = (event) => {
        setIsVisible(false);
    };

    const handleOnFocus = (event) => {
        setIsVisible(true);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    const handleSelect = async (event, ticker_symbol) => {
        const income_statement_uri = 'https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo';
        const balance_sheet_uri = 'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=demo';

        await makeApiCall(income_statement_uri, (response)=>dispatch(setIncome(response.data)));
        await makeApiCall(balance_sheet_uri, (response)=>dispatch(setBalance(response.data)));

        setIsVisible(false);
        search_filter.value = '';
    }

    const makeApiCall = async (uri, action, type='GET') => {
        axios({
            method: type,
            baseURL: uri,
            responseType: 'json'
        }).then((response)=>{
            action(response);
        })
        .catch((e)=>{
            console.log('There was an error: ', e);
        });
    };

    return (
        <div className="relative" onFocus={handleOnFocus} onKeyDown={handleKeyPress}>
            <input type="text"
                   name="search_filter"
                   id="search_filter"
                   className="bg-gray-100 text-xl text-gray-800 rounded-full focus:outline-none focus:shadow-outline w-64 pl-10 pr-3 py-1 pl-8"
                   placeholder="Search..."
                   data-route={'https://www.alphavantage.co/query?function=INCOME_STATEMENT'}
                   onChange={debounceChangeHandler}
            />
            <div className="absolute top-0 flex items-center h-full ml-2">
                <svg className="fill-current text-gray-400 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>
            </div>

            {isLoading && (
                <div role="status" className="spinner top-0 right-0 mt-1.5 mr-4" style={{position: 'absolute'}}>
                    <svg aria-hidden="true"
                         className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>

            )}

            <div className="absolute z-50 bg-gray-800 text-xs rounded w-64 mt-2">
                {(tickers.length > 0 && !isLoading && isVisible) && (
                    <div style={{listStyle: 'none'}}>
                        {tickers.map((ticker, index) => {
                            const truncatedName = ticker['2. name'].length > 10 ? `${ticker['2. name'].substring(0, 10)}...` : ticker['2. name'];

                            return (
                                <div key={index} className="border-b border-gray-700" onClick={handleOnFocus}>
                                    <a
                                        href="#"
                                        onClick={(event)=>handleSelect(event, ticker['1. symbol'])}
                                        className="px-3 py-3 hover:bg-gray-700 flex justify-content-between transition ease-in-out duration-150 text-decoration-none"
                                    >
                                        <ReactMarkdown children={ticker['1. symbol']} className="text-lg"/>
                                        <ReactMarkdown children={truncatedName} className="text-lg"/>
                                    </a>
                                </div>
                            )
                        })
                        }
                    </div>
                )}
                {(tickers.length < 1 && filter !== '' && !isLoading) && (
                    <div className="border-b border-gray-700 text-center text-yellow-400 text-lg py-3">No results for '{filter}'</div>
                )}
            </div>
        </div>
    )
}

export default Search;
