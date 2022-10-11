import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

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
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock locale="bn-BD"></Clock>
        <Clock locale="en-UK"></Clock>
        <Users></Users>
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


//Props is basically an object , when we compile this component it creates an object
// In that object will look like below
// And the whole element object is this
// element = {
//   type: 'h1',
//   props: {
//     locale: "bn-BD" //When you set locale ="bn-BD"
//   }, // In props will create more method of object if you set them in the render area
// }

//Clock Component
function Clock (props){
  console.log(new Date().toLocaleTimeString());
  return (
    <div>
      <h2>Time is: {new Date().toLocaleTimeString(props.locale)}</h2>
    </div>)
}
// Fetch data from JSONplaceholder5
function Users(){
 const [users, setUsers] = useState([]);
 useEffect(() => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  fetch(url)
  .then(res => res.json())
  // Set all data in setUsers 
  .then(data => setUsers(data))
 })
  return (
    <div>
      <h1>Users List</h1>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

// Counter
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
// Product component start
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
  // Button Css
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
