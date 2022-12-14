import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"

class CartList extends Component {
  removeFromCart(product){
    this.props.action.removeFromCart(product);
    alertify.error(product.productName + "sepetten silindi.")
  }
  renderCart(){
    return(
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Category Id</th>
                    <th>Product Name </th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Quantity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.cart.map(cartItem=>(
                        <tr key={cartItem.product.id}>
                             <td>{cartItem.product.id}</td>
                            <td>{cartItem.product.categoryId}</td>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.product.unitsInStock}</td>
                            <td>{cartItem.quantity}</td>
                            <td>
                                <Button color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
  }
  render() {
    return (
      <div>
        {this.renderCart()}
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
export default connect(mapStateToProps, mapDispatchToProps)(CartList)