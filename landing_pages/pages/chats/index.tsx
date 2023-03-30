import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Typography,
  Box,
  TextField,
  FormControl,
  Avatar,
  Paper,
  Tooltip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Select,
  MenuItem,
  IconButton,
  InputAdornment,
  Grid,
  InputLabel,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SelectDoctorIcon from '@material-ui/icons/LocalHospital';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SettingsIcon from '@material-ui/icons/Settings';
import BackIcon from "@material-ui/icons/ArrowBack";
import moment from 'moment';
import io from "socket.io-client";
import Layout from "../../components/Layout";

const socket = io("http://localhost:3000");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    margin: theme.spacing(0),
    height: "80vh",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
    },
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    zIndex: 0,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: "#fff",
    width: "25%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  indicator: {
    height: 4,
    backgroundColor: theme.palette.secondary.main,
  },
  chatContainer: {
    flexGrow: 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: "#000",
    width: '100%',
    height: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  messageUser: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  messageBox: {
    display: "flex",
    justifyContent: 'space-between',
    flexDirection: "column",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: theme.spacing(2),
    maxWidth: "100%",
    height: '76vh',
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: theme.palette.grey[200],
  },
  messageInput: {
    width: '95%',
    marginTop: theme.spacing(2),
  },
  userMessageContainer: {
    height: '100%',
    overFlow:'scroll',
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: theme.spacing(1),
    borderRadius: "16px 0px 16px 16px",
  },
  otherMessageContainer: {
    height: '100%',
    overFlow:'scroll',
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "#eee",
    padding: theme.spacing(1),
    borderRadius: "0px 16px 16px 16px",
  },
  settingsDialogContent: {
    display: "flex",
    flexDirection: "column",
  },
  messageContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  messageAvatar: {
    marginRight: theme.spacing(1),
  },
  messageContent: {
    backgroundColor: "inherit",
    color: "inherit",
    maxWidth: "70%",
    position: "relative",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
  },
  myMessage: {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    maxWidth: "60%",
    alignSelf: "flex-end",
  },
  doctorMessage: {
    backgroundColor: theme.palette.primary.light,
    color: "#333",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    maxWidth: "60%",
    alignSelf: "flex-start",
  },
  chatfield: {
    display: 'flex',
    width: '100%'
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
  },
  inputField: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
  },
  sendButton: {
    marginLeft: theme.spacing(1),
  },
  formControl: {
    marginRight: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dialogTitle: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
  },
  dialogButton: {
    marginTop: theme.spacing(2),
  },
}));

export default function Chat({ toggleTheme, themeMode}) {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [availableDoctors, setAvailableDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [settings, setSettings] = useState({
    font: "Roboto",
    fontSize: "16px",
    theme: "light",
  });

  const messageContainerRef = useRef(null);

  useEffect(() => {
    // Ask for user name when component mounts
    const userName = prompt("Please enter your name:");
    if (userName) {
      setUser(userName);
      socket.emit("new-user", userName);
    }

    // Listen for incoming messages
    socket.on("chat-message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    // Listen for available doctors
    socket.on("available-doctors", (doctors) => {
      setAvailableDoctors(doctors);
    });

    // Scroll to bottom of message container
    messageContainerRef.current.scrollTop =
      messageContainerRef.current.scrollHeight;
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("send-chat-message", { user, message });
      setMessage("");
    }
  };

  const handleOpenSelectDoctor = () => {
    setOpen(true);
  };

  const handleCloseSelectDoctor = () => {
    setOpen(false);
  };

  const handleSelectDoctor = (e) => {
    setSelectedDoctor(e.target.value);
  };

  const handleRequestDoctor = () => {
    socket.emit("request-doctor", { user, doctor: selectedDoctor });
    setOpen(false);
  };

  const handleOpenSettings = () => {
    // setSettingsOpen(true);
    };
    
    const handleCloseSettings = () => {
    // setSettingsOpen(false);
    };

  return (
    <Layout toggleTheme={toggleTheme} themeMode={themeMode}>
      <Box className={classes.root}>
        <Paper className={classes.header} elevation={6}>
          <Toolbar>
            <Typography className={classes.title} variant="h6">
              CareChat
            </Typography>
            <IconButton
              edge="start"
              className={classes.backButton}
              onClick={() => window.history.back()}
              color="inherit"
              aria-label="back"
            >
              <BackIcon />
            </IconButton>
          </Toolbar>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FiberManualRecordIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Online"
                secondary={`You (${user}) are online`}
              />
            </ListItem>
            <ListItem button onClick={handleOpenSelectDoctor}>
              <ListItemAvatar>
                <Avatar>
                  <SelectDoctorIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Request a Doctor" />
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <SettingsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Paper>
        <Box className={classes.chatContainer} ref={messageContainerRef}>
            <form onSubmit={handleSendMessage}>
              <Paper className={classes.messageBox} elevation={6}>
                <div>
                  {messages.map((message, index) => (
                    <Box
                      key={index}
                      // Render each message with the Message component
                      className={
                        message.user === user
                        ? classes.userMessageContainer
                        : classes.otherMessageContainer
                      }
                    >
                      <Message message={message} user={user} />
                    </Box>
                  ))}
                </div>
                <span className={classes.chatfield}>
                  <TextField
                    className={classes.messageInput}
                    label="Type a message"
                    variant="outlined"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button
                    className={classes.sendButton}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    <SendIcon />
                  </Button>
                </span>
              </Paper>
            </form>
          </Box>
            <Dialog open={open} onClose={handleCloseSelectDoctor}>
              <DialogTitle className={classes.dialogTitle}>
                Request a Doctor
              </DialogTitle>
              <DialogContent className={classes.dialogContent}>
                <FormControl className={classes.formControl}>
                  <InputLabel>Select a Doctor</InputLabel>
                  <Select
                    value={selectedDoctor}
                    onChange={handleSelectDoctor}
                    className={classes.selectEmpty}
                  >
                    {availableDoctors.map((doctor) => (
                      <MenuItem key={doctor} value={doctor}>
                        {doctor}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  className={classes.dialogButton}
                  variant="contained"
                  color="primary"
                  onClick={handleRequestDoctor}
                >
                  Request
                </Button>
              </DialogContent>
            </Dialog>
          </Box>
        </Layout>
      );
    }
                
    function Message(props) {
      const classes = useStyles();
      const { message, user } = props;
    
    return (
        <Box
          className={
          message.user === user
          ? classes.userMessage
          : classes.otherMessage
          }
        >
          <Typography variant="subtitle2" className={classes.messageUser}>
            {message.user}
          </Typography>
          <Typography variant="body1">{message.message}</Typography>
        </Box>
      );
    }
             

