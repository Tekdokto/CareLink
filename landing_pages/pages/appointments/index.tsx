import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/types';
import {
  getAppointments,
  addAppointment,
  editAppointment,
  deleteAppointment,
} from '../../redux/actions/AppointmentActions';
import { Appointment } from '../../redux/types/AppointmentTypes';
import AppointmentList from './AppointmentsList';
import Layout from '../../components/Layout';

const AppointmentsPage = ({toggleTheme, themeMode}) => {
//   const dispatch = useDispatch();
  const appointments = useSelector(
    (state: RootState) => state.appointmentPage.appointments
  );
  const appointmentsId = useSelector(
    (state: RootState) => state.appointmentPage.appointments[0].id
  );
  const isLoading = useSelector(
    (state: RootState) => state.appointmentPage.loading
  );
  const error = useSelector(
    (state: RootState) => state.appointmentPage.error
  );

  useEffect(() => {
    getAppointments();;
  }, [appointments]);

  const handleAddAppointment = (appointment: Appointment) => {
    addAppointment(appointment);
  };

  const handleEditAppointment = (updatedAppointment: Appointment) => {
    editAppointment(appointmentsId, updatedAppointment);
  };

  const handleDeleteAppointment = () => {
    deleteAppointment(appointmentsId);
  };

  return (
    <Layout toggleTheme={toggleTheme} themeMode={themeMode}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error?.message}</p>}
      {!isLoading && !error && (
        <>
          <AppointmentList
            onEdit={handleEditAppointment}
          />
          {/* <AppointmentForm /> */}
        </>
      )}
    </Layout>
  );
};
export default AppointmentsPage;