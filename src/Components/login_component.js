import React, { Component } from 'react'

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    const { email, password } = this.state;
    console.log(email, password);

    fetch("https://food-recipe-login.vercel.app/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Orgin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      })

    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "User Registered")
        if (data.status == "ok") {
          alert("Login Successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./meal"
        }
      })


  }

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div className='container'>
            <form onSubmit={this.handleSubmit}>
              <h3>Sign In</h3>


              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
              </div>
              <span className="forgot-password text-right">New User? &nbsp;
                <a href="/signup" className="btn btn-primary">Sign up</a>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="forgot-password text-right">
                Forgot <a href="/reset" className="btn btn-primary">password?</a>
              </span>
            </form>
          </div>
        </div>

      </div>
    )
  }
}