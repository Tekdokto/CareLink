import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@material-ui/core";

const localizer = momentLocalizer(moment);

const useStyles = makeStyles({
  root: {
    height: 600,
    margin: "0 auto",
    maxWidth: 800,
    padding: 20,
  },
});

const initialMeeting = {
  title: "",
  start: null,
  end: null,
  desc: "",
};

const events = [
  {
    start: new Date("2023-03-20T10:00:00"),
    end: new Date("2023-03-20T11:00:00"),
    title: "Yoga Class",
    desc: "Join our weekly yoga class to improve your flexibility and reduce stress.",
  },
  {
    start: new Date("2023-03-22T14:30:00"),
    end: new Date("2023-03-22T15:30:00"),
    title: "Nutrition Workshop",
    desc: "Learn about healthy eating habits and how to make better food choices.",
  },
  {
    start: new Date("2023-03-25T11:00:00"),
    end: new Date("2023-03-25T12:00:00"),
    title: "Mental Health Talk",
    desc: "Join our mental health expert to discuss common mental health issues and ways to cope with them.",
  },
];

const CalendarComponent = () => {
  const classes = useStyles();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [open, setOpen] = useState(false);
  const [openSelectedEvent, setOpenSelectedEvent] = useState(false);
  const [meeting, setMeeting] = useState(initialMeeting);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setOpenSelectedEvent(true);
  };
  const closeSelectEvent = (event) => {
    setSelectedEvent(event);
    setOpenSelectedEvent(false);
  };

  const handleClose = () => {
    setOpen(false);
    setMeeting(initialMeeting);
  };

  const handleInputChange = (event) => {
    setMeeting({
      ...meeting,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreateMeeting = () => {
    const newMeeting = {
      ...meeting,
      start: moment(meeting.start).toDate(),
      end: moment(meeting.end).toDate(),
    };
    events.push(newMeeting);
    setSelectedEvent(newMeeting);
    handleClose();
  };

  return (
    <Paper className={classes.root}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        views={["month", "week", "day"]}
        selectable
        onSelectSlot={(slotInfo) => {
          setMeeting({
            ...meeting,
            start: slotInfo.start,
            end: slotInfo.end,
          });
          setOpen(true);
        }}
      />
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Meeting</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={meeting.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Start Time"
            name="start"
            type="datetime-local"
            value={moment(meeting.start).format("YYYY-MM-DDTHH:mm")}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            />
            <TextField
            label="End Time"
            name="end"
            type="datetime-local"
            value={moment(meeting.end).format("YYYY-MM-DDTHH:mm")}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            />
            <TextField
                     label="Description"
                     name="desc"
                     value={meeting.desc}
                     onChange={handleInputChange}
                     fullWidth
                     margin="normal"
                   />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
            Cancel
            </Button>
            <Button onClick={handleCreateMeeting} color="primary">
            Create
            </Button>
            </DialogActions>
            </Dialog>
            
            {selectedEvent && (
              <Dialog open={openSelectedEvent} onClose={closeSelectEvent}>
                <DialogTitle><h2>{selectedEvent.title}</h2></DialogTitle>
                <div>
                  <p>{selectedEvent.desc}</p>
                </div>
                <DialogActions>
                  <Button onClick={closeSelectEvent} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            )}
            </Paper>
            );
            };
            
            export default CalendarComponent;