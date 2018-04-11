import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import CreateCategory from './CreateCategories';
import { FetchCategoriesAction } from '../../Action_creators/categoryAction';

class Dashboard extends Component{
  componentDidMount() {
    this.props.FetchCategoriesAction();
}

    render(){

      const { categories } = this.props.categories;
        return _.map(categories, category => {
          return(
            <div>
            <CreateCategory />
            <div className="dashboard" style={{marginLeft:20, paddingTop:10}}>
            <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" alt="" src={"https://images.unsplash.com/photo-1480348709911-be15f2c579ff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eec72ade9455b8514a3431fbe7311e46&auto=format&fit=crop&w=800&q=60"}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{category.cat.name}<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
        </div> 
        </div>
        );
    });
}}

const mapStateToProps = (state) => {
    console.log(state)
    return { 
        categories: state.categories
    }
}

export default connect(mapStateToProps, { FetchCategoriesAction })(Dashboard);