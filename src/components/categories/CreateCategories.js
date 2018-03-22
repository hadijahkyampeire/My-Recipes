import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AddCategoryAction} from '../../Action_creators/categoryAction';

class CreateCategory extends Component{
  state={
    name:''
  }

  handleInput=(event)=>{
    const {name, value} = event.target;
    this.setState({[name]: value});
}

handleAddCategories =(e)=>{
  e.preventDefault();
  // get our form data out of state
  const { name } = this.state;
  this.props.AddCategoryAction({ name });
}
    render(){
      const { name} = this.state
        return(
            <div>
  <a class="waves-effect waves-light btn modal-trigger left" href="#modal1">
  <i class="fa fa-plus"/>{' '}Add category</a>
  <div className="row" >
  <div className="col s12 m6">
  <div id="modal1" class="modal" style={{width:500}}>
    <div class="modal-content">
      <h4>Add category</h4>
      <div class="row">
    <form class="col s12" onSubmit={this.handleAddCategories}>
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="name" name="name" value={name} onChange={this.handleInput} type="text" class="validate"/>
          <label for="first_name">Category Name</label>
        </div>
        </div>
    <div className="row">
    <div class="modal-footer">
      <button href="#!" class="modal-action modal-close waves-effect waves-grey btn grey close">Close</button>
      <button type="submit" class="modal-action modal-close waves-effect waves-green btn">Add</button>
    </div>
    </div>
    </form>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
        );
    }
}
export default connect(null, {AddCategoryAction})(CreateCategory);