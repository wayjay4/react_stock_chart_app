import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState([]);

  const getFinancialData = () => {
    const uri = 'https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo';
    const result =  axios.get(uri)
        .then((response)=>{
          console.log('response: ', response.data);
          setData(response.data);
          // console.log('data raw: ', response.data.annualReports);
          // console.log('data: ', data);
        })
        .catch((error)=>{
          console.log('error: ', error);
        });
  }

  useEffect(() => {
    getFinancialData();
  }, []);

  return (
      <div>
        <h2 className="text-5xl">Hello World</h2>

        <ul>
          {data.annualReports && data.annualReports.map((report)=> {
            console.log('report: ', report);
            return <li>date: {report['fiscalDateEnding']}</li>
          })}
        </ul>
      </div>
  );
}

export default App;
