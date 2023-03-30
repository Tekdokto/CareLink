import { AppointmentState, Doctors, AppointmentMeans } from "./AppointmentTypes";


export interface RootState {
  appointmentMeans: AppointmentMeans;
  doctors: Doctors;
  appointmentPage: AppointmentState;
}
