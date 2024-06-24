import { useState ,useCallback} from 'react'

import './App.css'
import InputBox from './components/input'
import useCurrencyInfo from './hooks/currencyhook'

function App() {
const [amount,setAmount]=useState(0);
const [from ,setFrom]=useState('usd')
const [to,setTo]=useState('inr')
const data=useCurrencyInfo(from);
const options=Object.keys(data);
let [convertedAmount,setConvertedAmount]=useState(0);

const swap=()=>{
  setFrom(to);
  setTo(from);
  setAmount(convertedAmount)
  setConvertedAmount(amount)
}

const backgroundImage='https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const convertAmount=useCallback(()=>{
  
  setConvertedAmount((data[to])*amount);

},[to ,from ,amount,data])
  return (
    <>
          <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convertAmount()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"  amount={amount} currencyoption={options} oncurrencychange={(curr)=>{
                                  setFrom(curr)
                                }}  selectcurrency={from} amountdisable currencydisable onamountchange={(amt)=>{
                                  setAmount(amt)
                                }} 
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                               onClick={()=>{
                                  swap()
                               }   }
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"   amount={convertedAmount} currencyoption={options} oncurrencychange={(curr)=>{
                                  setTo(curr)
                                }}  selectcurrency={to} amountdisable currencydisable onamountchange={(amt)=>{
                                  setConvertedAmount(amt)
                                }}
                                
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                          >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default App




// import React, { useState, useCallback } from 'react';
// import './App.css';
// import InputBox from './components/input';
// import useCurrencyInfo from './hooks/currencyhook';

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState('usd');
//   const [to, setTo] = useState('inr');
//   const data = useCurrencyInfo(from); // Assuming useCurrencyInfo hook returns an object
//   const options = Object.keys(data);
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setAmount(convertedAmount);
//     setConvertedAmount(amount);
//   };

//   const backgroundImage =
//     'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

//   const convertAmount = useCallback(() => {
//     const newConvertedAmount = data[to] * amount; // Corrected: Used data instead of convertedAmount
//     setConvertedAmount(newConvertedAmount);
//   }, [to, from, amount, data]);

//   return (
//     <>
//       <div
//         className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//         }}
//       >
//         <div className="w-full">
//           <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 convertAmount();
//               }}
//             >
//               <div className="w-full mb-1">
//                 <InputBox
//                   label="From"
//                   amount={amount}
//                   currencyoption={options}
//                   oncurrencychange={(curr) => {
//                     setFrom(curr);
//                   }}
//                   selectcurrency={from}
//                   amountdisable
//                   currencydisable
//                   onamountchange={(amt) => {
//                     setAmount(amt);
//                   }}
//                 />
//               </div>
//               <div className="relative w-full h-0.5">
//                 <button
//                   type="button"
//                   className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                   onClick={() => {
//                     swap();
//                   }}
//                 >
//                   swap
//                 </button>
//               </div>
//               <div className="w-full mt-1 mb-4">
//                 <InputBox
//                   label="To"
//                   amount={convertedAmount}
//                   currencyoption={options}
//                   oncurrencychange={(curr) => {
//                     setTo(curr);
//                   }}
//                   selectcurrency={to}
//                   amountdisable
//                   currencydisable
//                   onamountchange={(amt) => {
//                     setConvertedAmount(amt);
//                   }}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
//               >
//                 Convert {from.toUpperCase()} to {to.toUpperCase()}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
