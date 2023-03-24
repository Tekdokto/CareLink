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
import AppointmentForm from './AppointmentForm';
import VideoCall from '../../components/VideoConference';
import CalendarComponent from '../../components/CalendarComponent';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(4),
  },
}))
const AppointmentsPage = ({toggleTheme, themeMode}) => {
//   const dispatch = useDispatch();
  const classes = useStyles();
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
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CalendarComponent />
          </Grid>
          <Grid item xs={12} sm={6}>
            <VideoCall />
          </Grid>
        </Grid>
          <Grid item xs={12} sm={12}>
          <AppointmentList
            onEdit={handleEditAppointment}
          />
          </Grid>
          <AppointmentForm open={false} onCancel={function (): void {
            throw new Error('Function not implemented.');
          } } />
        </div>
      )}
    </Layout>
  );
};
export default AppointmentsPage;