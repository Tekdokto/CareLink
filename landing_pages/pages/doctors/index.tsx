import React, {useState} from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ChatIcon from '@material-ui/icons/Chat';
import EventIcon from '@material-ui/icons/Event';
import IconButton from '@material-ui/core/IconButton';
import Pagination from '@material-ui/lab/Pagination';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
  },
  image: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
  },
  iconButton: {
    marginRight: theme.spacing(1),
  },
  pagination: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
  doctorsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: theme.spacing(2),
    overflowX: 'auto',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    transition: 'transform 0.3s ease-in-out',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[200],
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const doctors = [
  {
    id: 1,
    name: 'Dr. John Smith',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Cardiology',
    qualification: 'MBBS, MD, DM',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', time: '9:00 AM - 1:00 PM' },
      { day: 'Thursday', time: '9:00 AM - 1:00 PM' },
      { day: 'Friday', time: '9:00 AM - 5:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 12:00 PM' },
    ],
  },
  {
    id: 2,
    name: 'Dr. Jane Doe',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Dermatology',
    qualification: 'MBBS, MD',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '10:00 AM - 6:00 PM' },
      { day: 'Tuesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Wednesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Thursday', time: '10:00 AM - 6:00 PM' },
      { day: 'Friday', time: '10:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '10:00 AM - 3:00 PM' },
    ],
  },
  {
    id: 3,
    name: 'Dr. John Smith',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Cardiology',
    qualification: 'MBBS, MD, DM',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', time: '9:00 AM - 1:00 PM' },
      { day: 'Thursday', time: '9:00 AM - 1:00 PM' },
      { day: 'Friday', time: '9:00 AM - 5:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 12:00 PM' },
    ],
  },
  {
    id: 4,
    name: 'Dr. Jane Doe',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Dermatology',
    qualification: 'MBBS, MD',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '10:00 AM - 6:00 PM' },
      { day: 'Tuesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Wednesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Thursday', time: '10:00 AM - 6:00 PM' },
      { day: 'Friday', time: '10:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '10:00 AM - 3:00 PM' },
    ],
  },
  {
    id: 5,
    name: 'Dr. John Smith',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Cardiology',
    qualification: 'MBBS, MD, DM',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', time: '9:00 AM - 1:00 PM' },
      { day: 'Thursday', time: '9:00 AM - 1:00 PM' },
      { day: 'Friday', time: '9:00 AM - 5:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 12:00 PM' },
    ],
  },
  {
    id: 6,
    name: 'Dr. Jane Doe',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Dermatology',
    qualification: 'MBBS, MD',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '10:00 AM - 6:00 PM' },
      { day: 'Tuesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Wednesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Thursday', time: '10:00 AM - 6:00 PM' },
      { day: 'Friday', time: '10:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '10:00 AM - 3:00 PM' },
    ],
  },
  {
    id: 7,
    name: 'Dr. John Smith',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Cardiology',
    qualification: 'MBBS, MD, DM',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', time: '9:00 AM - 1:00 PM' },
      { day: 'Thursday', time: '9:00 AM - 1:00 PM' },
      { day: 'Friday', time: '9:00 AM - 5:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 12:00 PM' },
    ],
  },
  {
    id: 8,
    name: 'Dr. Jane Doe',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Dermatology',
    qualification: 'MBBS, MD',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '10:00 AM - 6:00 PM' },
      { day: 'Tuesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Wednesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Thursday', time: '10:00 AM - 6:00 PM' },
      { day: 'Friday', time: '10:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '10:00 AM - 3:00 PM' },
    ],
  },
  {
    id: 9,
    name: 'Dr. John Smith',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Cardiology',
    qualification: 'MBBS, MD, DM',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', time: '9:00 AM - 1:00 PM' },
      { day: 'Thursday', time: '9:00 AM - 1:00 PM' },
      { day: 'Friday', time: '9:00 AM - 5:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 12:00 PM' },
    ],
  },
  {
    id: 10,
    name: 'Dr. Jane Doe',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Dermatology',
    qualification: 'MBBS, MD',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '10:00 AM - 6:00 PM' },
      { day: 'Tuesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Wednesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Thursday', time: '10:00 AM - 6:00 PM' },
      { day: 'Friday', time: '10:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '10:00 AM - 3:00 PM' },
    ],
  },
  {
    id: 11,
    name: 'Dr. John Smith',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Cardiology',
    qualification: 'MBBS, MD, DM',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', time: '9:00 AM - 1:00 PM' },
      { day: 'Thursday', time: '9:00 AM - 1:00 PM' },
      { day: 'Friday', time: '9:00 AM - 5:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 12:00 PM' },
    ],
  },
  {
    id: 12,
    name: 'Dr. Jane Doe',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Dermatology',
    qualification: 'MBBS, MD',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '10:00 AM - 6:00 PM' },
      { day: 'Tuesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Wednesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Thursday', time: '10:00 AM - 6:00 PM' },
      { day: 'Friday', time: '10:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '10:00 AM - 3:00 PM' },
    ],
  },
  {
    id: 13,
    name: 'Dr. John Smith',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Cardiology',
    qualification: 'MBBS, MD, DM',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', time: '9:00 AM - 1:00 PM' },
      { day: 'Thursday', time: '9:00 AM - 1:00 PM' },
      { day: 'Friday', time: '9:00 AM - 5:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 12:00 PM' },
    ],
  },
  {
    id: 14,
    name: 'Dr. Jane Doe',
    picture: 'https://via.placeholder.com/400x400',
    specialty: 'Dermatology',
    qualification: 'MBBS, MD',
    accomplishments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor in elit sagittis vehicula.',
    availability: [
      { day: 'Monday', time: '10:00 AM - 6:00 PM' },
      { day: 'Tuesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Wednesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Thursday', time: '10:00 AM - 6:00 PM' },
      { day: 'Friday', time: '10:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '10:00 AM - 3:00 PM' },
    ],
  },
];

