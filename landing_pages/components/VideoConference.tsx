import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Video from 'twilio-video';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        background: `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
        [theme.breakpoints.down('sm')]: {
          background: `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.dark})`,
        },
      },
  paper: {
    padding: theme.spacing(4),
    backgroundColor: 'white',
    boxShadow: theme.shadows[2],
  },
  doctorCard: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
      cursor: 'pointer',
    },
  },
  selectedDoctorCard: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      cursor: 'pointer',
    },
  },
  videoContainer: {
    width: '100%',
    height: '70vh',
    backgroundColor: 'black',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  },
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const doctorsData = [
    {
      id: 1,
      name: 'Dr. Jane Smith',
      specialty: 'Cardiologist',
      imageUrl: 'https://www.example.com/doctors/jane-smith.jpg',
    },
    {
      id: 2,
      name: 'Dr. John Doe',
      specialty: 'Dermatologist',
      imageUrl: 'https://www.example.com/doctors/john-doe.jpg',
    },
    {
      id: 3,
      name: 'Dr. Susan Lee',
      specialty: 'Pediatrician',
      imageUrl: 'https://www.example.com/doctors/susan-lee.jpg',
    },
    {
      id: 4,
      name: 'Dr. Robert Chen',
      specialty: 'Neurologist',
      imageUrl: 'https://www.example.com/doctors/robert-chen.jpg',
    },
    // Add more doctors as needed
  ];
  
export default function VideoCall() {
  const classes = useStyles();
  const [roomName, setRoomName] = useState('');
  const [identity, setIdentity] = useState('');
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(doctorsData)

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleIdentityChange = (event) => {
    setIdentity(event.target.value);
  };

  const handleJoinRoom = async () => {
    try {
      const response = await fetch('/video/token', {
        method: 'POST',
        body: JSON.stringify({
          identity,
          roomName,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const room = await Video.connect(data.token, {
        name: roomName,
      });
      setRoom(room);
      room.on('participantConnected', (participant) => {
        setParticipants((prevParticipants) => [...prevParticipants, participant]);
      });
      room.on('participantDisconnected', (participant) => {
        setParticipants((prevParticipants) =>
          prevParticipants.filter((p) => p !== participant)
        );
      });
    } catch (error) {
      console.error(`Unable to connect to Room:${error.message}`);
    }
    };
    
    const handleDoctorSelect = (doctor) => {
        setDoctors((prevDoctors) => {
            if (prevDoctors.includes(doctor)) {
                return prevDoctors.filter((d) => d !== doctor);
            } else {
                return [...prevDoctors, doctor];
            }
        });
    };
    
    return (
    <Box className={classes.root}>
    <Container maxWidth="md">
    <Paper className={classes.paper}>
    <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
    <Typography variant="h6">Join Video Call</Typography>
    <FormControl fullWidth margin="normal">
    <Typography variant="subtitle1">Room Name</Typography>
    <input type="text" value={roomName} onChange={handleRoomNameChange} />
    </FormControl>
    <FormControl fullWidth margin="normal">
    <Typography variant="subtitle1">Your Name</Typography>
    <input type="text" value={identity} onChange={handleIdentityChange} />
    </FormControl>
    <Button variant="contained" color="primary" onClick={handleJoinRoom}>
    Join Room
    </Button>
    </Grid>
    <Grid item xs={12} md={6}>
    <Typography variant="h6">Select Doctors</Typography>
    <Typography variant="body1">Choose the doctors you want to consult with:</Typography>
    <FormControl fullWidth margin="normal">
    {selectedDoc.map(doctor => (
    <FormControlLabel
    control={<Checkbox color="primary" />}
    key={doctor.id}
    label={doctor.name}
    onChange={() => handleDoctorSelect(doctor.name)}
    />))}
    {/* <FormControlLabel
    control={<Checkbox color="primary" />}
    label="Dr. Jane Smith"
    onChange={() => handleDoctorSelect('Jane Smith')}
    />
    <FormControlLabel
    control={<Checkbox color="primary" />}
    label="Dr. Mike Johnson"
    onChange={() => handleDoctorSelect('Mike Johnson')}
    /> */}
    </FormControl>
    </Grid>
    </Grid>
    </Paper>
    <Box marginTop={4}>
    <Grid container spacing={4}>
    <Grid item xs={12} md={8}>
    <Box className={classes.videoContainer}>
    {room && (
    <Video
    ref={(ref) => {
    ref && room.localParticipant.publishTrack(ref.srcObject.getTracks()[0]);
    }}
    className={classes.video}
    autoPlay
    playsInline
    muted
    />
    )}
    {participants.length > 0 && (
    <Box className={classes.controls}>
    <Typography variant="subtitle1">Participants:</Typography>
    {participants.map((participant) => (
    <Typography key={participant.sid} className={classes.button}>
    {participant.identity}
    </Typography>
    ))}
    </Box>
    )}
    </Box>
    </Grid>
    <Grid item xs={12} md={4}>
    <Typography variant="h6">Available Doctors</Typography>
    {doctors.length > 0 ? (
    doctors.map((doctor) => (
    <Box
    key={doctor}
    className={
    doctors.includes(doctor) ? classes.selectedDoctorCard : classes.doctorCard
    }
    onClick={() => handleDoctorSelect(doctor)}
    >
    <Typography variant="subtitle1">{doctor}</Typography>
    </Box>
    ))
    ) : (
    <Typography variant="body1">No doctors selected</Typography>
    )}
    </Grid>
    </Grid>
    </Box>
    </Container>
    </Box>
    );
    }
