'use client'
import React, { useState } from 'react';

interface Coworker {
  first_name: string;
  last_name: string;
  inOffice: boolean;
}

const CoworkerList: React.FC = () => {
  const [coworkers, setCoworkers] = useState<Coworker[]>([
    { first_name: 'Max', last_name: 'Mustermann', inOffice: false },
    { first_name: 'Vladimir', last_name: 'Leles', inOffice: false },
    { first_name: 'Tobias', last_name: 'Anhalt', inOffice: false },
  ]);

  const toggleInOfficeStatus = (index: number) => {
    setCoworkers((prevCoworkers) => {
      const updatedCoworkers = [...prevCoworkers];
      updatedCoworkers[index].inOffice = !updatedCoworkers[index].inOffice;
      return updatedCoworkers;
    });
  };

  return (
    <div>
      {coworkers.map((coworker, index) => (
        <div key={index}>
          <p>Name: {coworker.first_name} {coworker.last_name}</p>
          <button onClick={() => toggleInOfficeStatus(index)}>{coworker.inOffice ? 'In office' : 'Out of office'}</button>
        </div>
      ))}
    </div>
  );
};

export default CoworkerList;
