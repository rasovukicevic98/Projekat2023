import React from 'react';
import Nav from './Nav';
import { v4 } from 'uuid';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';

class IzmijeniOglas extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:this.props.location.state,
            isLoaded: false
        }
    }

    async componentDidMount() {
        const response1 = await axios.get("http://localhost:3000/proizvodjac/");
        const response2 = await axios.get("http://localhost:3000/model/");
        const response3=await axios.get("http://localhost:3000/automobil/"+this.state.value.id);
        console.log(response3.data);
        const a= response3.data;
        this.setState({
            items1 : response1.data,
            items2 : response2.data,
            items3: response3.data,
            Model: a[0].Model,
            Proizvodjac:  a[0].Proizvodjac,
            Godiste: a[0].Godiste,
            Kilometraza: a[0].Kilometraza,
            Kubikaza : a[0].Kubikaza,
            Kilovati: a[0].Kilovati,
            Konjska_snaga: a[0].Konjska_snaga,
            Cijena: a[0].Cijena,
            Opis: a[0].Opis,
            Pogon: a[0].Pogon,
            Gorivo: a[0].Gorivo,
            Slika: a[0].Slika,
            isLoaded: true
        });
    }

    onButtonClick = () => {
        let data = {Model:this.state.Model, Proizvodjac:this.state.Proizvodjac, Godiste:this.state.Godiste, Kilometraza:this.state.Kilometraza, Kubikaza:this.state.Kubikaza,Kilovati:this.state.Kilovati, Gorivo: this.state.Gorivo, Pogon:this.state.Pogon, Cijena: this.state.Cijena, Konjska_snaga: this.state.Konjska_snaga, Opis: this.state.Opis, Slika: this.state.Slika}
        axios.post("http://localhost:3000/dodajOglas/", data).then(
          (response) => {
            console.log(response.data);
            } ,
           (err) => window.alert('Login failed'));
    }
    onButtonClick1 =() =>{
        let data = {id: this.state.value.id, Model:this.state.Model, Proizvodjac:this.state.Proizvodjac, Godiste:this.state.Godiste, Kilometraza:this.state.Kilometraza, Kubikaza:this.state.Kubikaza,Kilovati:this.state.Kilovati, Gorivo: this.state.Gorivo, Pogon:this.state.Pogon, Cijena: this.state.Cijena, Konjska_snaga: this.state.Konjska_snaga, Opis: this.state.Opis, Slika: this.state.Slika}
        axios.put("http://localhost:3000/izmijeniOglas/", data)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
  window.alert("Oglas je uspjesno izmijenjen!");
        console.log(this.state);
        this.props.history.push({pathname:"/mojiOglasi"});
       

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
            <h6 className="centriraj">Dodaj oglas</h6>
            <form className="mx-lg-5 px-lg-5">{this.state.items3.map(automobil => (
                <div className='mx-lg-5 mx-md-5 mx-sm-5 px-lg-5' key='1'>
                <div className='mx-lg-5 mx-md-5 px-lg-5'>
                <div className="form-outline mx-4 my-4 row"style={{background:'rgba(25, 25, 25, 0.95)', padding: '10px', borderRadius:'10px', marginTop:'0px', color:'#ffffff'}}> 
                <select className="form-control col-xl-5 mt-2 col-md-11 ml-4 col-lg-11 mb-2" style={{ border: '0.8px solid grey', borderRadius:'5px'}} onChange={e=> this.handleChange(e)}><option  >
                   {automobil.Proizvodjac} </option> 
               
                   </select>
               
                <select value={this.state.Model} className="form-control model mt-2 col-xl-5 col-md-11 ml-4 mb-2 col-lg-11" style={{ border: '0.8px solid grey', borderRadius:'5px'}} onChange={e=> this.handleChange1(e)}>
                 <option value={automobil.Model}>
                {automobil.Model}</option>
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
                    <div className='ml-5 mt-4'><button type='button' onClick={this.onButtonClick1} className="btn btn-dark btn-block mb-4"style={{background:'red'}} >Izmijeni oglas</button>  </div>
                 </div>
                 </div>
                 </div>
              ))}  </form>
            {/*<div>{this.state.items.map(oglas=> (  <div key={v4()}><h1> {oglas.ID}</h1></div>    ))}</div>*/}
         {/*   <form>{this.state.items3.map(automobil => (
                <div  key='1' style={{backgroundColor: '#5f9ea0', padding:'10px'}} > 
                <select className="form-control proizvodjac" style={{margin: '5px', border: 'solid'}} onChange={e=> this.handleChange(e)}> <option  >
                   {automobil.Proizvodjac} </option> 
               
                   </select>
               
                <select className="form-control model" style={{margin: '5px', border: 'solid'}} onChange={e=> this.handleChange1(e)}>
                 <option  value={automobil.Model}>
                {automobil.Model}</option>
               </select>
               <label htmlFor='Godiste' style={{margin: '5px'}}>Godiste:  <input id='Godiste'  value= {this.state.Godiste} placeholder='automobil.Godiste' onChange={this.textChanged} name='Godiste' type='number' min={0} style={{margin: '5px', border: 'solid'}} /> </label>
                   <label htmlFor='Kilometraza' style={{margin: '5px'}}>Kilometraza:  <input id='Kilometraza' value= {this.state.Kilometraza} placeholder='123' onChange={this.textChanged} name='Kilometraza' type='text' min={0} style={{margin: '5px', border: 'solid'}}/> </label>
                   <label htmlFor='Kubikaza' style={{margin: '5px'}}>Kubikaza:  <input id='Kubikaza' value= {this.state.Kubikaza} onChange={this.textChanged} name='Kubikaza' type='text' min={0} style={{margin: '5px', border: 'solid'}}/> </label>
                   <label htmlFor='Gorivo' style={{margin: '5px'}}>Gorivo:  <input id='Gorivo' value= {this.state.Gorivo} onChange={this.textChanged} name='Gorivo' type='text' min={0} style={{margin: '5px', border: 'solid'}}/> </label>
                   <label htmlFor='Kilovati' style={{margin: '5px'}}>Kilovati:  <input id='Kilovati' value= {this.state.Kilovati} onChange={this.textChanged} name='Kilovati' type='text' min={0} style={{margin: '5px', border: 'solid'}}/> </label>
                   <label htmlFor='Pogon' style={{margin: '5px'}}>Pogon:  <input id='Pogon' value= {this.state.Pogon} onChange={this.textChanged} name='Pogon' type='text' min={0} style={{margin: '5px', border: 'solid'}}/> </label>
                   <label htmlFor='Cijena' style={{margin: '5px'}}>Cijena:  <input id='Cijena' value= {this.state.Cijena} onChange={this.textChanged} name='Cijena' type='number' min={0} style={{margin: '5px', border: 'solid'}}/> </label>
                   <label htmlFor='Konjska_snaga' style={{margin: '5px'}}>Konjska snaga:  <input id='Konjska_snaga' value= {this.state.Konjska_snaga} onChange={this.textChanged} name='Konjska_snaga' type='number' min={0} style={{margin: '5px', border: 'solid'}}/> </label>
                   <label htmlFor='Opis' style={{margin: '5px'}}>Opis:  <input id='Opis' value= {this.state.Opis} onChange={this.textChanged} name='Opis' type='text' min={0} style={{margin: '5px', border: 'solid'}}/> </label>
                   <label htmlFor='Slika' style={{margin: '5px'}}>Slika:  <input id='Slika' value= {this.state.Slika} onChange={this.textChanged} name='Slika' type='text' min={0} style={{margin: '5px', border: 'solid'}}/> </label> <br/>
                   <button type='button' onClick={this.onButtonClick1} className="btn btn-dark btn-block mb-4" >Izmijeni oglas</button> 
                 </div>
               
         ))} </form>*/}
                </div>

        )
    }
        

}
}
export default IzmijeniOglas;