import React from 'react';
import {useState} from 'react';

import {Link} from 'react-router-dom';

const Nav = () =>{  
    let dd=localStorage.getItem("data");
        var token="";
        if(dd){
            let d = JSON.parse(localStorage.getItem("data"));
             token=d.idToken;
        }

       // console.log(dd);
        
    return(
        
        <header id="header" className="d-flex align-items-center" style={{width:'100%'}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-light" >
        <h1 className="navbar-brand" style={{background:'#ffffff', height:'100%', color:'#000000', marginLeft:'10px', marginRight:'10px'}}>AUTODEALER</h1>
        <button className="navbar-toggler custom-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" style={{margin:'3px'}}>
    <span className="navbar-toggler-icon"  > </span>
  </button>
          <div className="collapse navbar-collapse navbarsExample09" id="navbarText" >
              <ul className="navbar-nav">
                        <li className="nav-item active" style={{paddingLeft:'10px', paddingRight:'10px'}} >
                            <a className="nav-link" href="/" >Naslovna</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" href="/oglas" style={{paddingLeft:'10px', paddingRight:'9px'}}>Oglasi</a>
                        </li>
                        { token == "" ?  (
                        <li className="nav-item" >
                            <a className="nav-link" href="/login" style={{paddingLeft:'10px', paddingRight:'9px'}}>Log in</a>
                        </li>
                        ): ( <li> </li>)}
                        { token === "" ?  (
                        <li></li>
                          ): (  <li className="nav-item" >
                          <a className="nav-link" href="/dodajOglas" style={{paddingLeft:'10px', paddingRight:'9px'}}>Dodaj oglas</a>
                      </li>)}
                          { token !== "" ?  (
                        <li className="nav-item" >
                            <a className="nav-link" href="/mojiOglasi" style={{paddingLeft:'10px', paddingRight:'9px'}}>Moji oglasi</a>
                        </li>
                        ): ( <li> </li>)}
                        
                        </ul>
              </div>
            </nav>
           
               </header>
    )

   }

export default Nav;
