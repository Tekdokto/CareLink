import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Input,
  List,
  Paper,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    width: '47vw',
    height: '70vh'
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  listItem: {
    display: 'flex',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '7px',
    width: '300px',
    margin: theme.spacing(1, 0)
  },
  medicationName: {
    fontWeight: 'bold',
  },
  medicationDescription: {
    color: theme.palette.text.secondary,
  },
  refillButton: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
}));

function AvailableMedications({ medications, onRefillRequest }) {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the medications based on the search query
  const filteredMedications = medications.filter(medication =>
    medication.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRefreshClick = () => {
    setSearchQuery('');
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        Available Medications
    </Typography>
<Input
placeholder="Search for medication"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
className={classes.input}
/>
<List className={classes.list}>
{filteredMedications.map(medication => (
<ListItem className={classes.listItem} key={medication.id}>
    <ListItemText
        primary={<span className={classes.medicationName}>{medication.name}</span>}
        secondary={<span className={classes.medicationDescription}>{medication.description}</span>}
    />
    <ListItemSecondaryAction>
        <IconButton
            edge="end"
            aria-label="Refill"
            onClick={() => onRefillRequest(medication)}
            className={classes.refillButton}
        >
            Refill
        </IconButton>
    </ListItemSecondaryAction>
</ListItem>
))}
</List>
<IconButton
     aria-label="Refresh"
     onClick={handleRefreshClick}
   >
<Refresh />
</IconButton>
</Paper>
);
}

export default AvailableMedications;