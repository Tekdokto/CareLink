import { combineReducers } from 'redux';
import appointmentPageReducer from './AppointmentSlice
// import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
  appointmentPage: appointmentPageReducer,
//   user: userReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
