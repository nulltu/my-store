import { useEffect, React, useState } from "react";
import Item from "../item";

function ItemList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const data = await fetch("https://restcountries.eu/rest/v2/region/americas");
    const countries = await data.json();
    setCountries(countries);
  };

  return (
    <div className="row container-fluid">
      {countries.map((country) => 
      (         
          <Item flag={country.flag} name={country.name} id={country.alpha2Code}/>
      ))}
    </div>
  );
}

export default ItemList;
