import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Checkbox, CircularProgress, Divider, Drawer, FormControlLabel, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Toolbar, Typography } from '@material-ui/core';
import { Delete as DeleteIcon, Drafts as DraftsIcon, Inbox as InboxIcon, Menu as MenuIcon, Send as SendIcon } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Layout from '../../components/Layout';

const drawerWidth = 240;

const schema = yup.object().shape({
  to: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  emailList: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(2),
  },
  composeBtn: {
    marginBottom: theme.spacing(2),
  },
  emailTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  emailSender: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
  emailDate: {
    color: theme.palette.text.secondary,
  },
  emailContent: {
    whiteSpace: 'pre-wrap',
    marginTop: theme.spacing(2),
  },
  emailToolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1, 0),
  },
}));

export default function Mails({toggleTheme, themeMode}) {
  const classes = useStyles();
  const router = useRouter();

  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drafts, setDrafts] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    // Fetch email list
    setEmails([      {        id: 1,        subject: 'Example Subject 1',        sender: 'example1@example.com',        date: '2022-04-01T12:30:00Z',        content: 'Example message content 1.',      },      {        id: 2,        subject: 'Example Subject 2',        sender: 'example2@example.com',        date: '2022-04-02T12:30:00Z',        content: 'Example message content 2.',      },    ]);
    setLoading(false);
  }, []);

  const handleSend = (data) => {
    console.log('Sending email:', data);
    reset();
  };

  const handleSaveDraft = (data) => {
    console.log('Saving draft:',data);
    const draft = {
    id: Date.now(),
    to: data.to,
    subject: data.subject,
    message: data.message,
    date: new Date().toISOString(),
    };
    setDrafts([...drafts, draft]);
    reset();
    };
    
    const handleDeleteDraft = (draftId) => {
    const updatedDrafts = drafts.filter((draft) => draft.id !== draftId);
    setDrafts(updatedDrafts);
    };
    
    const handleDeleteEmail = (emailId) => {
    const updatedEmails = emails.filter((email) => email.id !== emailId);
    setEmails(updatedEmails);
    setSelectedEmail(null);
    };
    
    const handleSelectEmail = (email) => {
    setSelectedEmail(email);
    };
    
    const handleClearSelectedEmail = () => {
    setSelectedEmail(null);
    };
    
    return (
    <Layout toggleTheme={toggleTheme} themeMode={themeMode} >
    <div className={classes.root}>
    <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
    paper: classes.drawerPaper,
    }}
    >
    <div className={classes.toolbar} />
    <List>
    <ListItem button onClick={() => router.push('/email/inbox')}>
    <ListItemIcon>
    <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button onClick={() => router.push('/email/drafts')}>
    <ListItemIcon>
    <DraftsIcon />
    </ListItemIcon>
    <ListItemText primary="Drafts" />
    </ListItem>
    <ListItem button onClick={() => router.push('/email/create')}>
    <ListItemIcon>
    <SendIcon />
    </ListItemIcon>
    <ListItemText primary="Compose" />
    </ListItem>
    </List>
    </Drawer>
    <main className={classes.content}>
    <div className={classes.toolbar} />
    {loading ? (
    <CircularProgress />
    ) : selectedEmail ? (
    <>
    <div className={classes.emailToolbar}>
    <Typography variant="h6" className={classes.emailTitle}>
    {selectedEmail.subject}
    </Typography>
    <div>
    <IconButton onClick={handleClearSelectedEmail}>
    <DeleteIcon />
    </IconButton>
    </div>
    </div>
    <Typography variant="subtitle2" className={classes.emailSender}>
    {selectedEmail.sender}
    </Typography>
    <Typography variant="subtitle2" className={classes.emailDate}>
    {new Date(selectedEmail.date).toLocaleString()}
    </Typography>
    <Divider />
    <Typography variant="body1" className={classes.emailContent}>
    {selectedEmail.content}
    </Typography>
    </>
    ) : (
    <>
    <Paper className={classes.composeBtn}>
    <Button variant="contained" color="primary" onClick={() => router.push('/email/create')}>
    Compose
    </Button>
    </Paper>
    {drafts.length > 0 && (
    <div className={classes.emailList}>
    <Typography variant="h6" className={classes.emailTitle}>
    Drafts
    </Typography>
    <List>
    {drafts.map((draft) => (
    <ListItem key={draft.id} button onClick={() => handleSelectEmail(draft)}>
    <ListItemText primary={draft.subject} />
    <IconButton onClick={() => handleDeleteDraft(draft.id)}>
    <DeleteIcon />
    </IconButton>
    </ListItem>
    ))}
    </List>
    </div>
    )}
    <div className={classes.emailList}>
    <Typography variant="h6" className={classes.emailTitle}>
    Inbox
    </Typography>
    <List>
    {emails.map((email) => (
    <ListItem key={email.id} button onClick={() => handleSelectEmail(email)}>
        <ListItemText
primary={email.subject}
secondary={`${email.sender} - ${new Date(email.date).toLocaleString()}`}
/>
<IconButton onClick={() => handleDeleteEmail(email.id)}>
<DeleteIcon />
</IconButton>
</ListItem>
))}
</List>

</div>
</>
)}
</main>
</div>
</Layout>
);
};
