import { 
    AppointmentAction, 
    AppointmentActionTypes, 
    AppointmentState, 
    Appointment, 
    AppointmentMeans,
    Doctors
} from "../types/AppointmentTypes";

const initialAppointments: Appointment[] = [
    {
      id: '1',
      patientName: 'John Doe',
      doctorName: 'John Doe',
      meansOfAppointment: 'Audio',
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
      meansOfAppointment: 'Video',
      email: 'janesmith@gmail.com',
      phone: '0987654321',
      date: '2022-02-01',
      time: '2:00 PM',
      type: 'CheckUp',
      notes: 'Bring passport',
      description: 'Bring passport',
    },
    {
      id: '2',
      patientName: 'Jerry Coker',
      doctorName: 'Jane Smith',
      meansOfAppointment: 'Physical',
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

  const initialDoctors: Doctors[] = [
    {
      id: '1',
      doctorName: 'John Doe',
      appointments: 'Video',
      patients: '',
      email: 'johndoe@gmail.com',
      phone: '1234567890',
    },
    {
      id: '2',
      doctorName: 'Jane Smith',
      appointments: 'Video',
      patients: '',
      email: 'janesmith@gmail.com',
      phone: '0987654321',
    },
    {
      id: '2',
      doctorName: 'Jane Smith',
      appointments: 'Video',
      patients: '',
      email: 'janesmith@gmail.com',
      phone: '0987654321',
    },
    // Add more doctors as needed
  ];

  const initialAppointmentMeans: AppointmentMeans[] = [
    {
      means: 'Video'
    },
    {
      means: 'Audio'
    },
    {
      means:'Physical'
    },
    // Add more appointments means as needed
  ];
  
  const initialState: AppointmentState = {
    appointments: initialAppointments,
    doctors: initialDoctors,
    appointmentMeans: initialAppointmentMeans,
    loading: false,
    error: null,
    filter: "",
    page: 1,
    totalPages: 2,
    modalOpen: false,
    formState: {
      patientName: "string",
      doctorName: "string",
      meansOfAppointment: "string",
      email: "string",
      phone: "string",
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
