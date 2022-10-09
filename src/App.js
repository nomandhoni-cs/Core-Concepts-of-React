import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const friendsList = ['Sabbir', 'Shuvo', 'Mridul', 'Hasan', 'Hossain', 'Faysal'];
const products = [
  {name: 'Photoshop', price: '$44.99'},
  {name: 'PDF Reader', price: '$4.99'},
  {name: 'Premier Pro', price: '$4.99'},
  {name: 'Illustrator', price: '$4.99'},
  {name: 'Adobe XD', price: '$4.99'},
  {name: 'Access', price: '$244.99'},
  {name: 'Figma', price: '$24.99'}
];
const productNames = products.map(product => product.name);
console.log(productNames);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <ul>
          {
              friendsList.map(friend => <li>{friend}</li>)
          }
        </ul>
        <ul>
          {
            productNames.map(pd => <li>{pd}</li>)
          }
        </ul>
        {
          products.map(pd => <Product name={pd.name} price={pd.price}></Product>)
        }
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name}price={products[1].price}>></Product>
        <Product name={products[2].name}price={products[2].price}>></Product> */}         
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <button onClick={handleDecrease}>Decrease</button>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Product(props) {
  const style = {
    backgroundColor: 'lightgray',
    // display: 'grid',
    border: '1px solid gray',
    borderRadius: '7px',
    width: '200px',
    height:'200px',
    float: 'right',
    display: 'block',
    color: 'black',
    margin: '10px'
  }
  const btnStyle ={
    width: '90px',
    backgroundColor: 'blue',
    border: '1px solid blue',
    borderRadius: '15px',
    color: 'white',
    fontSize: '22px',
    cursor: 'pointer'
  }
  return (
    <div style={style}>
      <h4>{props.name}</h4>
      <h3>{props.price}</h3>
      <button style={btnStyle}>Buy</button>
    </div>
  )
}

export default App;
