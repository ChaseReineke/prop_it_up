import React from 'react';

import './App.css';
import PersonCard from './components/PersonCard.js';

function App() {
  return (
    <div className="App">
      <PersonCard LastName="Doe" FirstName="Jane" Age={45} HairColor="Black" />
      <PersonCard LastName="Smith" FirstName="John" Age={88} HairColor="Brown" />
      <PersonCard LastName="Smith" FirstName="Maria" Age={50} HairColor="Brown" />
      <PersonCard LastName="Fillmore" FirstName="Millard" Age={62} HairColor="Brown" />
    </div >
  );
}

export default App;
