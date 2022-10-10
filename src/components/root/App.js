
import { Col, Container, Row } from 'reactstrap';
import Navi from "../navi/Navi";
import { Component } from 'react';
import DashBoard from './DashBoard';
import {Route, Switch} from "react-router-dom"
import CartList from '../cart/CartList';

export default class App extends Component {
  render() {
    return (
        <Container>
          <Navi/>
          <Switch>
            <Route path="/" exact component= {DashBoard}></Route>
            <Route path="/product" exact component= {DashBoard}></Route>
            <Route path="/cart" exact component= {CartList}></Route>
          </Switch>
        </Container>
    );
  }
}
