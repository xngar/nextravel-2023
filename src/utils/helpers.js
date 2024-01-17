//import Cookies from "universal-cookie";
import { useContext } from "react";
import { contexto } from "../components/contexto/contexto";

//const cookie = new Cookies();
const context = useContext(contexto);

export const CurrencySeleted =()=> {
    return $('#selectCurrency').val() || context.currencyCode || 'USD';
}

export const OnCurrencyChanged = (callback) => {
    $('#selectCurrency').on('change', callback);
}