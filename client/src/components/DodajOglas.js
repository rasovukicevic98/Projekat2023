import React from 'react';
import Nav from './Nav';
import { v4 } from 'uuid';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';

class DodajOglas extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:this.props.location.state,
            isLoaded: false
        }
    }

    async componentDidMount() {
        let d = JSON.parse(localStorage.getItem("data"));
const userId = d.id;
        const response1 = await axios.get("http://localhost:3000/proizvodjac/");
        const response2 = await axios.get("http://localhost:3000/model/");
        const response3 = await axios.get("http://localhost:3000/automobil/getmax/gett");
        this.setState({
            items1 : response1.data,
            items2 : response2.data,
            Model: "",
            Proizvodjac: "",
            Godiste: 0,
            Kilometraza: "",
            Kubikaza : "",
            Kilovati: "",
            Konjska_snaga: 0,
            Cijena: 0,
            Opis: "",
            Pogon: "",
            Gorivo: "",
            Slika: "",
            userID: userId,
            ajde: 0,
            maxID: response3.data,
            maxx: 0,
            isLoaded: true
        });
        console.log(this.state.userID);
        
    }
    async executeQueryInsert(id){
         
             let data1={maxx:id,userID:this.state.userID};
             axios.post("http://localhost:3000/dodajOglas/dodaj/oglas/", data1).then(
              (response) => {
                console.log(response.data);
                window.alert("Oglas je uspjesno unesen!");
                } ,
               (err) => window.alert('Login failed'));
          
    }

    async onButtonClick(){
        let data = {Model:this.state.Model, Proizvodjac:this.state.Proizvodjac, Godiste:this.state.Godiste, Kilometraza:this.state.Kilometraza, Kubikaza:this.state.Kubikaza,Kilovati:this.state.Kilovati, Gorivo: this.state.Gorivo, Pogon:this.state.Pogon, Cijena: this.state.Cijena, Konjska_snaga: this.state.Konjska_snaga, Opis: this.state.Opis, Slika: this.state.Slika}
    // console.log(this.state.maxID.maxID);
    // let data1={userID:this.state.userID};
      await axios.post("http://localhost:3000/dodajOglas/", data).then(
        (response) => {
          console.log(response.data);
           let max = response.data.maxId;
            this.executeQueryInsert(max);
          } ,
         (err) => window.alert('Login failed'));
    
    }
    handleChange(e){
        const  prob=e.target.value;
        this.setState({ Proizvodjac: e.target.value });
        
    }
       
       handleChange1(e){
        //console.log(e.target.value);
        this.setState({ Model: e.target.value });
        
        
       }
      
       textChanged = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render(){
        const isLoaded = this.state.isLoaded;    
        if(isLoaded === true){
        
        return(
            <div className='bg-light'><Nav/>
            <h4 className="centriraj mt-4">Dodaj oglas</h4>
            {/*<div>{this.state.items.map(oglas=> (  <div key={v4()}><h1> {oglas.ID}</h1></div>    ))}</div>*/}
            <form className="mx-lg-5 px-lg-5">
                <div className='mx-lg-5 mx-md-5 mx-sm-5 px-lg-5'>
                <div className='mx-lg-5 mx-md-5 px-lg-5'>
                <div className="form-outline mx-4 my-4 row"style={{background:'rgba(25, 25, 25, 0.95)', padding: '10px', borderRadius:'10px', marginTop:'0px', color:'#ffffff'}}> 
                <select className="form-control col-xl-5 mt-2 col-md-11 ml-4 col-lg-11 mb-2" style={{ border: '0.8px solid grey', borderRadius:'5px'}} value={this.state.Proizvodjac} onChange={e=> this.handleChange(e)}>{this.state.items1.map(proizvodjac => (  <option key={v4()}  >
                   {proizvodjac.Ime} </option> 
               
                   ))}</select>
               
                <select value={this.state.Model} className="form-control model mt-2 col-xl-5 col-md-11 ml-4 mb-2 col-lg-11" style={{ border: '0.8px solid grey', borderRadius:'5px'}} onChange={e=> this.handleChange1(e)}>
                {this.state.items2.map(model => (  <option key={v4()}  value={model.Ime}>
                {model.Ime}</option>))}
               </select>
               <div className='ml-5'>
                    <div className='row' > <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12'> <label htmlFor='Godiste'>Godiste:  </label> <input id='Godiste' value= {this.state.Godiste} onChange={this.textChanged} name='Godiste' type='number' min={0} style={{margin: '5px', marginLeft: '15px',  border: '0.8px solid grey', borderRadius:'5px', width:'50%'}}/></div> 
                    <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12'><label htmlFor='Kilometraza'>Kilometraza:  </label><input id='Kilometraza' value= {this.state.Kilometraza} onChange={this.textChanged} name='Kilometraza' type='text' min={0} style={{margin: '5px', border: '0.8px solid grey', borderRadius:'5px', width:'50%'}}/> </div> </div>
                    <div className='row' > <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12'><label htmlFor='Kubikaza'>Kubikaza: </label> <input id='Kubikaza' value= {this.state.Kubikaza} onChange={this.textChanged} name='Kubikaza' type='text' min={0} style={{margin: '5px',  border: '0.8px solid grey', borderRadius:'5px' , width:'50%'}}/></div> 
                    <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12'><label htmlFor='Kilovati'>Kilovati:  </label><input id='Kilovati' value= {this.state.Kilovati} onChange={this.textChanged} name='Kilovati' type='text' min={0} style={{margin: '5px', marginLeft: '36px',border: '0.8px solid grey', borderRadius:'5px', width:'50%'}}/> </div></div>
                    <div className='row' ><div className='col-xl-5 col-lg-12 col-md-12 col-sm-12'><label htmlFor='Gorivo'>Gorivo: </label> <input id='Gorivo' value= {this.state.Gorivo} onChange={this.textChanged} name='Gorivo' type='text' min={0} style={{margin: '5px', border: '0.8px solid grey', borderRadius:'5px', marginLeft: '20px', width:'50%'}}/> </div>
                    <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12'><label htmlFor='Pogon'>Pogon:  </label><input id='Pogon' value= {this.state.Pogon} onChange={this.textChanged} name='Pogon' type='text' min={0} style={{margin: '5px',marginLeft: '41px', border: '0.8px solid grey', borderRadius:'5px',  width:'50%'}}/></div></div>
                    <div className='row' ><div className='col-xl-5 col-lg-12 col-md-12 col-sm-12'><label htmlFor='Cijena'>Cijena: </label> <input id='Cijena' value= {this.state.Cijena} onChange={this.textChanged} name='Cijena' type='number' min={0} style={{margin: '5px', marginLeft: '24px',border: '0.8px solid grey', borderRadius:'5px', width:'50%'}}/>  </div>
                    <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12'><label htmlFor='Konjska_snaga'>Konjska snaga: </label> <input id='Konjska_snaga' value= {this.state.Konjska_snaga} onChange={this.textChanged} name='Konjska_snaga' type='number' min={0} style={{margin: '5px', border: '0.8px solid grey', borderRadius:'5px', width:'40%' }}/> </div></div>
                    <div className='col-12 my-2'><label htmlFor='Opis'>Opis: </label> <textarea id='Opis' value= {this.state.Opis} onChange={this.textChanged} name='Opis' type='text' min={0} style={{margin: '5px', border: '0.8px solid grey', borderRadius:'5px', width:'88%', padding:'0px'}}/> </div>
                    <div className='col-12'><label htmlFor='Slika'>Slika:</label>  <input id='Slika' value= {this.state.Slika} onChange={this.textChanged} name='Slika' type='text' min={0} style={{margin: '5px', border: '0.8px solid grey', borderRadius:'5px', width:'88%'}}/> <br/> </div>
                    </div>
                    <div className='ml-5 mt-4'><button type='button' onClick={()=> this.onButtonClick()} className="btn btn-dark btn-block mb-4"style={{background:'red'}} >Dodaj oglas</button>  </div>
                 </div>
                 </div>
                 </div>
                </form>
                </div>
        )
    }
        

}
}
export default DodajOglas;