import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from "reactstrap"

export default class categories extends Component {
    state= {
        categories: []
    };
    getCategories = () =>{
        fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(data=>this.setState({categories:data}));
    }
    componentDidMount(){
        this.getCategories();
    }
   
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
            {
                this.state.categories.map(category =>(
                    <ListGroupItem active={category.currentCategory===this.props.currentCategory?true:false}
                    onClick={()=>this.props.changeCategory(category)} 
                    key={category.id}>{category.categoryName}
                    </ListGroupItem>
                ))
            }
        </ListGroup>
      </div>
    )
  }
}
