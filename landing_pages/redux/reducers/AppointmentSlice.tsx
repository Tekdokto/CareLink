import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appointment, AppointmentState } from "../types/AppointmentTypes";

const initialAppointments: Appointment[] = [
  {
    id: '1',
    patientName: 'John Doe',
    doctorName: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '1234567890',
    date: '2022-01-01',
    time: '10:00 AM',
    type: 'Emmergency',
    notes: 'Bring passport',
    description: 'Bring passport',
  },
  {
    id: '2',
    patientName: 'Jane Smith',
    doctorName: 'Jane Smith',
    email: 'janesmith@gmail.com',
    phone: '0987654321',
    date: '2022-02-01',
    time: '2:00 PM',
    type: 'CheckUp',
    notes: 'Bring passport',
    description: 'Bring passport',
  },
  // Add more appointments as needed
];

const initialAppointmentState: AppointmentState = {
  appointments: initialAppointments,
  loading: false,
  error: null,
  filter: "",
  page: 1,
  totalPages: 2,
  modalOpen: false,
  formState: {
    patientName: "",
    doctorName: "string",
    email: "string",
    phone: "",
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
    getAppointmentsRequest: (state: { isLoading: boolean; error: any; }) => {
      state.isLoading = true;
      state.error = null;
    },
    getAppointmentsSuccess: (
      state: { isLoading: boolean; appointments: any; },
      action: PayloadAction<Appointment[]>
    ) => {
      state.isLoading = false;
      state.appointments = action.payload;
    },
    getAppointmentsFailure: (state: { isLoading: boolean; error: any; }, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addAppointmentRequest: (state: { isLoading: boolean; error: any; }) => {
      state.isLoading = true;
      state.error = null;
    },
    addAppointmentSuccess: (state: { isLoading: boolean; appointments: any[]; }, action: PayloadAction<Appointment>) => {
      state.isLoading = false;
      state.appointments.push(action.payload);
    },
    addAppointmentFailure: (state: { isLoading: boolean; error: any; }, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    editAppointmentRequest: (state: { isLoading: boolean; error: any; }) => {
      state.isLoading = true;
      state.error = null;
    },
    editAppointmentSuccess: (state: { isLoading: boolean; appointments: any[]; }, action: PayloadAction<Appointment>) => {
      state.isLoading = false;
      const index = state.appointments.findIndex(
        (appointment: { id: any; }) => appointment.id === action.payload.id
      );
      if (index !== -1) {
        state.appointments[index] = action.payload;
      }
    },
    editAppointmentFailure: (state: { isLoading: boolean; error: any; }, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteAppointmentRequest: (state: { isLoading: boolean; error: any; }) => {
      state.isLoading = true;
      state.error = null;
    },
    deleteAppointmentSuccess: (
      state: { isLoading: boolean; appointments: any[]; },
      action: PayloadAction<string /* appointmentId */>
    ) => {
      state.isLoading = false;
      state.appointments = state.appointments.filter(
        (appointment: { id: any; }) => appointment.id !== action.payload
      );
    },
    deleteAppointmentFailure: (state: { isLoading: boolean; error: any; }, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setAppointmentsFilter: (state: any[], action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setAppointmentsPage: (state: { page: any; }, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setAppointmentFormState: (
      state: { appointmentForm: { [x: string]: any; }; },
      action: PayloadAction<{ field: string; value: string }>
    ) => {
      state.appointmentForm[action.payload.field] = action.payload.value;
    },
    setAppointmentEditId: (state: { editId: any; }, action: PayloadAction<string | null>) => {
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
