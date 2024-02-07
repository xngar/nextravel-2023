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

// HotelProgramaEncabezadoRow  receive as parameter
export function isHotelColumn(row) {
    let tituloColumna = '';

    if (!row.IdColumna) {
        return false;
    }

    if ((row).IdColumnaTituloColumna) {
        tituloColumna = (row).IdColumnaTituloColumna;
    } else {
        tituloColumna = (row).IdColumnaTituloColumna;
    }

    return tituloColumna.toLowerCase().indexOf('hotel') > -1;
}

/// Handler para Controles de Fecha Desde/Hasta validando Menor/Mayor que.
// export function handlerFechas(args, campoDesde, campoHasta){

//     // Capturo los Editores.
//     let fecDesde = args.widget;
//     let fecHasta = args.widget.element.nextAll('datepicker').getWidget('datepicker');
//     // Agrego la validación de la fecha.
//     fecHasta.element.datepicker("option", "beforeShow", (Element, inst) => {
//         return { minDate: Q.parseDate(fecDesde.value) };
//     });

//     if (fecDesde.valueAsDate && fecHasta.valueAsDate && fecHasta.valueAsDate < fecDesde.valueAsDate) {
//         fecHasta.value = fecDesde.value;
//     }

//     // Completo los Parametros del sp.
//     args.request[campoDesde] = fecDesde.value;
//     args.request[campoHasta] = fecHasta.value;

//     args.active = !Q.isEmptyOrNull(fecDesde.value) || !Q.isEmptyOrNull(fecHasta.value);
// }

// export function CurrencySeleted() : string {
//     return $('#selectChange').val() || Q.getCookie("CurrencyCode") || "USD";
// }

// export function OnCurrencyChanged(callback) {
//     $('#selectChange').on("change", callback);
// }

// export function ClickNextSlider() {
//     $.prototype.next = function () {
//         if (this.sliding) return
//         return this.slide('next')
//     }
// }