import { useEffect, useState, useTransition } from "react";
import { getApiCountryData } from "../api/postApi";
import { Loader } from "../component/UI/Loader";
import { CountryCard } from "../component/Layout/CountryCard";

export const Country = () => {
  const [isLoading, startTransition] = useTransition();

  const [countries, setCountries] = useState([]);

  const countryApiData = async () => {
    const res = await getApiCountryData();
    setCountries(res.data);
   
    
  };

  useEffect(() => {
    startTransition(() => {
      countryApiData();
    });
  }, []);

  if (isLoading) return <Loader />;
  return (
    <section className="country-section">
      <ul className="grid grid-three-cols">
        {countries.map((curCuntry, index) => {
          return <CountryCard country={curCuntry} key = {index} />;
        })}
      </ul>
    </section>
  );
};
