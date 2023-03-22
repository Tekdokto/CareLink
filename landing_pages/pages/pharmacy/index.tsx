import React from 'react';
import Layout from '../../components/Layout';
import { useEffect, useState } from 'react';
// import { getPreviousCheckup, getAvailableMedications, sendRefillRequest } from '../api';
import PrescribedMedications from './PrescribedMedication';
import AvailableMedications from './AvailableMedications';

const previousCheckup = {
    date: '2022-03-15T09:00:00.000Z',
    bloodPressure: '120/80',
    cholesterol: {
      ldl: 130,
      hdl: 50,
      total: 200
    },
    prescribedMedications: [
      {
        name: 'Lipitor',
        dosage: '20mg',
        quantity: 30,
        instructions: 'Take one tablet daily'
      },
      {
        name: 'Metoprolol',
        dosage: '50mg',
        quantity: 60,
        instructions: 'Take one tablet twice daily'
      }
    ]
  }
  const medications = [
    {
      id: 1,
      name: 'Lipitor',
      description: 'Used to treat high cholesterol',
      price: 15.99
    },
    {
      id: 2,
      name: 'Metoprolol',
      description: 'Used to treat high blood pressure',
      price: 10.99
    },
    {
      id: 3,
      name: 'Ventolin',
      description: 'Used to treat asthma',
      price: 8.99
    },
    {
      id: 4,
      name: 'Zoloft',
      description: 'Used to treat depression and anxiety',
      price: 20.99
    },
    {
      id: 5,
      name: 'Metformin',
      description: 'Used to treat type 2 diabetes',
      price: 7.99
    }
  ];
  
  
const Pharmacy = ({toggleTheme, themeMode}) => {
  const [prescribedMedications, setPrescribedMedications] = useState([]);
  const [availableMedications, setAvailableMedications] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch the user's previous checkup data and get the list of prescribed medications
  useEffect(() => {
    async function fetchPreviousCheckup() {
      try {
        // const previousCheckup = await getPreviousCheckup(); // Make API request to get previous checkup data
        setPrescribedMedications(previousCheckup?.prescribedMedications);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPreviousCheckup();
  }, []);

  // Fetch the list of all available medications from the CareLink pharmacy API
  useEffect(() => {
    async function fetchAvailableMedications() {
      try {
        // const medications = await getAvailableMedications(); // Make API request to get available medications
        setAvailableMedications(medications);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAvailableMedications();
  }, []);

  // Filter the available medications based on the search query
  const filteredMedications = availableMedications.filter(medication =>
    medication.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    prescribedMedications.find(prescribed => prescribed.name === medication.name)
  );

  // Handle the refill request for a prescribed medication
  const handleRefillRequest = async (medication) => {
    try {
    //   await sendRefillRequest(medication, { /* User information */ }); // Make API request to send refill request
      alert(`Your refill request for ${medications?.name} has been sent.`);
    } catch (error) {
      console.error(error);
      alert('There was an error processing your refill request. Please try again later.');
    }
  };
    return(
        <Layout toggleTheme={toggleTheme} themeMode={themeMode}>
            <div>
                <h1>CareLink Pharmacy</h1>
                <h2>Prescribed Medications</h2>
                <PrescribedMedications medications={prescribedMedications} onRefillRequest={handleRefillRequest} />
                <h2>Available Medications</h2>
                <input type="text" placeholder="Search medications..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
                <AvailableMedications medications={filteredMedications} onRefillRequest={handleRefillRequest} />
            </div>
        </Layout>
    )
}
export default Pharmacy;
