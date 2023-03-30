import React, { useEffect, useState } from 'react';
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
import PrivateAppointmentForm from './PrivateAppointmentForm';
import PublicAppointmentForm from './PublicAppointmentForm';
import Image from 'next/image';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    margin: theme?.spacing(0),
  },
  box: {
    backgroundColor: theme?.palette.background.paper,
    boxShadow: theme?.shadows[5],
    padding: theme?.spacing(2, 4, 3),
    textAlign: 'center',
    minHeight: '170px'
  },
  create: {
    cursor: 'pointer',
    '&.hover': {
      color: 'red'
    }
  }
}))
const AppointmentsPage = ({toggleTheme, themeMode}) => {
//   const dispatch = useDispatch();
  const [openPrivate, setOpenPrivate] = useState(false);
  const [openPublic, setOpenPublic] = useState(false);
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
          <Grid item xs={12} md={6}>
          <div className={classes.box}>
            <Image
              src="https://res.cloudinary.com/skiltime/image/upload/v1680041913/meeting1_hw1zod.png"
              alt="Create Private Appointment"
              width={200}
              height={200}
            />
            <h2 className={classes.create} onClick={()=>setOpenPrivate(!openPrivate)}>Create Private Appointment</h2>
            <p>Create an instant or scheduled Doctor 1 on 1 appointment.</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.box}>
            <Image
              src="https://res.cloudinary.com/skiltime/image/upload/v1680041913/meeting2_nyhd6g.png"
              alt="Create Public Appointment"
              width={200}
              height={200}
            />
            <h2 className={classes.create} onClick={()=>setOpenPublic(!openPublic)}>Create Public Appointment</h2>
            <p>Create an instant or scheduled multiple Doctors appointment.</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
        <div className={classes.box}>
          <h2>Appointments List</h2>
          <AppointmentList
            onEdit={handleEditAppointment}
            onAdd={handleAddAppointment}
          />
            <PrivateAppointmentForm open={openPrivate} onCancel={()=> setOpenPrivate(!openPrivate)} />
            <PublicAppointmentForm open={openPublic} onCancel={()=> setOpenPublic(!openPrivate)} />
          </div>
          </Grid>
      </Grid>
    </div>
    )}
  </Layout>
  );
};
export default AppointmentsPage;