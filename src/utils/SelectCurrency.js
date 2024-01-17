import React, {Component} from "react";
//import Cookies  from "universal-cookie";


const Currency = [{ item: "Dólar(USD)", value: "USD" }, { item: "Pesos (CLP)", value: "CLP" }];
//const cookie = new Cookies();
export class SelectCurrency extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
    
   // cookie.set('CurrencyCode', e.currentTarget.value, { path: '/'});
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