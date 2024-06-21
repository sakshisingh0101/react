import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Sakshi from './Sakshi.jsx'
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
const username="Sakshi"
//passing the object as it is wont work becuase of syntax
const element=(
  <h1>testing is still in progress</h1>
)
const reactEle=React.createElement(
    'h1',
    {id:'heading'},
    'React.createElement() usage  ',
    //last main variables evaluate hote h
    username

)
ReactDOM.createRoot(document.getElementById('root')).render(
//   <App/>
    //element
  //<APP/>
 // APP()
 //Sakshi()
reactEle
)
