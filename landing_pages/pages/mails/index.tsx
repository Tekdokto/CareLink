import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EmailList from './EmailList';
import DraftList from './DraftList';
import StarredList from './StarredList';
import SentList from './SentList';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import EmailListItem from './EmailListItem';
import EmailToolbar from './MailToolbar';
import EmailComposeDialog from './EmailComposeDialog';
import Layout from '../../components/Layout';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  contentShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  noEmails: {
    color: theme.palette.grey[500],
    fontStyle: 'italic',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
  },
  textField: {
    margin: theme.spacing(1),
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Mails({toggleTheme, themeMode}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedEmails, setSelectedEmails] = React.useState([]);
  const [currentList, setCurrentList] = React.useState('inbox');
  const [emails, setEmails] = React.useState(
    [    
        { id: 1,from: 'John Doe', subject: 'Lorem ipsum dolor sit amet', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',      timestamp: '12:30', folder: 'inbox', starred: false, read: false, }, { id: 2, from: 'Jane Doe', subject: 'Consectetur adipiscing elit', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', timestamp: '10:15', folder: 'inbox', starred: false, read: true, }, 
        { id: 3, from: 'Alice Smith', subject: 'Ut enim ad minim veniam', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', timestamp: '09:00', folder: 'sent', starred: true, read: true, }, { id: 4, from: 'Bob Johnson', subject: 'Sed do eiusmod tempor incididunt', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', timestamp: 'Yesterday', folder: 'drafts', starred: false, read: false, }, 
    ]
);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const handleSelectEmail = (id: any) => {
    setSelectedEmails([...selectedEmails, id]);
  };
  
  const handleDeselectEmail = (id: any) => {
    setSelectedEmails(selectedEmails.filter((emailId) => emailId !== id));
  };
  
  const handleSelectAll = () => {
    setSelectedEmails(emails.map((email) => email.id));
  };
  
  const handleDeselectAll = () => {
    setSelectedEmails([]);
  };
  
  const handleDeleteSelected = () => {
    setEmails(emails.filter((email) => !selectedEmails.includes(email.id)));
    setSelectedEmails([]);
  };
  
  const handleMarkSelectedAsRead = () => {
    setEmails(
        emails.map((email) =>
            selectedEmails.includes(email.id) ? { ...email, read: true } : email
        )
    );
  };
  
  const handleMarkSelectedAsUnread = () => {
    setEmails(
        emails.map((email) =>
            selectedEmails.includes(email.id) ? { ...email, read: false } : email
        )
    );
  };
  
  const handleToggleStarSelected = () => {
    setEmails(
        emails.map((email) =>
            selectedEmails.includes(email.id)
            ? { ...email, starred: !email.starred }
            : email
        )
    );
  };
  
  const handleCurrentListChange = (list: React.SetStateAction<string>) => {
    setCurrentList(list);
  };
  
  const handleAddDraft = (newDraft: 
    { id: number; from: string; subject: string; body: string; timestamp: string; folder: string; 
        starred: boolean; read: boolean; 
    }) => {
    setEmails([...emails, { ...newDraft, id: emails.length + 1, folder: 'drafts', starred: false, read: false }]);
    setCurrentList('drafts');
  };
  
  const handleSendEmail = (newEmail: 
    { id: number; from: string; subject: string; body: string; timestamp: string; 
        folder: string; starred: boolean; read: boolean; 
    }) => {
    setEmails([...emails, { ...newEmail, id: emails.length + 1, folder: 'sent', starred: false, read: true }]);
    setCurrentList('sent');
  };
  
  const filteredEmails = emails.filter((email) =>
    currentList === 'inbox' ? email.folder === 'inbox' : email.folder === currentList
  );
  
  const selectedEmailObjects = emails.filter((email) => selectedEmails.includes(email.id));

  return (
    <Layout toggleTheme={toggleTheme} themeMode={themeMode}>
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {currentList.toUpperCase()}
                    </Typography>
                    <IconButton color="inherit" onClick={() => setCurrentList('drafts')}>
                        <EditIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={() => setCurrentList('sent')}>
                        <SendIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={() => setCurrentList('trash')}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={() => setCurrentList('spam')}>
                        <ReportIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={() => handleCurrentListChange('inbox')}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <ListItem button onClick={() => handleCurrentListChange('drafts')}>
                        <ListItemIcon><DraftsIcon /></ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <ListItem button onClick={() => handleCurrentListChange('sent')}>
                        <ListItemIcon><SendIcon /></ListItemIcon>
                        <ListItemText primary="Sent" />
                    </ListItem>
                    <ListItem button onClick={() => handleCurrentListChange('trash')}>
                        <ListItemIcon><DeleteIcon /></ListItemIcon>
                        <ListItemText primary="Trash" />
                    </ListItem>
                    <ListItem button onClick={() => handleCurrentListChange('spam')}>
                        <ListItemIcon><ReportIcon /></ListItemIcon>
                        <ListItemText primary="Spam" />
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.toolbar} />
                {filteredEmails.map((email) => (
                    <EmailListItem
                        key={email.id}
                        email={email}
                        isSelected={selectedEmails.includes(email.id)}
                        onSelect={handleSelectEmail}
                        onDeselect={handleDeselectEmail} onStarToggle={undefined}  />
                ))}
                {filteredEmails.length === 0 && (
                    <div className={classes.noEmails}>
                        <Typography variant="h6">No emails to show</Typography>
                    </div>
                )}
            </main>
            <EmailToolbar
                numSelected={selectedEmails.length}
                onSelectAll={handleSelectAll}
                onDeselectAll={handleDeselectAll}
                onDeleteSelected={handleDeleteSelected}
                onMarkSelectedAsRead={handleMarkSelectedAsRead}
                onMarkSelectedAsUnread={handleMarkSelectedAsUnread}
                onToggleStarSelected={handleToggleStarSelected}
            />
            <EmailComposeDialog onAddDraft={handleAddDraft} onSendEmail={handleSendEmail} />
        </div>
    </Layout>
  );
}