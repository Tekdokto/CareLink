import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import EmailListItem from './EmailListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function StarredList({ emails, onSelectEmail, onDeselectEmail }) {
  const classes = useStyles();

  const starredEmails = emails.filter((email) => email.starred);

  return (
    <div className={classes.root}>
      <List>
        {starredEmails.map((email) => (
          <EmailListItem
            key={email.id}
            email={email}
            onSelect={onSelectEmail}
            onDeselect={onDeselectEmail} isSelected={undefined} onStarToggle={undefined}          />
        ))}
      </List>
    </div>
  );
}

export default StarredList;
