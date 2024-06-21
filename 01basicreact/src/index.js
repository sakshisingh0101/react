import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function APP()
{
  return(
    <div>
      <h1 >React Testing and learning</h1>
    </div>
  )
}
//bts there is a function which converts this jsx into objext and render method append the element into selected element
const reactElement={
  type:'a',
  props:{
      id:'google',
      href:"https://www.google.co.in/"
  },
  children:"Welcome to google"


}
//passing teh object as it is wont work becuase of syntax
const element=(
  <h1>testing is still in progress</h1>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    element

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
