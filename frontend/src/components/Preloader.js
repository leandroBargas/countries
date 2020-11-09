import React from 'react';

export default function Preloader({ description = 'Aguarde...' }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    >
      <div className='preloader-wrapper small active'>
        <div className='spinner-layer spinner-blue-only'>
          <div className='circle-clipper left'>
            <div className='circle'></div>
          </div>
          <div className='gap-patch'>
            <div className='circle'></div>
          </div>
          <div className='circle-clipper right'>
            <div className='circle'></div>
          </div>
        </div>
      </div>
      <span style={{ marginLeft: '10px', fontSize: '2rem' }}>
        {description}
      </span>
    </div>
  );
}
