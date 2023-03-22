import { useState } from 'react';

function AvailableMedications({ medications, onRefillRequest }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the medications based on the search query
  const filteredMedications = medications.filter(medication =>
    medication.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Available Medications</h2>
      <input type="text" placeholder="Search for medication" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <ul>
        {filteredMedications.map(medication => (
          <li key={medication.id}>
            <div>{medication.name}</div>
            <div>{medication.description}</div>
            <button onClick={() => onRefillRequest(medication)}>Refill</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableMedications;
