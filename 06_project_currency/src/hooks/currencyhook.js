// import {useState,useEffect} from 'react'
// function useCurrencyInfo(currency)
// {const [data,setData]=useState({})
//     useEffect(()=>{
        
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).
//         then((response)=>{
           
//            return JSON.parse(response)
//         }).
//         then((res)=>{
//           data=res[currency]
//           setData(data)
//         }).catch((error)=>
//         {
//              console.log(error)
//         })


//     },[currency])
//     return data;
// }
// export default useCurrencyInfo;




import { useEffect, useState } from 'react';

const useCurrencyInfo = (from) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Example: Fetch data based on `from` currency
    const fetchData = async () => {
      try {
        // Replace with your API call or data fetching logic
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const result = await response.json();
        setData(result.rates); // Assuming `rates` contains currency conversion rates
      } catch (error) {
        console.error('Error fetching currency info:', error);
      }
    };

    fetchData(); // Invoke fetchData on mount or when `from` changes

  }, [from]); // Dependency on `from` to fetch data when `from` changes

  return data;
};

export default useCurrencyInfo;
