//  <!-- https://app.exchangerate-api.com/activate/d9a04cc2fdcf39b65bf59c0327 -->

import axios from "axios";

const api = axios.create({
    baseURL: "https://api.beta.fastforex.io/7e71b8c486-ec0a6effd6-t1ul7o",
});

//get request

export const currencyConverter = (fromCurrency, toCurrency, amount) => {
    return api.get(`${fromCurrency}/${toCurrency}/${amount}`);
}
 


