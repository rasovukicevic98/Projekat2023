import React from 'react'; 
import axios from 'axios';
import background from "../auto_plac.jpg"


class Register extends React.Component {
    constructor(props) {
       super(props);
       this.state = { ime: '', prezime:'', user: '', pass : '', mail: '', brojtelefona:''};
    }



    //dugme za singUp
    onButtonClick2 = () => {
      
      let data = {ime:this.state.ime, prezime:this.state.prezime, username:this.state.user, password:this.state.pass, mail:this.state.mail, brojtelefona:this.state.brojtelefona}
      axios.post("http://localhost:3000/login/s", data).then(
        (response) => {
          console.log(response.data);
          if(response.data === 'Korisnik sa ovim usernameom vec postoji'){
            window.alert('Neuspjesna prjava   ' + response.data);
           // this.props.dispatch({type : 'SINGUP_FAILURE', user : ''}); 
          }
          else if(response.data === 'Korisnik sa ovim emailom vec postoji'){
            window.alert('Neuspjesna prijava   ' + response.data);
           // this.props.dispatch({type : 'SINGUP_FAILURE', user : ''}); 
          }
          else{
            window.alert('Uspjesna prijava! Sada se mozete ulogovati na AUTODEALER');
            console.log(response.data);
            this.props.history.push({pathname:"/login"});
          }
          
        },
           (err) => window.alert('Neuspjesna prijava'));
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
                            <input id='ime' name='ime' value={this.state.ime}  onChange={this.textChanged} type="text" className="form-control" />
                            <label className="form-label" htmlFor="ime">Ime</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input id='prezime' name='prezime' value={this.state.prezime}  onChange={this.textChanged} type="text"  className="form-control" />
                            <label className="form-label" htmlFor="prezime">Prezime</label>
                          </div>
                        </div>
                      </div>

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

                      <div className="form-outline mb-4">
                        <input type="text" id="brojtelefona" name='brojtelefona' value={this.state.brojtelefona}  onChange={this.textChanged} className="form-control" />
                        <label className="form-label" htmlFor="brojtelefona">Broj telefona</label>
                      </div>
          
      
                      <button type='button' onClick={this.onButtonClick2}  className="btn btn-block mb-4" style={{background:'red',color:'#ffffff'}} >Register</button> 
      
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


export default Register;