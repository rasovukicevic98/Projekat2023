import React from 'react';
import Nav from './Nav';
import { v4 } from 'uuid';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PregledOglasa extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:this.props.location.state,
            isLoaded: false
        }
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:3000/automobil/"+this.state.value.id);
        const response1 =await axios.get("http://localhost:3000/pregledOglasa/"+this.state.value.id);
        const a=response1.data;

        this.setState({
              items: response.data,
              phone: a[0].Broj_telefona,
              isLoaded: true
        });
        
        console.log(this.state.items1)
        
    }

    render(){
        const isLoaded = this.state.isLoaded;
        if(isLoaded === true){
        
        return (
        <div><Nav/>
        <h4 className="centriraj">CAR DETAILS</h4>
        <div style={{alignSelf: 'center'}}> {this.state.items.map(automobil =>( 
           <div className="card" style={{width: "60rem", margin:'auto', padding:'0'}}  key={v4()} >
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
                                          Kubikaza: {automobil.Kubikaza}<br/>
                                          Opis: {automobil.Opis}  <br/> 
                                          Broj telefona: {this.state.phone}  </pre>
                                         
                                         
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
export default PregledOglasa;


    