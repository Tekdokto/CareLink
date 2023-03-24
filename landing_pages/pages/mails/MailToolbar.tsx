import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },
  button: {
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.type === 'light' ? 'white' : 'white',
  },
  selected: {
    fontWeight: "bold",
  },
}));

type EmailToolbarProps = {
  numSelected: number;
  onSelectAll: () => void;
  onDeselectAll: () => void;
  onDeleteSelected: () => void;
  onMarkSelectedAsRead: () => void;
  onMarkSelectedAsUnread: () => void;
  onToggleStarSelected: () => void;
};

const EmailToolbar: React.FC<EmailToolbarProps> = ({
  numSelected,
  onSelectAll,
  onDeselectAll,
  onDeleteSelected,
  onMarkSelectedAsRead,
  onMarkSelectedAsUnread,
  onToggleStarSelected,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.toolbar}>
      <span className={classes.selected}>{numSelected} selected</span>
      <div>
      <Button variant="contained" onClick={onSelectAll} className={classes.button}>
        Select All
      </Button>
      <Button variant="contained" onClick={onDeselectAll} className={classes.button}>
        Deselect All
      </Button>
      <Button variant="contained" onClick={onDeleteSelected} className={classes.button}>
        Delete
      </Button>
      <Button variant="contained" onClick={onMarkSelectedAsRead} className={classes.button}>
        Mark as Read
      </Button>
      <Button variant="contained" onClick={onMarkSelectedAsUnread} className={classes.button}>
        Mark as Unread
      </Button>
      <Button variant="contained" onClick={onToggleStarSelected} className={classes.button}>
        Toggle Star
      </Button>
      </div>
    </Paper>
  );
};

export default EmailToolbar;
