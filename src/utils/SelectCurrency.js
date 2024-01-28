import React, {Component} from "react";
<<<<<<< HEAD
import Cookies  from "universal-cookie";


const Currency = [{ item: "Dólar(USD)", value: "USD" }, { item: "Pesos (CLP)", value: "CLP" }];
const cookie = new Cookies();
=======

const Currency = [{ item: "Dólar(USD)", value: "USD" }, { item: "Pesos (CLP)", value: "CLP" }];


>>>>>>> mario
export class SelectCurrency extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
<<<<<<< HEAD
    
    cookie.set('CurrencyCode', e.currentTarget.value, { path: '/'});
=======
     console.log('Capturamos el Evento: ', e.target.value)
>>>>>>> mario
    };

    render(){
       
        return (<div>
<<<<<<< HEAD
           <select id="selectCurrency" defaultValue={cookie.get('CurrencyCode') ? 'USD' : cookie.get('CurrencyCode')} onChange={this.handleChange}> 
=======
           <select id="selectCurrency" defaultValue={'USD'} onChange={this.handleChange}> 
>>>>>>> mario
              {Currency.map((item, i) => {
                 return <option key={i} value={item.value}>{item.item}</option>
               })}
           </select>
       </div>)
    };

}