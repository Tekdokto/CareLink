import { combineReducers } from 'redux';
import appointmentReducer from './AppointmentReducer'
// import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
  appointmentPage: appointmentReducer,
//   user: userReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
