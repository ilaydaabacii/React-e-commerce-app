
import { Col, Container, Row } from 'reactstrap';
import Navi from "../navi/Navi";
import { Component } from 'react';
import DashBoard from './DashBoard';
import {Route, Switch} from "react-router-dom"
import CartList from '../cart/CartList';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import notFound from '../common/notFound';
import Login from "../Login"
import Register from "../Register"

export default class App extends Component {
  render() {
    return (
        <Container>
          <Navi/>
          <Switch>
            <Route path="/" exact component= {DashBoard}></Route>
            <Route path="/product" exact component= {DashBoard}></Route>
            <Route path="/saveproduct/:productId"  component= {AddOrUpdateProduct}></Route>
            <Route path="/saveproduct"  component= {AddOrUpdateProduct}></Route>
            <Route path="/cart" exact component= {CartList}></Route>
            <Route path="/login" exact component= {Login}></Route>
            <Route path="/register" exact component= {Register}></Route>
            <Route component= {notFound}></Route>
          </Switch>
        </Container>
    );
  }
}
