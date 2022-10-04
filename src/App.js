
import { Col, Container, Row } from 'reactstrap';
import Navi from "./navi";
import categories from "./categories";
import product from './product';
import { Component } from 'react';
import alertify from "alertifyjs";
import { Route, Switch} from 'react-router-dom';
import notFound from './notFound';
import CartList from './CartList';
export default class App extends Component {
  state={currentCategory:"", products:[], cart: []}
  componentDidMount(){
    this.getProducts();
  }
  changeCategory= (category) => {
    this.setState({currentCategory:category.categoryName});
    this.getProducts(category.id);
  };
  getProducts = categoryId =>{
    let url= "http://localhost:3000/products";
    if(seoUrl){
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({products:data}));
};

addToCart= (product) => {
  let newCart= this.state.cart;
  var addedItem = newCart.find(c=>c.product.id===product.id)
  if(addedItem){
    addedItem.quantity+=1;
  }else{
    newCart.push({product:product,quantity:1});
    this.setState({cart:newCart})
    alertify.success(product.productName+ "added to cart",2);
  }
  
}
  removeFromCart=(product) => {
    let newCart= this.state.cart.filter(c=>c.product.id!==product.id)
    this.setState({cart:newCart})
    alertify.console.error(product.productName + "remove to cart");
  }
 
  render() {
    let productInfo = {title:"ProductList"}
    let categoryInfo = {title:"CategoryList"}
    return (
      <div >
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <categories currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info= {categoryInfo}/>
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" render={
                  props => (<product {...props} products={this.state.products} addToCart={this.addToCart} currentCategory={this.state.currentCategory} info= {productInfo}/>)
                } />
                <Route exact path="/cart" render={
                  props => (<CartList {...props} cart={this.state.cart} removeFromCart={this.removeFromCart} />)
                } />
                <Route  Component={notFound} />
              </Switch>
              
            </Col>
          </Row>
        </Container>
       
      </div>
    );
  }
}
