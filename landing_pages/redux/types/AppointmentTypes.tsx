// Appointment data type
export interface Appointment {
    id: number;
    patientName: string;
    doctorName: string;
    date: string;
    time: string,
    type: string,
    notes: string;
    description: string;
  }
  
  export type FormState = {
    patientName: string;
    doctorName: string;
    date: string;
    time: string;
    type: string,
    notes: string;
    description: string;
  };
  
  // Appointment page state
  export interface AppointmentState {
    appointments: Appointment[];
    loading: boolean;
    error: string | null;
    filter: string;
    page: number;
    totalPages: number;
    modalOpen: boolean;
    formState: FormState;
    editId: string | null;
  }
  
  // Appointment page action types
  export interface AppointmentAction {
    type: AppointmentActionTypes;
    payload?: any;
  }
  
  export enum AppointmentActionTypes {
    GET_APPOINTMENTS_REQUEST = "GET_APPOINTMENTS_REQUEST",
    GET_APPOINTMENTS_SUCCESS = "GET_APPOINTMENTS_SUCCESS",
    GET_APPOINTMENTS_FAILURE = "GET_APPOINTMENTS_FAILURE",
    DELETE_APPOINTMENT_REQUEST = "DELETE_APPOINTMENT_REQUEST",
    DELETE_APPOINTMENT_SUCCESS = "DELETE_APPOINTMENT_SUCCESS",
    DELETE_APPOINTMENT_FAILURE = "DELETE_APPOINTMENT_FAILURE",
    ADD_APPOINTMENT_REQUEST = "ADD_APPOINTMENT_REQUEST",
    ADD_APPOINTMENT_SUCCESS = "ADD_APPOINTMENT_SUCCESS",
    ADD_APPOINTMENT_FAILURE = "ADD_APPOINTMENT_FAILURE",
    EDIT_APPOINTMENT_REQUEST = "EDIT_APPOINTMENT_REQUEST",
    EDIT_APPOINTMENT_SUCCESS = "EDIT_APPOINTMENT_SUCCESS",
    EDIT_APPOINTMENT_FAILURE = "EDIT_APPOINTMENT_FAILURE",
    SET_APPOINTMENTS_FILTER = "SET_APPOINTMENTS_FILTER",
    SET_APPOINTMENTS_PAGE = "SET_APPOINTMENTS_PAGE",
    OPEN_APPOINTMENT_MODAL = "OPEN_APPOINTMENT_MODAL",
    CLOSE_APPOINTMENT_MODAL = "CLOSE_APPOINTMENT_MODAL",
    SET_APPOINTMENT_FORM_STATE = "SET_APPOINTMENT_FORM_STATE",
    SET_APPOINTMENT_EDIT_ID = "SET_APPOINTMENT_EDIT_ID",
  }
  
  