import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink
  } from 'reactstrap';
  import {Link} from "react-router-dom";
  import { connect } from 'react-redux';
  import {bindActionCreators} from "redux";
  import * as cartActions from "../../redux/actions/cartActions";
  import alertify from "alertifyjs"
    

class cartSummary extends Component {
  removeFromCart(product){
    this.props.action.removeFromCart(product);
    alertify.error(product.productName + "sepetten silindi.")
  }
  renderSummary(){
    return (
        <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cart - {this.props.cart.length}
              </DropdownToggle>
              <DropdownMenu right>
                { 
                    this.props.cart.map(cartItem=>(
                        <DropdownItem key={cartItem.product.id}>
                        {cartItem.product.productName}
                        <Badge color="success">{cartItem.quantity}</Badge>
                        <Badge color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>X</Badge>
                        </DropdownItem>
                    ))
                }
                <DropdownItem divider />
                <DropdownItem>
                    <Link to="cart">Go to cart</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
    )
  }
  renderEmptyCart(){
    return  (
        <NavItem>
            <NavLink>Empty Cart</NavLink>
        </NavItem>
    )
  }
  render() {
    return (
      <div>
         {this.props.cat.length>0?this.renderSummary():this.renderEmptyCart}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  }
}
function mapStateToProps(state){
  return {
    cart:state.cartReducer
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(cartSummary)
