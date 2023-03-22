import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import EmailListItem from './EmailListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function EmailList({ filteredEmails, selectedEmailObjects, onSelectEmail }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {filteredEmails.map((email) => (
          <React.Fragment key={email.id}>
            {email.id !== 1 && <Divider />}
            <EmailListItem
                email={email}
                isSelected={selectedEmailObjects.includes(email)}
                onSelect={onSelectEmail} onDeselect={undefined} onStarToggle={undefined}            />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default EmailList;
