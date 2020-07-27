import React, { Component } from "react";

class Signedup extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmite = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmite} className="white z-depth-2">
          <h5 className="grey-text grey-darken4">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email"> Email </label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password"> password </label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="token"> Token </label>
            <input type="text" id="token" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn orange accent-4 z-depth-1">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signedup;
