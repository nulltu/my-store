import { React, useEffect, useState} from 'react';

function ItemDetail() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
        const data = await fetch("https://restcountries.eu/rest/v2/alpha/co");
        const countries = await data.json();
        setCountries(countries);
      };
    
      console.log(countries);

    return (
        <div>
            <p>Soy el detalle</p>
        </div>
    )
}

export default ItemDetail
