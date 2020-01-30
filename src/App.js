import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  constructor() {
      super();
      this.state = {
        posts: [],
      };
  }

  render() {
    return (
      <div class="container" style={{marginTop: '20px'}}>
        <div class="row">
            <div class="col-xs-6"> <h1 align="right">Posts List</h1> </div>
            <div class="col-xs-6"> <button type="button" class="btn btn-success pull-right" style={{marginTop: '25px'}} onClick={this.openNewForm}>Add New</button> </div> 
        </div>
        <hr></hr>
          { this.state.posts.map((post) => (
              <a href="#" onClick={() => {this.openDetails(post.id)}}>
              <div class="well link">
              <div class="media border">
              <div class="pull-left" href="#">
                <img class="media-object" src="https://via.placeholder.com/150" alt=""/>
              </div>
              <div class="media-body">
                <h1 class="media-heading">{post.title.length > 20 ? post.title.substr(0, 20) + '...' : post.title}</h1>
                <p class="author text-left" style={{textDecoration: 'underline', color: '#6495ED'}}>By Anailuj</p>
                <p align="justify" style ={{fontSize: '17px'}}>{post.body}</p>
               </div>
              </div>
              </div>
              </a>
          ))}
        </div>
    );
  }

  openNewForm = () => this.props.history.push('/create');

  openDetails = (id) => this.props.history.push('/details/' + id);

  addElement = () => this.setState({ posts: this.state.info.concat(this.state.posts) });

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      console.log(this.props.location.state.post);

      fetch('http://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            this.props.location.state.post
          )
        })
        .then(res => res.json())
        .then((data) => {           
          var post = [{ userid: 1, id: data.id, title: data[0]['title'], body: data[0]['body'] }];
          this.setState({ posts: post.concat(this.state.posts) });
        })
        .catch(console.log);

      delete this.props.location.state;
    }

    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((data) =>  this.setState({ posts: data.slice(0,6) }))
    .catch(console.log)
  }
}

export default App;