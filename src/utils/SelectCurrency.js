import React, { Component } from "react";

const Currency = [{ item: "Dólar(USD)", value: "USD" }, { item: "Pesos (CLP)", value: "CLP" }];


export class SelectCurrency extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        console.log('Capturamos el Evento: ', e.target.value)
    };

    render() {

        return (<div>
            <select id="selectCurrency" defaultValue={'USD'} onChange={this.handleChange}>
                {Currency.map((item, i) => {
                    return <option key={i} value={item.value}>{item.item}</option>
                })}
            </select>
        </div>)
    };

}