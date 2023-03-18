import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RootState from '../../redux/reducers';
import {
  getAppointments,
  addAppointment,
  editAppointment,
  deleteAppointment,
} from '../../redux/actions/AppointmentActions';
import { Appointment } from '../../redux/types/AppointmentTypes';
import AppointmentList from './AppointmentsList';

const AppointmentsPage = () => {
//   const dispatch = useDispatch();
  const appointments = useSelector(
    (state: RootState) => state.appointmentPage.appointments
  );
  const appointmentsId = useSelector(
    (state: RootState) => state.appointmentPage.appointments.id
  );
  const isLoading = useSelector(
    (state: RootState) => state.appointmentPage.isLoading
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
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && (
        <>
          <AppointmentList
            onEdit={handleEditAppointment}
          />
          {/* <AppointmentForm /> */}
        </>
      )}
    </div>
  );
};
export default AppointmentsPage;