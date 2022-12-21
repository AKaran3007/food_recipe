import React, { Component } from 'react'

export default class Reset extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleSubmit(e) {
        e.preventDefault()
        const { email } = this.state;
        console.log(email);

        fetch("https://food-recipe-login.vercel.app/forgot-password", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Orgin": "*",
            },
            body: JSON.stringify({
                email,
            })

        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "User Registered")
                alert("Please check the registerd mail");

            });



    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <div className='container'>
                        <form onSubmit={this.handleSubmit}>
                            <h3>Forgot Password</h3>


                            <div className="mb-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                            <span className="forgot-password text-right">
                                New User? &nbsp;
                                <a href="/signup">Sign Up</a>
                            </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="forgot-password text-right">
                                Already User? &nbsp;
                                <a href="/signin">Sign In</a>
                            </span>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}