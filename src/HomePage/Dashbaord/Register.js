import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Register extends Component {
    render() {
        return (
            <div className="container ">
                <div className="col-md-12 mt-5" >
                    <div className="row ">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 ">
                            <div className="card login-card">
                                <h4 className="text-center p-3">Registration Page </h4>
                                <form>
                                <div className="text-center">
                                        <input type="text" 
                                        className="input-box"
                                        placeholder="Enter email" name="name" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <input type="email" 
                                        className="input-box"
                                        placeholder="Enter email" name="email" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <input type="password" 
                                        className="input-box"
                                        placeholder="Enter password" name="email" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <button className=" input-button">SignUp</button>
                                    </div>
                                    <div className="text-center mb-3 p-3">
                                        <h6>Already Existed <Link to='/'>Login</Link> here</h6>
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