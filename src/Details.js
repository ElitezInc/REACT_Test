import React, { Component } from 'react';
import './App.css';

export class Details extends Component {
    constructor() {
      super();
      this.state = {
        post: [],
      };
    }
  
    render() {
       return (
        <div class="container" style={{marginLeft: '20px;'}}>
          <div class="row">
            <div class="col-xs-7"> <h1>{this.state.post.title}</h1> </div>
          </div>
          <div div class="row">
            <div class="col-xs-7">
              <p class="lead" style={{color: '#6495ED'}}>
                by Anailuj
              </p>
            </div>
            <div class="col-xs-5">
              <button type="button" class="btn btn-warning pull-left" onClick={this.goBack}>Return</button>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <hr/>
              <img class="img-fluid rounded" src="http://placehold.it/800x300" style={{width: '100%', height: 'auto;'}} alt=""></img>
                <p align="justify" style ={{marginTop: '25px', fontSize: '20px'}}>{this.state.post.body}</p>
            </div>
          </div>
        </div>
       );
    }

    goBack = () => this.props.history.push('/');

    componentDidMount() {
        var id = this.props.match.params.id;
        
        fetch('http://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => res.json())
        .then((data) => this.setState({ post: data }))
        .catch(console.log);
    }
}

export default Details;