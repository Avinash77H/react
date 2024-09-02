import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Spread from './components/Spread'
// import App from './App'
import Card from './components/Card'
import Img1 from './assets/img1.jpg'
import Img2 from './assets/img2.jpg'
import Img3 from './assets/img3.jpg'

const arr = [Img1,Img2,Img3];

const obj1 = {
  name : 'first card',
  height: 200,
  width: 200
}
const obj2 = {
  name : 'second card',
  height: 250,
  width: 250
}
const obj3 = {
  name : 'third card',
  height: 300,
  width: 300
}

const spread = {
  name:'avinash',
  age:23,
  hobby:'coding',
  occupation:'jobless'
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Card />
  <Card props ={obj2} imgId={arr[1]} value={1008}/>
  <Card props={obj3} imgId={arr[2]}/>
  {/* <Spread name={spread.name} age={spread.age} hobby={spread.hobby} occupation={spread.occupation}/> */}
  <Spread {...spread}/>  
 
  </React.StrictMode>
);


