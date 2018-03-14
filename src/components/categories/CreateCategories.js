import React, { Component } from 'react';

class CreateCategory extends Component{
    render(){
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
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="name" type="text" class="validate"/>
          <label for="first_name">Category Name</label>
        </div>
        </div>
        </form>
        </div>
    </div>
    <div className="row">
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-grey btn grey close">Close</a>
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn">Add</a>
    </div>
    </div>
  </div>
  </div>
  </div>
  </div>
        );
    }
}
export default CreateCategory;