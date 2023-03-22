import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import EmailListItem from './EmailListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function SentList({ emails, selectedEmails, onSelectEmail, onDeselectEmail }) {
  const classes = useStyles();

  const filteredEmails = emails.filter((email) => email.folder === 'sent');

  return (
    <div className={classes.root}>
      <List>
        {filteredEmails.map((email) => (
          <EmailListItem
            key={email.id}
            email={email}
            isSelected={selectedEmails.includes(email.id)}
            onSelect={() => onSelectEmail(email.id)}
            onDeselect={() => onDeselectEmail(email.id)} onStarToggle={undefined}          />
        ))}
      </List>
    </div>
  );
}

export default SentList;
