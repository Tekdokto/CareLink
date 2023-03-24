import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

interface NewDraft {
    id: number;
    from: string;
    subject: string;
    body: string;
    timestamp: string;
    folder: string;
    starred: boolean;
    read: boolean;
}

type AddDraftFunction = (subject: string, body: string) => void;

interface EmailComposeDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
  onAddDraft: (subject: string, body: string) => void;
  onSendEmail: (to: string, subject: string, body: string) => void;
}

const EmailComposeDialog: React.FC<EmailComposeDialogProps> = ({
    open,
    setOpen,
  onAddDraft,
  onSendEmail,
}) => {
  const classes = useStyles();

  const [to, setTo] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [body, setBody] = React.useState('');

const handleSend = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> 
    | React.FormEvent<HTMLFormElement>
) => {
    onSendEmail(to, subject, body);
    handleSubmit(event)
};

  const handleSaveDraft = () => {
    onAddDraft(subject, body);
    // onAddDraft(newDraft.subject, newDraft.body);
    setOpen(!open);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newDraft: NewDraft = {
      id: Math.random(),
      from: formData.get('from') as string,
      subject: formData.get('subject') as string,
      body: formData.get('body') as string,
      timestamp: new Date().toISOString(),
      folder: 'drafts',
      starred: false,
      read: false,
    };
    onAddDraft(newDraft.subject, newDraft.body);
    setOpen(!open);
  };
  return (
    <Dialog open={open} onClose={() => setOpen(!open)} fullWidth={true} maxWidth="md">
        <form onSubmit={(event) => handleSend(event)}>
            <DialogTitle>New Email</DialogTitle>
            <DialogContent>
                <TextField
                    label="To"
                    fullWidth={true}
                    value={to}
                    onChange={(event) => setTo(event.target.value)}
                    className={classes.textField}
                />
                <TextField
                    label="Subject"
                    fullWidth={true}
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    className={classes.textField}
                />
                <TextField
                    label="Body"
                    fullWidth={true}
                    multiline={true}
                    rows={10}
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    className={classes.textField}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSaveDraft} color="primary">
                    Save Draft
                </Button>
                <Button type='submit' color="primary" variant="contained">
                    Send
                </Button>
            </DialogActions>
        </form>
    </Dialog>
  );
};

export default EmailComposeDialog;
