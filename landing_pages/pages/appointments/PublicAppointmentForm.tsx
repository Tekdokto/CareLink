import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Theme, } from '@material-ui/core/styles';
import {
  Button,
  Typography,
  Switch,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  ListItemText,
  Select,
  Box,
  TextField,
  Checkbox
} from '@material-ui/core';

import Chip from '@material-ui/core/Chip';
import { addAppointment, editAppointment } from '../../redux/actions/AppointmentActions';
import { Appointment, Doctors, AppointmentMeans } from '../../redux/types/AppointmentTypes';
import { RootState } from '../../redux/types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  switch: {
    display: "flex",
    alignItems: "center",
  },
  label: {
    paddingRight: theme.spacing(1),
    fontWeight: "bold",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
interface PublicAppointmentFormProps {
  open: boolean;
  onCancel: () => void;
  appointment?: Appointment;
}
interface SelectedValue {
  value: string;
}
const initialValues: SelectedValue[] = [];
const PublicAppointmentForm: React.FC<PublicAppointmentFormProps> = ({ open, onCancel, appointment }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const doctors = useSelector<RootState, Doctors[]>((state) => state.appointmentPage.doctors);  
  const appointmentMeans = useSelector<RootState, AppointmentMeans[]>((state) => state.appointmentPage.appointmentMeans);  
  const [patientName, setPatientName] = useState(appointment ? appointment?.patientName : '');
  const [doctorName, setDoctorName] = useState(appointment ? appointment?.doctorName : '');
  const [meansOfAppointment, setMeansOfAppointment] = useState<string[]>(appointment ? appointment?.meansOfAppointment : '');
  const [date, setDate] = useState(appointment ? appointment.date : '');
  const [time, setTime] = useState(appointment ? appointment.time : '');
  const [email, setEmail] = useState(appointment ? appointment.email : '');
  const [phone, setPhone] = useState(appointment ? appointment.phone : '');
  const [type, setType] = useState(appointment ? appointment.type : '');
  const [notes, setNote] = useState(appointment ? appointment.notes : '');
  const [checked, setChecked] = useState(false);
  const [selectedValues, setSelectedValues] = useState<SelectedValue[]>(initialValues);

  const handleDoctorsNameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValues(
      (event.target.value as string[]).map((value) => ({
        value,
      }))
    );
  };
  const handleSave = () => {
    const newAppointment: Appointment = {
        id: appointment ? appointment.id : '',
        patientName,
        doctorName,
        meansOfAppointment,
        email,
        phone,
        date,
        time,
        type,
        notes,
        description: ''
    };

    if (appointment) {
      editAppointment(newAppointment?.id, newAppointment);
    } else {
      addAppointment(newAppointment);
    }

    onCancel();
  };

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{appointment ? 'Edit Public Appointment' : 'Add Public Appointment'}</DialogTitle>
      <DialogContent>
        <DialogContentText>Please fill out the form to add a new appointment.</DialogContentText>
        <div className={classes.switch}>
          <Typography variant="subtitle1" className={classes.label}>
            Instant
          </Typography>
          <Switch
            checked={checked}
            onChange={handleChange}
            color="primary"
            inputProps={{ "aria-label": "Toggle switch" }}
          />
          <Typography variant="subtitle1" className={classes.label}>
            Scheduled
          </Typography>
        </div>
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
            multiple
            value={selectedValues.map((selected) => selected.value)}
            onChange={handleDoctorsNameChange}
            renderValue={(selected) => (
              <Box gap={0.5} sx={{ display: 'flex', flexWrap: 'wrap', marginRight: '10px'}}>
                {selectedValues?.map((value) => (
                  <Chip key={value?.value} label={value?.value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {doctors.map((doctor: Doctors) => (
              <MenuItem key={doctor?.id} value={doctor?.doctorName}>
                {doctor?.doctorName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="meansOfAppointment-label">Means of Appointments</InputLabel>
          <Select
            labelId="meansOfAppointment-label"
            id="meansOfAppointment"
            value={meansOfAppointment}
            onChange={(event) => setMeansOfAppointment(event.target.value as string)}
          >
            {appointmentMeans?.map((appointmentMean: any) => (
              <MenuItem key={appointmentMean?.means} value={appointmentMean?.means}>
                {appointmentMean?.means}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {!checked ? null :<TextField
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
        />}
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="email"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          margin="dense"
          id="phone"
          label="Phone"
          type="phone"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        {!checked ? null :<TextField
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
        />}
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
          <TextField
            margin="dense"
            id="text"
            label="Note"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            value={notes}
            onChange={(event) => setNote(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
    </Dialog>
);
};
export default PublicAppointmentForm;
