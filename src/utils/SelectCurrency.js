import React, {Component, useContext} from "react";
import { contexto } from "../components/contexto/contexto";
//import Cookies  from "universal-cookie";


const Currency = [{ item: "Dólar(USD)", value: "USD" }, { item: "Pesos (CLP)", value: "CLP" }];

//const cookie = new Cookies();
export class SelectCurrency extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        const context = useContext(contexto);
   // cookie.set('CurrencyCode', e.currentTarget.value, { path: '/'});
       context.setCurrencyCode(e.currentTarget.value);
    };

    render(){
       
        return (<div>
           <select id="selectCurrency" defaultValue={'USD'} onChange={this.handleChange}> 
              {Currency.map((item, i) => {
                 return <option key={i} value={item.value}>{item.item}</option>
               })}
           </select>
       </div>)
    };

}