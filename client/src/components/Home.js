import React from 'react';
import index from '../index.css';
import Nav from './Nav';
import {Link} from 'react-router-dom';
class Home extends React.Component {
    logout = () => {        
        localStorage.removeItem('data'); 
    }

    render(){
        
      // let d = JSON.parse(localStorage.getItem("data"));
    //const token=d.token;
        return (
        <div><Nav/>
        <Link id='logout' to={'/login'} onClick={this.logout} className="nav-link btn btn-outline-dark" style={{fontSize:'15px', border:'black 0px solid', color:'#000000', margin:'0px', padding:'5px'}}>Logout</Link>
         <nav className="navbar navbar-expand-lg" style={{background:"#f7f2f2"}}>
                  <ul className="navbar-nav ms-auto">
                     <li className="nav-item"></li> 
                  </ul>
                  </nav>
       
        <section id="about" class="d-flex align-items-center">
         <div className="container position-relative" id="trnsp" data-aos="fade-up" data-aos-delay="500">
      ,  <h1>Dobrodošli na Autodealer!</h1>
         <h2>Autodealer je web aplikacija koja kupovinu i prodaju automobila čini jednostavnom. Ovdje možete pronaći Vaš željeni automobil za samo par klikova. Nudimo širok izbor automobila raznih proizvodjača i modela. Sve informacije o automobilima i prodavcima su lako dostupne. Takodje možete i prodati svoje auto.. Napravite nalog i dodajte oglas i nećete dugo čekati do poziva kupca. Želimo Vam srećnu kupovinu!</h2>
         
         </div>
         </section>

       
        </div>)
    
    
    }

}

export default Home;