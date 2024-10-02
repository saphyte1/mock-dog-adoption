import * as React from 'react';
import './style.css';

export default function PetCardComponent({
  petData,
  dogsAdopted,
  setDogsAdopted,
}) {
  const truncate = (input) =>
    input?.length > 300 ? `${input.substring(0, 100)}...` : input;

  // Button handler goes here!

  return (
    <div className="petCard">
      <img src={petData.img_url} alt="dogPic" className="petPic" />
      <div className="container">
        <h3>
          <b>{petData.pet_name}</b>
        </h3>
        <p className="petDescription">{truncate(petData.pet_description)}</p>

        {/* Button goes here */}
      </div>
    </div>
  );
}
