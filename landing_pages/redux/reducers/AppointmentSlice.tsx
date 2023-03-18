import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appointment, AppointmentState } from "../types/AppointmentTypes";

const initialAppointmentState: AppointmentState = {
  appointments: [],
  loading: false,
  error: null,
  filter: "",
  page: 1,
  totalPages: 2,
  modalOpen: false,
  formState: {
    patientName: "",
    doctorName: "string",
    date: "",
    time: "",
    type: "",
    notes: "",
    description: "",
  },
  editId: null,
};

export const appointmentPageSlice = createSlice({
  name: "appointmentPage",
  initialAppointmentState,
  reducers: {
    getAppointmentsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getAppointmentsSuccess: (
      state,
      action: PayloadAction<Appointment[]>
    ) => {
      state.isLoading = false;
      state.appointments = action.payload;
    },
    getAppointmentsFailure: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addAppointmentRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    addAppointmentSuccess: (state, action: PayloadAction<Appointment>) => {
      state.isLoading = false;
      state.appointments.push(action.payload);
    },
    addAppointmentFailure: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    editAppointmentRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    editAppointmentSuccess: (state, action: PayloadAction<Appointment>) => {
      state.isLoading = false;
      const index = state.appointments.findIndex(
        (appointment) => appointment.id === action.payload.id
      );
      if (index !== -1) {
        state.appointments[index] = action.payload;
      }
    },
    editAppointmentFailure: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteAppointmentRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    deleteAppointmentSuccess: (
      state,
      action: PayloadAction<string /* appointmentId */>
    ) => {
      state.isLoading = false;
      state.appointments = state.appointments.filter(
        (appointment) => appointment.id !== action.payload
      );
    },
    deleteAppointmentFailure: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setAppointmentsFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setAppointmentsPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setAppointmentFormState: (
      state,
      action: PayloadAction<{ field: string; value: string }>
    ) => {
      state.appointmentForm[action.payload.field] = action.payload.value;
    },
    setAppointmentEditId: (state, action: PayloadAction<string | null>) => {
      state.editId = action.payload;
    },
  },
});

export const {
  getAppointmentsRequest,
  getAppointmentsSuccess,
  getAppointmentsFailure,
  addAppointmentRequest,
  addAppointmentSuccess,
  addAppointmentFailure,
  editAppointmentRequest,
  editAppointmentSuccess,
  editAppointmentFailure,
  deleteAppointmentRequest,
  deleteAppointmentSuccess,
  deleteAppointmentFailure,
  setAppointmentsFilter,
  setAppointmentsPage,
  setAppointmentFormState,
  setAppointmentEditId,
  } = appointmentPageSlice.actions;
  
  export default appointmentPageSlice.reducer;
