
import { Col, Container, Row } from 'reactstrap';
import Navi from "./navi";
import categories from "./categories";
import product from './product';
import { Component } from 'react';

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
  }
  
}

 
  render() {
    let productInfo = {title:"ProductList"}
    let categoryInfo = {title:"CategoryList"}
    return (
      <div >
        <Container>
          <Navi cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <categories currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info= {categoryInfo}/>
            </Col>
            <Col xs="9">
              <product products={this.state.products} addToCart={this.addToCart} currentCategory={this.state.currentCategory} info= {productInfo}/>
            </Col>
          </Row>
        </Container>
       
      </div>
    );
  }
}
