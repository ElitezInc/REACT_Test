import React, { Component } from 'react';
import './App.css';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };
  }

  handleValidation() {
    var fields = this.state.fields;
    var errors = {};
    var formIsValid = true;

    //Title
    if(!fields["title"]) {
       formIsValid = false;
       errors["title"] = "Title cannot be empty";
    }

    //Body
    if(!fields["body"]) {
      formIsValid = false;
      errors["body"] = "Body cannot be empty";
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e) {
      e.preventDefault();

      if(this.handleValidation()) {
         alert("Form submitted");
      } else {
         console.log("Form has errors");
      }
  }

  handleChange(field, e) {         
      var fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
  }

  render(){
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
              
            <h1>Create post</h1>
            
            <div>                  
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" title="title" onChange={this.handleChange.bind(this, "title")} value={this.state.fields["title"]}/>
                    <span style={{color: "red"}}>{this.state.errors["title"]}</span>
                </div>
                
                <div class="form-group">
                    <label for="body">Description</label>
                    <textarea rows="5" class="form-control" title="body" onChange={this.handleChange.bind(this, "body")} value={this.state.fields["body"]}></textarea>
                    <span style={{color: "red"}}>{this.state.errors["body"]}</span>
                </div>
                
                <div>
                    <button class="btn btn-default" style={{ marginRight: '10px'}} onClick={this.goBack}>Cancel</button>
                    <button class="btn btn-primary" onClick={this.saveData}>Create</button>
                </div>
            </div>
        </div>
      </div>
    </div>
     )
  }
  
  goBack = () => this.props.history.push('/');

  saveData = () => {
    if(this.handleValidation()) {
      this.props.history.push({
        pathname: '/',
        state: {
          post: [{ userId: 1, title: this.state.fields["title"], body: this.state.fields["body"] }]
        }
      });
    } else {
       console.log("Form has errors");
    }
  }  
}

export default Create;