import React from 'react';
import Nav from './Nav';
import { v4 } from 'uuid';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MojiOglasi extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:this.props.location.state,
            imep: "",
            imem: "",
            odC: 0,
            doC: 0,
            isLoaded: false
        }
      // this.handleChange=this.handleChange.bind(this);
      

    }


    async componentDidMount() {
        const inn=2;
        let d = JSON.parse(localStorage.getItem("data"));
const userId = d.id;
console.log(userId);
        const response1 = await axios.get("http://localhost:3000/proizvodjac/");
        const response2 = await axios.get("http://localhost:3000/oglasi/");
        const response3 = await axios.get("http://localhost:3000/model/");
        const response4 = await axios.get("http://localhost:3000/model/");
        const response5 = await axios.get("http://localhost:3000/automobil/");
        const response6 = await axios.get("http://localhost:3000/mojiOglasi/"+userId);
        this.setState({
              items1 : response1.data,
              items2 : response2.data,
              items3 : response3.data,
              items4 : response4.data,
              items5 : response5.data,
              items6: response6.data,
              isLoaded: true
        });
        
        
        
    }
   
async onButtonClick(ID) {
   await  axios.delete("http://localhost:3000/mojiOglasi/ogg/"+ID)
  .then(response => {
      axios.delete("http://localhost:3000/mojiOglasi/"+ID).then(response => {
        window.alert("Oglas je uspjesno obrisan");
        window.location.reload(false);    })
  })
  .catch(error => {
    console.error(error);
  });
 
}
   
    render(){
        
        const isLoaded = this.state.isLoaded;    
               if(isLoaded === true){
        
        return (
        <div className='bg-light'><Nav/>
        {/*<div>{this.state.items.map(oglas=> (  <div key={v4()}><h1> {oglas.ID}</h1></div>    ))}</div>*/}
       
            <div className="m-5">
                                <div className='row' >
                                {this.state.items6.map(automobil =>(  
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
                                                                    Kubikaza: {automobil.Kubikaza} </pre>
                                                                   
                                                                  
                      {/*   <Link to={{ pathname:"/musicalevents", state:{id:instrument.InstrumentName}}}><button className='btn btn-dark m-1' style={{background:'#380101', opacity:'0.9' ,color:'#fcfafa'}} > See Related Musical Events for  {instrument.InstrumentName} </button> </Link>*/}
                      <Link to={{ pathname:"/izmijeniOglas", state:{id:automobil.ID}}}><button className='btn' style={{background:'red', opacity:'0.9', color:'#fcfafa', margin:'3px', border:'solid black'}}> Izmijeni oglas </button> </Link>  <br></br>
                                 <button className='btn' onClick={()=> this.onButtonClick(automobil.ID)} style={{background:'red', opacity:'0.9', color:'#fcfafa', margin: '3px', border:'solid black'}}> Obrisi oglas </button>  <br></br>   
                                   </div >
                                         <ul  style={{background:'rgba(25, 25, 25, 0.95)', borderRadius:'0 0px 5px 5px'}} className="list-group list-group-flush">
                                         <li className="list-group-item mx-5 mb-2"  style={{background:'red', opacity:'0.9' ,color:'#fcfafa', borderRadius:'5px'}}>Cijena:  {automobil.Cijena} </li>
                                     </ul>
                                     
                                 </div>
                                        
                                            
                                                                              
                                                                           
                                       
                                             
                                             
                                       
                                    
                                ))}
                                </div>
                        </div> 

        </div>)
    
        }
    }

}

export default MojiOglasi;