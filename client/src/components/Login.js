import React from 'react'; 
import axios from 'axios';
import { connect } from 'react-redux';
import background from "../auto_plac.jpg";
import {Link} from "react-router-dom";

class ConnLogin extends React.Component {
    constructor(props) {
       super(props);
       this.state = { user: '', pass : '', mail: '', id: 0};
    }

    onButtonClick = () => {
      let data = { username:this.state.user, password:this.state.pass, mail:this.state.mail}
      axios.post("http://localhost:3000/login/", data).then(
        (response) => {
          console.log(response.data);
          if(!response.data.idToken){
            window.alert('Neuspjesno prijavljivanje   ' + response.data.msg);
            this.props.dispatch({type : 'LOGIN_FAILURE', user : ''}); 
          }
          else{
              const data={token: response.data.idToken, id: response.data.userID};
              console.log(data);
              localStorage.setItem("data", JSON.stringify(data));
              this.props.history.push({pathname:"/"});  
              this.props.dispatch({type : 'LOGIN_SUCCESS', user : this.state.user});
              
              }
          } ,
           (err) => window.alert('Neuspjesno prijavljivanje'));
    }

    textChanged = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }


    render() {
      return (
        <section  style={{background: "#000000", height:'100vh', padding:'0px', margin:'0px'}}>

        <div className="row align-items-center text-center text-lg-start" style={{background: "#000000", height:'100%' , padding:'0px', margin:'0px', borderRadius:'20px'}}>
          <div className="container " style={{backgroundImage: `url(${background})`}}>
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0 roe">
                <h1 className="display-4 fw-bold ls-tight col-6" style={{color:'#c2c0c0'}}>
                  AUTO
                  <span style={{color:'red'}}>DEALER</span>
                </h1>

              </div>
      
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card my-4" style={{background:'#000000', opacity:'0.89' , color:'#8c8989'}}>
                  <div className="card-body py-5 px-md-5">
                    <form > 
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="user" value={this.state.user}  onChange={this.textChanged} name='user' className="form-control" />
                            <label className="form-label" htmlFor="user">Username</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="password" id="pass" value={this.state.pass}  onChange={this.textChanged} name='pass' className="form-control" />
                            <label className="form-label" htmlFor="pass">Lozinka</label>
                          </div>
                        </div>
                      </div>
    
                      <div className="form-outline mb-4">
                        <input type="email" value={this.state.mail}  onChange={this.textChanged} name='mail' id="mail" className="form-control" />
                        <label className="form-label" htmlFor="mail">MailAdresa</label>
                      </div>
      
                      <button type='button' onClick={this.onButtonClick}  className="btn btn-block mb-4" style={{background:'red',color:'#ffffff'}} >Log in</button> 

                      <div>
                            <span style={{color:'red'}}> <Link to={{pathname:'/register'}} style={{color:'red'}}><p style={{display:'inline-block',color:'red'}}  className="mb-0">Nemate nalog? Prijavite se ovdje!</p></Link></span>    
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
		)
	}
}

function mapStateToProps(state) {
   const { loggedIn, user } = state.authentication;
   return {
       loggedIn, user
   };
}


const Login = (connect(mapStateToProps)(ConnLogin));
export default Login;