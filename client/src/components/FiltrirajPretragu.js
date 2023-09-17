import React from 'react';
import Nav from './Nav';
import { v4 } from 'uuid';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';

class FiltrirajPretragu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:this.props.location.state,
            isLoaded: false
        }
    }

    async componentDidMount() {
        let data = {imeProizvodjaca:this.state.value.imep, imeMarke:this.state.value.imem, odCijena:this.state.value.odC, doCijena:this.state.value.doC}
        console.log(data);

        const response = await axios.get("http://localhost:3000/filtrirajPretragu", {params:data});
        console.log(response.data);
        
        this.setState({
            items:response.data,
            isLoaded:true
        })
        
    }

    render(){
        const isLoaded = this.state.isLoaded;    
        if(isLoaded === true){
        
        return (
        <div><Nav/>
       
        <div> {this.state.items.map(automobil =>( 
           <div className="card" style={{width: "18rem", margin:'10px', padding:'0' }}  key={v4()} >
           <img className="card-img-top" src={automobil.Slika} alt='pic of the car' />
           <div className="card-body " style={{background:'rgba(25, 25, 25, 0.95)'}}>
               <h4 className="card-title">{automobil.proizvodjac}</h4>
               <pre className="card-text" style={{color:'#ffffff'}}>Karakteristike: <br/>
                                          Proizvodjac: {automobil.Proizvodjac} <br/>
                                          Model: {automobil.Model} <br/>
                                          Godiste: {automobil.Godiste} <br/>
                                          Kilometraza: {automobil.Kilometraza} <br/>
                                          Kilovati: {automobil.Kilovati} <br/>
                                          Pogon: {automobil.Pogon} <br/>
                                          Gorivo: {automobil.Gorivo} <br/>
                                          Konjska snaga: {automobil.Konjska_snaga} <br/>
                                          Kubikaza: {automobil.Kubikaza}</pre>
                                         
                                          <Link to={{ pathname:"/pregledOglasa", state:{id:automobil.ID}}} style={{color:'red'}}> Vise detalja  </Link>  <br></br>
{/*   <Link to={{ pathname:"/musicalevents", state:{id:instrument.InstrumentName}}}><button className='btn btn-dark m-1' style={{background:'#380101', opacity:'0.9' ,color:'#fcfafa'}} > See Related Musical Events for  {instrument.InstrumentName} </button> </Link>*/}
         </div >
               <ul  style={{background:'rgba(25, 25, 25, 0.95)', borderRadius:'0 0px 5px 5px'}} className="list-group list-group-flush">
               <li className="list-group-item mx-5 mb-2"  style={{background:'red', opacity:'0.9' ,color:'#fcfafa', borderRadius:'5px'}}>Cijena:  {automobil.Cijena} </li>
           </ul>
           
       </div>

       ))} </div> 
        </div>
        

        
        
       )
    
        }
}
}
export default FiltrirajPretragu;