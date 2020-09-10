import React, { Component } from 'react'

export class Register extends Component {
    
    render() {
        return (
            <div className="base-container">
                <div className="header"><b>Register</b></div>
                <div className="content">
                
                   <div className="form">
                       <div className="form-group">
                           <label htmlFor="username">Username</label>
                           <input type="text" name="username" placeholder="username"></input>
                       </div>
                       <div className="form-group">
                           <label htmlFor="email">E-mail</label>
                           <input type="email" name="email" placeholder="email"></input>
                       </div>
                       <div className="form-group">
                           <label htmlFor="Password">password</label>
                           <input type="password" name="password" placeholder="password"></input>
                       </div>
                       <div className="form-group">
                           <label htmlFor="Conform_Password">Conform password</label>
                           <input type="password" name="password" placeholder="Conform password"></input>
                       </div>
                   </div>
                    
                </div>
                <div className="footer">
                    <button type="button" className="btn_submit">Submit</button>
                </div>
            </div>
        )
    }
}


