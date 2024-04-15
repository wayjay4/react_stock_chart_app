import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import axios from "axios";
import NavHeader from "./components/NavHeader";
import ChartCard from "./components/ChartCard";

function App() {
    const [incomes, setIncomes] = useState([]);
    const [balances, setBalances] = useState([]);

    const getIncomeData = () => {
        const uri = 'https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo';
        const result =  axios.get(uri)
            .then((response)=>{
                setIncomes(response.data);
            })
            .catch((error)=>{
                console.log('error: ', error);
            });
    }

    const getBalanceData = () => {
        const uri = 'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=demo';
        const result =  axios.get(uri)
            .then((response)=>{
                setBalances(response.data);
            })
            .catch((error)=>{
                console.log('error: ', error);
            });
    }

  useEffect(() => {
      getIncomeData();
      getBalanceData();
  }, []);

  return (
      <div className="bg-gray-600">
          <NavHeader />

          <ChartCard />
      </div>
  );
}

export default App;
