import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Typography, List, Paper, IconButton,
  ListItemSecondaryAction, Input, 
  ListItem, ListItemText, Button 
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
  medicationName: {
    fontWeight: 'bold',
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
  medicationDosage: {
    color: theme.palette.text.secondary,
  },
  refillButton: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
}));

function PrescribedMedications({ medications, onRefillRequest }) {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState('');

  // Filter the medications based on the search query
  const filteredMedications = medications.filter(medication =>
    medication.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleRefreshClick = () => {
    setSearchQuery('');
  };
  const handleRefill = (medication) => {
    if (onRefillRequest) {
      onRefillRequest(medication);
    }
  }

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        Prescribed Medications
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
              primary={
                <Typography className={classes.medicationName}>{medication.name}</Typography>
              }
              secondary={
                <Typography className={classes.medicationDosage}>Dosage: {medication.dosage}</Typography>
              }
            />
            <ListItemSecondaryAction>
              <Button
                className={classes.refillButton}
                onClick={() => handleRefill(medication)}
                variant="contained"
              >
                Request Refill
              </Button>
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

export default PrescribedMedications;
