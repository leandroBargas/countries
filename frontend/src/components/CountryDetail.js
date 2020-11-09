import React from 'react';

import * as api from '../services/countryApi';
import { useParams, Link } from 'react-router-dom';
import Preloader from './Preloader';

const ArrowLeft = ({ id }) => {
  return id - 1 > 0 ? (
    <Link to={`/country/${id - 1}`}>
      <span className='material-icons' style={styles.arrowStyle}>
        keyboard_arrow_left
      </span>
    </Link>
  ) : (
    <span>&nbsp;</span>
  );
};

const ArrowRight = ({ id }) => {
  return (
    <Link to={`/country/${id + 1}`}>
      <span className='material-icons' style={styles.arrowStyle}>
        keyboard_arrow_right
      </span>
    </Link>
  );
};

export default function CountryDetail() {
  const [countryData, setCountryData] = React.useState(null);

  const { id: idString } = useParams();
  const id = parseInt(idString, 10);

  React.useEffect(() => {
    api.getCountry(id).then((country) => {
      setCountryData(country);
    });
  }, [id]);

  if (!countryData) {
    return <Preloader />;
  }

  const { name, flag, population, area } = countryData;
  const { titleStyle, homeStyle, flagStyle } = styles;

  return (
    <div className='container'>
      <div className='center'>
        <Link to='/'>
          <h1 className='material-icons' style={homeStyle}>
            home
          </h1>
        </Link>
      </div>

      <h2 className='center'>{name}</h2>

      <div className='center' style={titleStyle}>
        <ArrowLeft id={id} />

        <img style={flagStyle} src={flag} alt={name} />

        <ArrowRight id={id} />
      </div>

      <ul>
        <li>
          <strong>População: </strong>
          {formatNumber(population)} habitantes
        </li>
        <li>
          <strong>Área: </strong>
          {formatNumber(area)} m²
        </li>
      </ul>
    </div>
  );
}

function formatNumber(value) {
  return Intl.NumberFormat('pt-BR').format(value);
}

const styles = {
  titleStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flagStyle: {
    width: '25%',
    height: '25%',
    border: '1px solid lightgray',
  },

  arrowStyle: {
    fontSize: '4rem',
  },

  homeStyle: {
    fontSize: '2rem',
  },
};
