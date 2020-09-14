import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products:[
            {
                price:99,
                title:'Watch',
                qty:10,
                img:'https://images.unsplash.com/photo-1507428861205-e8aab693190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=760&q=80',
                id: 1
            },
            {
                price:999,
                title:'Mobile Phone',
                qty:2,
                img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80',
                id:2
            },
            {
                price:9999,
                title:'Laptop',
                qty:1,
                img:'https://images.unsplash.com/photo-1523398845774-0d176ba6fd41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                id:3
            }
        ]
    }
   // this.testing();
    // this.increaseQuantity = this.increaseQuantity.bind(this);
}
handleIncreaseQuantity = (product) =>{
    console.log("Increase the qty of ", product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products
    });
}
handleDecreaseQuantity = (product) =>{
    console.log("Decrease the quantity of ", product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty == 0){
        return;
    }
    products[index].qty-=1;
    this.setState({
        products
    });
}
handleDeleteProduct = (id) =>{
    const{products} = this.state;
    const items = products.filter((item)=> item.id !== id); //[{}]

    this.setState({
        products:items
    });
}

  getCartCount = () =>{
    const { products } = this.state;
    let count = 0;
    products.forEach((product)=>{
      count+=product.qty;
    });
    return count;
  }
  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product)=>{
      cartTotal+=product.qty*product.price;
    });
    return cartTotal;
  }

  render(){
    const {products} = this.state;
  return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
          <Cart
          products = {products}
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct = {this.handleDeleteProduct}
          />
          <div style={ {padding:10, fontSize: 20} }>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