const Doctors = ({ toggleTheme, themeMode }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [searchText, setSearchText] = useState('');
  const doctorsPerPage = 3;

  const handleChange = (event, value) => {
    setPage(value);
  
    const doctorsList = document.getElementById('doctors-list');
    doctorsList.style.transform = `translateX(${-100 * (value - 1)}%)`;
    doctorsList.style.transition = 'transform 0.3s ease-in-out';
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const pageDoctors = filteredDoctors.slice((page - 1) * 12, page * 12);

  const indexOfLastDoctor = page * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  return (
  <Layout toggleTheme={toggleTheme} themeMode={themeMode}>
  <div className={classes.root}>
  <Typography variant="h5" gutterBottom>
    Our Doctors
    </Typography>
    <Grid item xs={12}>
        <Paper className={classes.paper}>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={searchText}
                onChange={handleSearchTextChange}
            />
            </div>
        </Paper>
    </Grid>
    <br />
  <Grid className="doctors-list" container spacing={3}>
  {currentDoctors.map((doctor) => (
  <Grid item xs={12} md={6} lg={4} key={doctor.id}>
  <Paper className={classes.paper}>
  <img
    src={doctor.picture}
    alt={doctor.name}
    className={classes.image}
    />
  <Typography variant="h6">{doctor.name}</Typography>
  <Typography variant="subtitle1">
  {doctor.specialty}
  </Typography>
  <Typography variant="body2" gutterBottom>
  {doctor.qualification}
  </Typography>
  <Typography variant="body1" gutterBottom>
  {doctor.accomplishments}
  </Typography>
  <Grid container alignItems="center">
  <Grid item>
  <IconButton className={classes.iconButton} size="small">
    <ChatIcon color="primary" fontSize="small" />
    <Typography variant="caption" component="span" color="textSecondary">
        Chat
    </Typography>
    </IconButton>
    <IconButton className={classes.iconButton} size="small">
    <EventIcon color="primary" fontSize="small" />
    <Typography variant="caption" component="span" color="textSecondary">
        Appoint
    </Typography>
    </IconButton>
  </Grid>
  </Grid>
  <Typography variant="subtitle2" color="textSecondary">
  Availability
  </Typography>
  <ul>
  {doctor.availability.map((schedule) => (
    <li key={`${doctor.id}-${schedule.day}`}>
        {`${schedule.day}: ${schedule.time}`}
    </li>
  ))}
  </ul>
  </Paper>
  </Grid>
  ))}
  </Grid>
  <div className={classes.pagination}>
  <Pagination
  count={Math.ceil(doctors.length / doctorsPerPage)}
  page={page}
  onChange={handleChange}
  color="primary"
  />
  </div>
  </div>
  </Layout>
  );
  };
  
  export default Doctors;
