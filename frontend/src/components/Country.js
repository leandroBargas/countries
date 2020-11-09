import React from 'react';
import { Link } from 'react-router-dom';

export default function Country({ children: country }) {
  const { id, name, flag } = country;
  const { flagStyle, cardContentStyle, cardStyle } = styles;

  return (
    <div className='card' style={cardStyle}>
      <Link to={`/country/${id}`}>
        <div className='card-content' style={cardContentStyle}>
          <div className='card-image'>
            <img style={flagStyle} src={flag} alt={name} />
          </div>

          <span className='center'>{name}</span>
        </div>
      </Link>
    </div>
  );
}

const styles = {
  cardStyle: {
    width: '200px',
    margin: '10px',
  },

  cardContentStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //cursor: 'pointer',
  },

  flagStyle: {
    width: '100px',
    height: '50px',
  },
};
