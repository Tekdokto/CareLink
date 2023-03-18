import { 
    AppointmentAction, 
    AppointmentActionTypes, 
    AppointmentState, 
    Appointment, 
} from "../types/AppointmentTypes";

const initialState: AppointmentState = {
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

const appointmentReducer = (
  state: AppointmentState = initialState,
  action: AppointmentAction
): AppointmentState => {
  switch (action.type) {
    case AppointmentActionTypes.GET_APPOINTMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AppointmentActionTypes.GET_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        appointments: action.payload,
      };
    case AppointmentActionTypes.GET_APPOINTMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AppointmentActionTypes.DELETE_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AppointmentActionTypes.DELETE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        appointments: state.appointments.filter(
          (appointment) => appointment.id !== action.payload
        ),
      };
    case AppointmentActionTypes.DELETE_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AppointmentActionTypes.ADD_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AppointmentActionTypes.ADD_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        appointments: [...state.appointments, action.payload],
      };
    case AppointmentActionTypes.ADD_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AppointmentActionTypes.EDIT_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AppointmentActionTypes.EDIT_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        appointments: state.appointments.map((appointment) =>
          appointment.id === action.payload.id ? action.payload : appointment
        ),
      };
    case AppointmentActionTypes.EDIT_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AppointmentActionTypes.SET_APPOINTMENTS_FILTER:
      return {
        ...state,
        filter: action.payload,
        page: 1,
      };
    case AppointmentActionTypes.SET_APPOINTMENTS_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case AppointmentActionTypes.OPEN_APPOINTMENT_MODAL:
      return {
        ...state,
        modalOpen: true,
      };
    case AppointmentActionTypes.CLOSE_APPOINTMENT_MODAL:
      return {
        ...state,
        modalOpen: false,
        formState: initialState.formState,
        editId: initialState.editId,
      };
    case AppointmentActionTypes.SET_APPOINTMENT_FORM_STATE:
      return {
        ...state,
        formState: {
          ...state.formState,
          [action.payload.field]: action.payload.value,
        },
      };
    case AppointmentActionTypes.SET_APPOINTMENT_EDIT_ID:
      return{
        ...state,
        editId: action.payload.editId,
        };
        default:
        return state;
        }
        };
        
        export default appointmentReducer;
