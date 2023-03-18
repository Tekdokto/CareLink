import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import { addAppointment, editAppointment } from '../../redux/actions/AppointmentActions';
import { Appointment } from '../../redux/types/AppointmentTypes';
import RootState from '../../redux/reducers';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

interface AppointmentFormProps {
  open: boolean;
  onClose: () => void;
  appointment?: Appointment;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ open, onClose, appointment }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const doctors = useSelector((state: RootState) => state.doctors);

  const [patientName, setPatientName] = useState(appointment ? appointment.patientName : '');
  const [doctorName, setDoctorName] = useState(appointment ? appointment.doctorName : '');
  const [date, setDate] = useState(appointment ? appointment.date : '');
  const [time, setTime] = useState(appointment ? appointment.time : '');
  const [type, setType] = useState(appointment ? appointment.type : '');

  const handleSave = () => {
    const newAppointment: Appointment = {
      id: appointment ? appointment.id : '',
      patientName,
      doctorName,
      date,
      time,
      type,
    };

    if (appointment) {
      dispatch(updateAppointment(newAppointment));
    } else {
      dispatch(addAppointment(newAppointment));
    }

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{appointment ? 'Edit Appointment' : 'Add Appointment'}</DialogTitle>
      <DialogContent>
        <DialogContentText>Please fill out the form to add a new appointment.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="patientName"
          label="Patient Name"
          type="text"
          fullWidth
          value={patientName}
          onChange={(event) => setPatientName(event.target.value)}
        />
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="doctorName-label">Doctor Name</InputLabel>
          <Select
            labelId="doctorName-label"
            id="doctorName"
            value={doctorName}
            onChange={(event) => setDoctorName(event.target.value as string)}
          >
            {doctors.map((doctor) => (
              <MenuItem key={doctor.id} value={doctor.name}>
                {doctor.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          id="date"
          label="Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <TextField
          margin="dense"
          id="time"
          label="Time"
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
                labelId="type-label"
                id="type"
                value={type}
                onChange={(event) => setType(event.target.value as string)}
            >
                <MenuItem value="Checkup">Checkup</MenuItem>
                <MenuItem value="Follow-up">Follow-up</MenuItem>
                <MenuItem value="Procedure">Procedure</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
    </Dialog>
);
};
export default AppointmentForm;
