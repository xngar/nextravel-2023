import Cookies from "universal-cookie";

const cookie = new Cookies();

export const CurrencySeleted =()=> {
    return $('#selectCurrency').val() || cookie.get('CurrencyCode') || 'USD';
}

export const OnCurrencyChanged = (callback) => {
    $('#selectCurrency').on('change', callback);
}