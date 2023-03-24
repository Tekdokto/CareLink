import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
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
//   ClearIcon,
  IconButton,
  InputAdornment,
  Grid,
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
    flexDirection: "column",
    height: "80vh",
    width: "97vw",
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
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
    overflowY: "scroll",
    width: '100%',
    padding: theme.spacing(2),
  },
  messageContainer: {
    // display: "flex",
    // alignItems: "flex-start",
    // marginBottom: theme.spacing(2),
    // padding: theme.spacing(1),
    // borderRadius: theme.spacing(1),

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
    maxWidth: "80%",
    alignSelf: "flex-end",
  },
  doctorMessage: {
    backgroundColor: theme.palette.primary.light,
    color: "#333",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    maxWidth: "80%",
    alignSelf: "flex-start",
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
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
    },
  },
  editButton: {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
    },
  },
  deleteButton: {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
    },
  },
  clearButton: {
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
  doctorListContainer: {
    width: 200,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  doctorList: {
    backgroundColor: theme.palette.background.paper,
    maxHeight: 400,
    overflowY: "scroll",
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[1],
    },
    selectedDoctor: {
    backgroundColor: theme.palette.primary.light,
    color: "#fff",
    },
    avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    },
    doctorAvatar: {
    marginRight: theme.spacing(1),
    },
    online: {
    color: "green",
    fontSize: "0.8rem",
    },
    offline: {
    color: "gray",
    fontSize: "0.8rem",
    },
    username: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    },
    settingsIcon: {
    marginLeft: 'auto',
    },
    doctorIcon: {
    marginRight: theme.spacing(1),
    },
    selectDoctorText: {
    marginLeft: theme.spacing(1),
    fontWeight: 'bold',
    },
    formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    },
    selectEmpty: {
    marginTop: theme.spacing(2),
    },
    chatBoxContainer: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        height: "100%",
    },
    chatBox: {
        height: "100%",
        overflowY: "scroll",
        padding: theme.spacing(2),
    },
    currentMessage: {
    background: theme.palette.primary.light,
    color: theme.palette.common.white,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    maxWidth: '80%',
    alignSelf: 'flex-end',
    },
    otherMessage: {
    background: theme.palette.grey[300],
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    maxWidth: '80%',
    alignSelf: 'flex-start',
    },
    messageTime: {
    fontSize: '0.8rem',
    color: theme.palette.grey[500],
    marginLeft: theme.spacing(1),
    },
    messageInputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    },
    messageInput: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
    },
    sendIcon: {
    cursor: 'pointer',
    },
    }));
    
    const dummyDoctors = [
        { id: 1, name: "Dr. John Doe", isOnline: true },
        { id: 2, name: "Dr. Jane Smith", isOnline: true },
        { id: 3, name: "Dr. Mike Brown", isOnline: false },
      ];
    const Chat = ({ currentUser, toggleTheme, themeMode }) => {
    const classes = useStyles();
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editMessage, setEditMessage] = useState("");
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [doctorList, setDoctorList] = useState(dummyDoctors);
    const messagesEndRef = useRef(null);
    
    const onlineStatus = currentUser?.isOnline ? (
        <FiberManualRecordIcon className={classes.online} />
      ) : (
        <FiberManualRecordIcon className={classes.offline} />
      );
    useEffect(() => {
    socket.emit("join_room", currentUser);
    socket.on("receive_message", (data) => {
    setMessageList([...messageList, data]);
    });
    socket.on("all_doctors", (data) => {
    setDoctorList(data.filter((doctor) => doctor !== currentUser));
    });
    }, []);
    
    useEffect(() => {
    if (messagesEndRef.current) {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    }, [messageList]);
    
    const handleSendMessage = () => {
    if (message.trim() === "") {
    return;
    }
    if (editIndex !== null) {
    handleEditMessage();
    return;
    }
    const data = {
    message: message.trim(),
    sender: currentUser,
    receiver: selectedDoctor,
    };
    socket.emit("send_message", data);
    setMessage("");
    };
    
    const handleEditMessage = () => {
    const updatedMessageList = [...messageList];
    updatedMessageList[editIndex].message = editMessage.trim();
    setMessageList(updatedMessageList);
    setOpenDialog(false);
    setEditIndex(null);
    setEditMessage("");
    setMessage("");
    };
    
    const handleDeleteMessage = () => {
    const updatedMessageList = [...messageList];
    updatedMessageList.splice(editIndex, 1);
    setMessageList(updatedMessageList);
    setOpenDialog(false);
    setEditIndex(null);
    setEditMessage("");
    setMessage("");
    };
    
    const handleClearMessage = () => {
    setMessage("");
    setOpenDialog(false);
    setEditIndex(null);
    setEditMessage("");
    };
    
    const handleDoctorSelect = (doctor : any) => {
    setSelectedDoctor(doctor);
    };
    
    const handleEditClick = (index : any) => {
    setEditIndex(index);
    setEditMessage(messageList[index].message);
    setOpenDialog(true);
    };
    
    const handleDeleteClick = (index : any) => {
    setEditIndex(index);
    setOpenDialog(true);
    };
    
    return (
        <Layout toggleTheme={toggleTheme} themeMode={themeMode} >
    <div className={classes.root}>
    <AppBar position="static" className={classes.header}>
    <Toolbar>
    <Box display="flex" alignItems="center">
    <Tooltip title="Back">
    <IconButton color='inherit' edge="start" className={classes.backButton}>
    <BackIcon />
    </IconButton>
    </Tooltip>
    <Avatar alt="Avatar" src={currentUser?.avatar} className={classes.avatar} />
<Typography variant="h6" className={classes.username}>
{currentUser?.username}
</Typography>
</Box>
<Box display="flex" alignItems="center">
<FormControl className={classes.formControl}>
<Select
value={selectedDoctor}
onChange={(e) => handleDoctorSelect(e.target.value)}
displayEmpty
className={classes.selectEmpty}
inputProps={{ "aria-label": "Without label" }}>

<MenuItem value="" disabled>
<SelectDoctorIcon className={classes.doctorIcon} />
Select Doctor
</MenuItem>
{doctorList.map((doctor) => (
<MenuItem >
    {onlineStatus}
    {doctor.name}
</MenuItem>
))}
</Select>
</FormControl>
<Tooltip title="Settings">
<IconButton color='inherit' edge="end">
<SettingsIcon className={classes.settingsIcon} />
</IconButton>
</Tooltip>
</Box>
</Toolbar>
</AppBar>
<div className={classes.chatContainer}>
{selectedDoctor === "" ? (
<Typography variant="h4" className={classes.selectDoctorText}>
Please select a doctor to start chatting
</Typography>
) : (
<Box className={classes.chatBoxContainer}>
<div className={classes.chatBox}>
    {messageList.map((message, index) => (
        <div key={index}>
            <ListItem
                className={
                    message.sender === currentUser?.username
                    ? classes.currentMessage
                    : classes.otherMessage
                }
            >
                <ListItemText
                    primary={message.message}
                    secondary={
                        message.sender === currentUser?.username
                        ? "You"
                        : message.sender
                    }
                />
                    <Box>
                        {message.sender === currentUser?.username && (
                            <>
                                <Tooltip title="Edit">
                                    <IconButton
                                        className={classes.editButton}
                                        onClick={() => handleEditClick(index)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton
                                        className={classes.deleteButton}
                                        onClick={() => handleDeleteClick(index)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </>
                        )}
                    <Typography variant="caption" className={classes.messageTime}>
                        {moment(message.timestamp).format("LT")}
                    </Typography>
                </Box>
            </ListItem>
            {index === messageList.length - 1 && (
                <div ref={messagesEndRef} />
            )}
        </div>
        ))}
    </div>
</Box>
)}
</div>
<div className={classes.messageInputContainer}>
<TextField
id="message-input"
label="Type a message"
variant="outlined"
className={classes.messageInput}
value={message}
onChange={(e) => setMessage(e.target.value)}
onKeyPress={(e) => {
if (e.key === "Enter") {
handleSendMessage();
}
}}
InputProps={{
endAdornment: (
<InputAdornment position="end">
<IconButton onClick={handleSendMessage}>
<SendIcon className={classes.sendIcon} />
</IconButton>
</InputAdornment>
),
}}
/>
</div>
<Dialog
open={openDialog}
onClose={() => setOpenDialog(false)}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
>
<DialogTitle id="alert-dialog-title">{"Edit message?"}</DialogTitle>
<DialogContent>
<TextField
id="edit-message-input"
label="Edit message"
variant="outlined"
className={classes.messageInput}
value={editMessage}
onChange={(e) => setEditMessage(e.target.value)}
/>
</DialogContent>
<DialogActions>
<Button onClick={handleClearMessage} color="primary">
Cancel
</Button>
{editIndex !== null ? (
<>
<Button onClick={handleDeleteMessage} color="secondary">
Delete
</Button>
<Button onClick={handleEditMessage} color="primary" autoFocus>
Save
</Button>
</>
) : (
<Button onClick={handleSendMessage} color="primary" autoFocus>
Send
</Button>
)}
</DialogActions>
</Dialog>
</div>
</Layout>
);
};
export default Chat;
