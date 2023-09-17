import React from 'react';
import Nav from './Nav';
import { v4 } from 'uuid';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Oglas extends React.Component {
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
        
        const response1 = await axios.get("http://localhost:3000/proizvodjac/");
        const response2 = await axios.get("http://localhost:3000/oglasi/");
        const response3 = await axios.get("http://localhost:3000/model/");
        const response4 = await axios.get("http://localhost:3000/model/");
        const response5 = await axios.get("http://localhost:3000/automobil/");
        this.setState({
              items1 : response1.data,
              items2 : response2.data,
              items3 : response3.data,
              items4 : response4.data,
              items5 : response5.data,
              isLoaded: true
        });
        
        
        
    }
   handleChange(e){
    const  prob=e.target.value;
    this.setState({ imep: e.target.value });
    
}
   
   handleChange1(e){
    //console.log(e.target.value);
    this.setState({ imem: e.target.value });
    
    
   }
  
   textChanged = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}
   
    render(){
        const isLoaded = this.state.isLoaded;    
               if(isLoaded === true){
        
        return (
            <div className='bg-light' ><Nav/>   {/* style={{background:'#e3e3e3'}}*/}
        <h4 className="centriraj mt-4">Filtriraj pretragu</h4>
        {/*<div>{this.state.items.map(oglas=> (  <div key={v4()}><h1> {oglas.ID}</h1></div>    ))}</div>*/}
        <form className='mx-lg-5'>
            <div className='mx-lg-5'>
                
            <div className="form-outline mx-4 row" style={{background:'rgba(25, 25, 25, 0.95)', padding:'10px', borderRadius:'10px', marginTop:'0px'}}> 
            <select className="form-control col-xl-6 col-md-11 ml-4 col-lg-11" style={{margin: '5px',border: '0.8px solid grey', borderRadius:'5px',}} value={this.state.imep} onChange={e=> this.handleChange(e)}>{this.state.items1.map(proizvodjac => (  <option key={v4()}  >
               {proizvodjac.Ime} </option> 
           
               ))}</select>
           
            <select value={this.state.imem} className="form-control model col-xl-5 col-md-11 ml-4 col-lg-11" style={{margin: '5px',border: '0.8px solid grey', borderRadius:'5px',}} onChange={e=> this.handleChange1(e)}>
            {this.state.items3.map(model => (  <option key={v4()}  value={model.Ime}>
            {model.Ime}</option>))}
           </select>
                <div className='row' id='ogl'>
                    <div className='col-lg-5 col-md'> <label htmlFor='odC'  style={{margin: '5px', color:'#ffffff'}}>Min price:  <input id='odC' value= {this.state.odC} onChange={this.textChanged} name='odC' type='number'min={0} style={{margin: '5px',  border: '0.8px solid grey', borderRadius:'5px',}}/> </label> </div>
                    <div className='col-lg-5 col-md'> <label htmlFor='doC'  style={{margin: '5px' , color:'#ffffff'}}>Max price:  <input id='doC' value= {this.state.doC} onChange={this.textChanged} name='doC' type='number' min={0} style={{margin: '5px', border: '0.8px solid grey', borderRadius:'5px',}}/> </label> </div>
                    <div className='col-lg-2 col-md'> <Link to={{ pathname:"/filtrirajPretragu", state:{imep: this.state.imep, imem: this.state.imem, odC: this.state.odC, doC:this.state.doC}}}><button className='btn m-2 px-4' style={{background:'red', opacity:'0.9', color:'#fcfafa'}}> Search </button> </Link> </div>
                </div>
          </div>
          </div>
            </form>
            <div className="m-5" >
                            <h1 style={{margin: "0 0 50px 0", textAlign:'center'}}> OGLASI</h1> 
                                <div className='row' >
                                {this.state.items5.map(automobil =>(  
                                    
                                        
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
                                       
                                    
                                ))}
                                </div>
                        </div> 

        </div>
        )
    
        }
    }

}

export default Oglas;