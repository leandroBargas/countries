import React from 'react';

import * as api from '../services/countryApi';
import Preloader from './Preloader';
import Country from './Country';

export default function Countries() {
  const [allCountries, setAllCountries] = React.useState([]);

  React.useEffect(() => {
    api.getAllCountries().then((countries) => {
      setTimeout(() => {
        setAllCountries(countries);
      }, 500);
    });
  }, []);

  if (!allCountries || allCountries.length === 0) {
    return <Preloader />;
  }

  return (
    <div className='container'>
      <h1 className='center'>Países</h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {allCountries.map((country) => (
          <Country key={country.id}>{country}</Country>
        ))}
      </div>
    </div>
  );
}
