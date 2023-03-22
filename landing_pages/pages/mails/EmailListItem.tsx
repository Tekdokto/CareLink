import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { formatDate } from '../../utils/utils';

const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: theme.palette.background.paper,
  },
  selected: {
    backgroundColor: theme.palette.action.selected,
  },
  starred: {
    color: theme.palette.warning.main,
  },
}));

const EmailListItem = ({ email, isSelected, onSelect, onDeselect, onStarToggle }) => {
  const classes = useStyles();

  const handleToggle = () => {
    if (isSelected) {
      onDeselect(email.id);
    } else {
      onSelect(email.id);
    }
  };

  const handleStarToggle = (event) => {
    event.stopPropagation();
    onStarToggle(email.id);
  };

  return (
    <ListItem
      className={isSelected ? classes.selected : classes.listItem}
      button
      onClick={handleToggle}
      dense
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={isSelected}
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <ListItemIcon>
        {email.starred ? (
          <IconButton
            edge="start"
            onClick={handleStarToggle}
          >
            <StarIcon className={classes.starred} />
          </IconButton>
        ) : (
          <IconButton
            edge="start"
            onClick={handleStarToggle}
          >
            <StarBorderIcon />
          </IconButton>
        )}
      </ListItemIcon>
      <ListItemText
        primary={email.from}
        secondary={email.subject}
      />
      <ListItemText
        // primary={formatDate(email.timestamp)}
        secondary={email.folder}
        // align="right"
      />
    </ListItem>
  );
};

export default EmailListItem;
