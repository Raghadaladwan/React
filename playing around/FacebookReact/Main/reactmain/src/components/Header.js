import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Header.css';
import { PostData } from 'PostData.js';

class Header extends Component {

    state = { 
        
        username:'',
        password:''
     }

     login =() =>{
        PostData('login', this.state).then ((result)=>{
            let responseJosn = result;
            console.log(responseJosn)
        });
       
     }
   

     onChange =(term) =>{
        this.setState({username:term.target.value});
        //  console.log(this.state);
     }
    render() { 
    return ( 
    <div className="container" >
    <div className='row'>
        <div className="col">
            {/* <logo>
                <img src='../FacebookLogo.png' alt='logo' />
            </logo> */}
        <div className="col">
            <div className="col">
                <label> Email or Phone </label>
                <input 
                type='text' 
                placeholder='Enter your Email'
                onChange={this.onChange} />
                </div>
                <div className="col"></div>
                <label> Password </label>
                <input 
                type="password"
                placeholder='password'
                onChange={this.onChange} />
                 
                <button 
                onClick={this.login}>LOGIN</button>
            
        </div>
        </div>
    </div>
        
        
        

    </div>
        );
    }
}
 
export default Header;
