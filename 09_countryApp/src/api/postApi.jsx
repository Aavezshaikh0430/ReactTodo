import axios from "axios"

const Api = axios.create({
    baseURL:'https://restcountries.com/v3.1'
})

//Http Get method
export const getApiCountryData = () => {
    return Api.get('/all?fields=name,population,region,capital,flags')
}

//get individual country data 

export const getApiIndCountryData = (name) => {
    return Api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
}