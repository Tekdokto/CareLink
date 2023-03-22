import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(1),
  },
  button: {
    marginLeft: theme.spacing(1),
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
    <div className={classes.toolbar}>
      <span className={classes.selected}>{numSelected} selected</span>
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
  );
};

export default EmailToolbar;
