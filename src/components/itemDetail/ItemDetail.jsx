import { React, useEffect, useState } from "react";
import './itemDetail.css'

function ItemDetail(props) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const ID = props.match.params.id;

  const getData = async () => {
    const data = await fetch(`https://restcountries.eu/rest/v2/alpha/${ID}`);
    const country = await data.json();
    setCountry(country);
  };

  return (
    <>
      <div className="card-detail">
        <div className="card mb-3">
          <img src={`${country.flag}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{country.name}</h5>
            <p className="card-text">
            Capital: {country.capital}
            </p>
            <p className="card-text">
              <small className="text-muted">Región: {country.region}</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
