import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

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
      <div>
        <h2 className="text-5xl">Hello World</h2>

          <ul>
              {incomes.quarterlyReports && incomes.quarterlyReports.map((report)=> {
                  const {netIncome, totalRevenue} = report;
                  return <li>net income: {netIncome}, total revenue: {totalRevenue}</li>
              })}
          </ul>

          <hr />

          <ul>
              {balances.quarterlyReports && balances.quarterlyReports.map((report)=> {
                  const {totalShareholderEquity} = report;
                  return <li>share holder equity: {totalShareholderEquity}</li>
              })}
          </ul>
      </div>
  );
}

export default App;
