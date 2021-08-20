import { React, useEffect, useState } from "react";
import './itemDetail.css'

function ItemDetail(props) {
  const [country, setCountry] = useState([]);

  const ID = props.match.params.id;

  useEffect(() => {
    const getCountry = async () => {
      const data = await fetch(`https://restcountries.eu/rest/v2/alpha/${ID}`);
      const country = await data.json();
      setCountry(country);
    };
    getCountry();
  }, [ID]);

  console.log(country);
  return (
    <>
      <div className="row d-flex justify-content-around">
        <div className="card mb-3 col 3">
          <div className="card-body">
            <h5 className="">{country.name}</h5>
            <p className="card-text">
            Capital: {country.capital}
            </p>
            <p className="card-text">
            Nombre Nativo: {country.nativeName}
            </p>
            <p className="card-text">
            subregion: {country.subregion}
            </p>
            <p className="card-text">
              <small className="text-muted">Región: {country.region}</small>
            </p>
          </div>
        </div>
        <div className="col-9">
        <img src={`${country.flag}`} className="card-img-top" alt="..." />
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
