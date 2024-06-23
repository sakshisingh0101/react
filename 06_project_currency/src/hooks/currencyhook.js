import {useState,useEffect} from 'React'
function useCurrencyInfo(currency)
{
    useEffect(()=>{
        const [data,setData]=useState({})
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).
        then((response)=>{
           const respons=JSON.parse(this.response);
           return respons;
        }).
        then((res)=>{
          setData(res[currency])
        }).catch((error)=>
        {
             console.log(error)
        })


    },[currency])
    return data;
}
export default useCurrencyInfo;