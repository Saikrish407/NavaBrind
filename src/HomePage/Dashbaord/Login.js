import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: "",
            passwordError: ""
        }
    }
    handleChange = (event) => {
        
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    validForm = () => {
        let emailError = "";
        let passwordError = "";
        if (!this.state.password.trim()) {
            passwordError = "Password can't blank"
        }
        if (!this.state.email.includes("@")) {
            emailError = "Invalid Email";
        }
        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false
        }
        return false;



    }
    render() {
        const { email, password } = this.state;

        return (
            <div className="container ">
                <div className="col-md-12 mt-5" >
                    <div className="row ">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 ">
                            <div className="card login-card">
                                <h4 className="text-center p-3">Login details</h4>
                                <form >
                                    <div className="text-center">
                                        <input type="email"
                                            className="input-box"
                                            placeholder="Enter email" name="email"
                                            value={email}
                                            onChange={this.handleChange} />
                                    </div>
                                    <div className="text-center mt-3">
                                        <input type="password"
                                            className="input-box"
                                            placeholder="Enter password" name="password"
                                            value={password}
                                            onChange={this.handleChange} />
                                    </div>
                                    <div className="text-center mt-3">
                                        <button className=" input-button"><Link to='/dashboard'>SignIn</Link></button>
                                    </div>
                                    <div className="text-center mb-3 p-3">
                                        <h6>If you Newuser <Link to='/register'>SignUp</Link> here</h6>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}