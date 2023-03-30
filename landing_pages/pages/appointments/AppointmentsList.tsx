import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  Alert,
  CircularProgress, 
  TablePagination 
} from '@material-ui/core';
import { 
  Add as AddIcon, 
  Delete as DeleteIcon, 
  Edit as EditIcon 
} from '@material-ui/icons';
import { RootState } from '../../redux/types';
import { 
  editAppointment,
  deleteAppointment,
  getAppointments, 
  addAppointment, 
} from '../../redux/actions/AppointmentActions';
import Avatar from '@material-ui/core/Avatar';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Appointment } from '../../redux/types/AppointmentTypes';
import PrivateAppointmentForm from './PrivateAppointmentForm';
import PublicAppointmentForm from './PublicAppointmentForm';
import CustomTablePagination from '../../components/CustomTablePagination';
import SpinnerBackdrop from '../../components/SpinnerBackDrop';

const useStyles = makeStyles({
  table: {
    minWidth: 200,
    width: '100%'
  },
  addButton: {
    margin: '10px',
  },
  actionsCell: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
});

const AppointmentList = ({onEdit, onAdd}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const appointments = useSelector<RootState, Appointment[]>((state) => state.appointmentPage.appointments);
  const isLoading = useSelector<RootState, boolean>((state) => state.appointmentPage.loading);
  const error = useSelector<RootState, Error | null>((state) => state.appointmentPage.error);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedAppointment, setEditedAppointment] = useState<Appointment | null>(null);
  const [sortBy, setSortBy] = useState('date');
  const [sortDesc, setSortDesc] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const sortedAppointments = [...appointments].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return sortDesc ? 1 : -1;
    if (a[sortBy] > b[sortBy]) return sortDesc ? -1 : 1;
    return 0;
  });

  const handleDelete = (appointmentId: any) => {
    deleteAppointment(appointmentId);
  };

  const handleAdd = () => {
    setIsAdding(true);
    onAdd()
    // Show Form Modal
  };

  const handleEdit = (id: any, appointment: Appointment) => {
    setEditedAppointment(appointment);
    setIsEditing(true);
    editAppointment(id, appointment)
  };

  const handleSave = (appointment: Appointment) => {
    if (isAdding) {
      addAppointment(appointment);
    } else if (isEditing) {
      onEdit();
    }
    setIsAdding(false);
    setIsEditing(false);
    setEditedAppointment(null);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setEditedAppointment(null);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, sortedAppointments.length - page * rowsPerPage);

  const renderedTable = (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="appointment table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Button onClick={() => {
                  setSortBy('date');
                  setSortDesc(!sortDesc);
                }}>
                  Date
                  {sortBy === 'date' && (
                    sortDesc ? (<ArrowDownwardIcon />
                      ) : (<ArrowUpwardIcon />
                    )
                  )}
                </Button>
              </TableCell>
              <TableCell>Patient Name</TableCell>
              <TableCell>Doctor Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? sortedAppointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : sortedAppointments
              ).map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell component="th" scope="row">
                    {appointment?.date}
                  </TableCell>
                  <TableCell>
                    {appointment?.patientName}
                  </TableCell>
                  <TableCell>
                    {appointment?.doctorName}
                  </TableCell>
                  <TableCell>
                    {appointment?.email}
                  </TableCell>
                  <TableCell>
                    {appointment?.time}
                  </TableCell>
                  <TableCell>
                    {appointment?.type}
                  </TableCell>
                  <TableCell>
                    {appointment?.notes}
                  </TableCell>
                  <TableCell className={classes.actionsCell}>
                    <Button onClick={() => handleEdit(appointment.id, appointment)}><EditIcon /></Button>
                    <Button onClick={() => handleDelete(appointment.id)}><DeleteIcon /></Button>
                  </TableCell>
                </TableRow>
              )
            )}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={4} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <CustomTablePagination
          count={sortedAppointments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
      {isAdding && (
        <PrivateAppointmentForm
          onCancel={handleCancel} open={true}        />
      )}
      {isEditing && editedAppointment && (
        <PrivateAppointmentForm
          appointment={editedAppointment}
          onCancel={handleCancel} open={true}/>
      )}
      {isAdding && (
        <PublicAppointmentForm
          onCancel={handleCancel} open={true}        />
      )}
      {isEditing && editedAppointment && (
        <PublicAppointmentForm
          appointment={editedAppointment}
          onCancel={handleCancel} open={true}/>
      )}
      {error && (
        <Alert severity="error">{error?.message}</Alert>
      )}
      {isLoading && (
        <SpinnerBackdrop isLoading={isLoading}/>
      )}
</>
);
return renderedTable;
};

export default AppointmentList;