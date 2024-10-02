import * as React from 'react';
import './style.css';

export default function AdoptedDogCounter({ dogsAdopted }) {
  return (
    <div>
      <div className="banner">
        <p className="bannerText">We've helped </p>
        <p className="numberText">{dogsAdopted} </p>
        <p>dogs find their forever homes</p>
      </div>
    </div>
  );
}
