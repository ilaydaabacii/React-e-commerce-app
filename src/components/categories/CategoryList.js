import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from "reactstrap"
import { connect } from 'react-redux';
import {bindActionCreators} from "redux"
import * as categoryActions from "../../redux/actions/categoryActions"
import * as productActions from "../../redux/actions/productActions"

 class categories extends Component {
   componentDidMount(){
    this.props.actions.getCategories()
   }
   selectCategory=(category)=>{
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
   }
  render() {
    return (
      <div>
        <h3>Categories {this.props.categories.length} </h3>
        <ListGroup>
            {
                this.state.categories.map(category =>(
                    <ListGroupItem active={category.id===this.props.currentCategory.id}
                    onClick={()=>this.selectCategory(category)} 
                    key={category.id}>{category.categoryName}
                    </ListGroupItem>
                ))
            }
        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentCategory:state.changeCategoryReducer,
    categories:state.categoryListReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions:{
      getCategories:bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory:bindActionCreators(categoryActions.changeCategory, dispatch),
      getProducts:bindActionCreators(productActions.getProducts, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
