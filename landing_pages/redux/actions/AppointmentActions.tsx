import { Dispatch } from "redux";
import axios from "axios";
import { Appointment, AppointmentActionTypes } from "../types/AppointmentTypes";
import RootState from "../reducers/AppointmentSlice";

// Action creators
export const getAppointmentsRequest = () => ({
  type: "GET_APPOINTMENTS_REQUEST",
});

export const getAppointmentsSuccess = (appointments: Appointment[]) => ({
  type: "GET_APPOINTMENTS_SUCCESS",
  payload: {
    appointments,
  },
});

export const getAppointmentsFailure = (error: Error) => ({
  type: "GET_APPOINTMENTS_FAILURE",
  payload: {
    error,
  },
});

export const addAppointmentRequest = () => ({
  type: "ADD_APPOINTMENT_REQUEST",
});

export const addAppointmentSuccess = (appointment: Appointment) => ({
  type: "ADD_APPOINTMENT_SUCCESS",
  payload: {
    appointment,
  },
});

export const addAppointmentFailure = (error: Error) => ({
  type: "ADD_APPOINTMENT_FAILURE",
  payload: {
    error,
  },
});

export const editAppointmentRequest = () => ({
  type: "EDIT_APPOINTMENT_REQUEST",
});

export const editAppointmentSuccess = (appointment: Appointment) => ({
  type: "EDIT_APPOINTMENT_SUCCESS",
  payload: {
    appointment,
  },
});

export const editAppointmentFailure = (error: Error) => ({
  type: "EDIT_APPOINTMENT_FAILURE",
  payload: {
    error,
  },
});

export const deleteAppointmentRequest = () => ({
  type: "DELETE_APPOINTMENT_REQUEST",
});

export const deleteAppointmentSuccess = (appointmentId: string) => ({
  type: "DELETE_APPOINTMENT_SUCCESS",
  payload: {
    appointmentId,
  },
});

export const deleteAppointmentFailure = (error: Error) => ({
  type: "DELETE_APPOINTMENT_FAILURE",
  payload: {
    error,
  },
});

export const setAppointmentsFilter = (filter: string) => ({
  type: "SET_APPOINTMENTS_FILTER",
  payload: {
    filter,
  },
});

export const setAppointmentsPage = (page: number) => ({
  type: "SET_APPOINTMENTS_PAGE",
  payload: {
    page,
  },
});

export const setAppointmentFormState = (field: string, value: string) => ({
  type: "SET_APPOINTMENT_FORM_STATE",
  payload: {
    field,
    value,
  },
});

export const setAppointmentEditId = (editId: string | null) => ({
  type: "SET_APPOINTMENT_EDIT_ID",
  payload: editId,
});

// Async action creators
export const getAppointments = () => async (dispatch: Dispatch) => {
  dispatch(getAppointmentsRequest());
  try {
    const response = await axios.get(`api/appointments`);
    const appointments = response.data;
    dispatch(getAppointmentsSuccess(appointments));
  } catch (error) {
    dispatch(getAppointmentsFailure(error));
  }
};

export const addAppointment = (appointment: Appointment) => async (
  dispatch: Dispatch
) => {
  dispatch(addAppointmentRequest());
  try {
    const response = await axios.post("/api/appointments", appointment);
    const newAppointment = response.data;
    dispatch(addAppointmentSuccess(newAppointment));
  } catch (error) {
    dispatch(addAppointmentFailure(error));
  }
};

export const editAppointment = (appointmentId: string, appointment: Appointment) => async (
  dispatch: Dispatch
) => {
  dispatch(editAppointmentRequest());
  try {
    const response = await axios.put(
      `/api/appointments/${appointmentId}`,
      appointment
    );
    const updatedAppointment = response.data;
    dispatch(editAppointmentSuccess(updatedAppointment));
} catch (error) {
        dispatch(editAppointmentFailure(error));
    }
};
    
export const deleteAppointment = (appointmentId: string) => async (
        dispatch: Dispatch
) => {
    dispatch(deleteAppointmentRequest());
    try {
        await axios.delete(`/api/appointments/${appointmentId}`);
        dispatch(deleteAppointmentSuccess(appointmentId));
    } catch (error) {
        dispatch(deleteAppointmentFailure(error));
    }
};
    
// Thunk action creator to filter appointments by search term
export const filterAppointments = (filter: string) => (
    dispatch: Dispatch,
    getState: () => RootState.appointmentPage
) => {
    dispatch(setAppointmentsFilter(filter));
    const appointments = getState().appointmentPage.appointments;
    const filteredAppointments = appointments.filter((appointment) => {
        return (
            appointment.title.toLowerCase().includes(filter.toLowerCase()) ||
            appointment.description.toLowerCase().includes(filter.toLowerCase())
        );
    });
    dispatch(getAppointmentsSuccess(filteredAppointments));
};
    
// Thunk action creator to paginate appointments
export const paginateAppointments = (page: number) => (
    dispatch: Dispatch,
    getState: () => RootState.appointmentPage
) => {
    dispatch(setAppointmentsPage(page));
    const appointments = getState().appointmentPage.appointments;
    const perPage = getState().appointmentPage.perPage;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedAppointments = appointments.slice(start, end);
    dispatch(getAppointmentsSuccess(paginatedAppointments));
};

// Thunk action creator to set appointment form field values
export const setAppointmentFormFields = (fields: any) => (
    dispatch: Dispatch
) => {
    Object.keys(fields).forEach((field) => {
        dispatch(setAppointmentFormState(field, fields[field]));
    });
};

// Thunk action creator to set the id of the appointment being edited
export const setAppointmentEdit = (appointmentId: string | null) => (
    dispatch: Dispatch
) => {
    dispatch(setAppointmentEditId(appointmentId));
};