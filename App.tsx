import * as React from 'react';
import HeaderComponent from './headerComponent';
import PetCardComponent from './petCardComponent';
import './style.css';
import mockPetData from './mock-data';
import { useState } from 'react';
import AdoptedDogCounter from './adoptedDogCounter';

export default function App() {
  const [dogsAdopted, setDogsAdopted] = useState(10); 

  return (
    <div className="body">
      <HeaderComponent />
      <AdoptedDogCounter dogsAdopted={dogsAdopted} />
      <div className="grid-container">
        {mockPetData.map((petData) => (
          <div key={petData.id} className="grid-item">
            <PetCardComponent
              petData={petData}
              dogsAdopted={dogsAdopted}
              setDogsAdopted={setDogsAdopted} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
