//import Cookies from "universal-cookie";
// import { useContext } from "react";
// import { contexto } from "../components/contexto/contexto";
import { useCurrencyContext } from "../components/contexto/ContextoDatos";
//const cookie = new Cookies();


export const CurrencySeleted = () => {
    const currencyCode = useCurrencyContext();
    return currencyCode == null ? 'USD' : currencyCode;
}

// export const OnCurrencyChanged = (callback) => {
//     $('#selectCurrency').on('change', callback);
// }
