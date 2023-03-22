import React from 'react';

function PrescribedMedications({ medications, onRefillRequest }) {

  const handleRefill = (medication) => {
    if (onRefillRequest) {
      onRefillRequest(medication);
    }
  }

  return (
    <div>
      {medications.map(medication => (
        <div key={medication.id}>
          <h3>{medication.name}</h3>
          <p>Dosage: {medication.dosage}</p>
          <button onClick={() => handleRefill(medication)}>Request Refill</button>
        </div>
      ))}
    </div>
  );
}

export default PrescribedMedications;
