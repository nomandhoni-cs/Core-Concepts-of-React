import logo from "./logo.svg";
import "./App.css";

const products = [
  {name: 'Photoshop', price: '$44.99'},
  {name: 'PDF Reader', price: '$4.99'},
  {name: 'Figma', price: '$24.99'}
]
const productNames = products.map(product => product.name);
console.log(productNames);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name}price={products[1].price}>></Product>
        <Product name={products[2].name}price={products[2].price}>></Product>
                
      </header>
    </div>
  );
}
function Product(props) {
  const style = {
    backgroundColor: 'lightgray',
    // display: 'grid',
    border: '1px solid gray',
    borderRadius: '7px',
    width: '200px',
    height:'200px',
    float: 'left',
    display: 'inlineBlock'
  }
  return (
    <div style={style}>
      <h4>{props.name}</h4>
      <h3>{props.price}</h3>
      <button>Buy</button>
    </div>
  )
}

export default App;
