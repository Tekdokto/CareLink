
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { TextField } from '@material-ui/core';
import Layout from '../../components/Layout';
import VirtualDebitCard from '../../components/VirtualDebitCard';
import CalendarComponent from '../../components/CalendarComponent';

const useStyles = makeStyles((theme) => ({
root: {
flexGrow: 1,
margin: theme.spacing(0),
},
walletButtons: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0.8, 2),
},
paper: {
padding: theme.spacing(2),
textAlign: 'center',
color: theme.palette.text.secondary,
},
walletSection: {
display: 'flex',
alignItems: 'center',
justifyContent: 'space-between',
margin: theme.spacing(2),
padding: theme.spacing(2),
backgroundColor: theme.palette.primary.light,
color: theme.palette.primary.contrastText,
},
debitCardSection: {
display: 'flex',
alignItems: 'center',
justifyContent: 'space-between',
margin: theme.spacing(2),
padding: theme.spacing(2),
backgroundColor: theme.palette.secondary.light,
color: theme.palette.secondary.contrastText,
},
}));

const Dashboard = ({toggleTheme, themeMode}) => {
const classes = useStyles();
const [walletBalance, setWalletBalance] = useState(100);
const [debitCardBalance, setDebitCardBalance] = useState(0);
const [debitCardAmount, setDebitCardAmount] = useState(0);
const [calculatedAmt, setCalculatedAmt] = useState(0);

const handleAddToWallet = (amount) => {
setWalletBalance(walletBalance + amount);
};

const handleAddToDebitCard = () => {
setDebitCardBalance(debitCardBalance + debitCardAmount);
setDebitCardAmount(0);
};

// Skin Condition Chart
const skinData = [
{ name: 'January', Acne: 12, Eczema: 2, Psoriasis: 5, Rosacea: 3 },
{ name: 'February', Acne: 19, Eczema: 3, Psoriasis: 10, Rosacea: 5 },
{ name: 'March', Acne: 3, Eczema: 20, Psoriasis: 12, Rosacea: 6 },
{ name: 'April', Acne: 5, Eczema: 5, Psoriasis: 8, Rosacea: 8 },
{ name: 'May', Acne: 2, Eczema: 1, Psoriasis: 9, Rosacea: 10 },
{ name: 'June', Acne: 3, Eczema: 4, Psoriasis: 4, Rosacea: 12 },
{ name: 'July', Acne: 10, Eczema: 2, Psoriasis: 6, Rosacea: 7 },
{ name: 'August', Acne: 3, Eczema: 20, Psoriasis: 12, Rosacea: 6 },
{ name: 'September', Acne: 5, Eczema: 5, Psoriasis: 8, Rosacea: 8 },
{ name: 'October', Acne: 2, Eczema: 1, Psoriasis: 9, Rosacea: 10 },
{ name: 'November', Acne: 3, Eczema: 4, Psoriasis: 4, Rosacea: 12 },
{ name: 'December', Acne: 10, Eczema: 2, Psoriasis: 6, Rosacea: 7 },
];

const skinColors = ['#8884d8', '#82ca9d', '#ffc658', '#ffc107'];

// Kidney Condition Chart
const kidneyData = [
{ name: 'High Creatinine', 'Number of Patients': 10 },
{ name: 'Chronic Kidney Disease', 'Number of Patients': 5 },
{ name: 'Kidney Stones', 'Number of Patients': 3 },
{ name: 'Urinary Tract Infection ', 'Number of Patients': 8 },
];

const kidneyColors = ['#8884d8', '#82ca9d', '#ffc658', '#ffc107'];

// Blood Pressure Chart
const bloodData = [
{ name: 'January', 'Systolic Pressure': 120, 'Diastolic Pressure': 80 },
{ name: 'February', 'Systolic Pressure': 130, 'Diastolic Pressure': 85 },
{ name: 'March', 'Systolic Pressure': 140, 'Diastolic Pressure': 90 },
{ name: 'April', 'Systolic Pressure': 130, 'Diastolic Pressure': 80 },
{ name: 'May', 'Systolic Pressure': 120, 'Diastolic Pressure': 75 },
{ name: 'June', 'Systolic Pressure': 130, 'Diastolic Pressure': 85 },
{ name: 'July', 'Systolic Pressure': 140, 'Diastolic Pressure': 90 },
{ name: 'August', 'Systolic Pressure': 120, 'Diastolic Pressure': 80 },
{ name: 'September', 'Systolic Pressure': 130, 'Diastolic Pressure': 85 },
{ name: 'October', 'Systolic Pressure': 140, 'Diastolic Pressure': 90 },
{ name: 'November', 'Systolic Pressure': 130, 'Diastolic Pressure': 80 },
{ name: 'December', 'Systolic Pressure': 120, 'Diastolic Pressure': 75 },
];

return (
<Layout toggleTheme={toggleTheme} themeMode={themeMode} >
<div className={classes.root}>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <CalendarComponent />
    </Grid>
    <Grid item xs={12} sm={6}>
      <br />
      <Paper className={classes.paper}>
          <VirtualDebitCard balance={debitCardBalance} />
          <br />
        <TextField label="Amount" type="number" value={debitCardAmount} onChange={(e) => setDebitCardAmount(parseInt(e.target.value))} />
        <Button variant="contained" color="secondary" onClick={() => handleAddToDebitCard()}>Top Up</Button>
      </Paper>
      <br />
      <Paper className={classes.paper}>
        <div className={classes.walletSection}>
          <Typography variant="h6">Wallet Balance</Typography>
          <Typography variant="h6">${walletBalance}</Typography>
        </div>
        <br />
        <div className={classes.walletButtons}>
          <Button variant="contained" color="primary" onClick={() => handleAddToWallet(10)}>Add $10</Button>
          <Button variant="contained" color="primary" onClick={() => handleAddToWallet(50)}>Add $50</Button>
        </div>
      </Paper>
    </Grid>
    
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Skin Condition</Typography>
        <LineChart width={600} height={300} data={skinData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Acne" stroke={skinColors[0]} />
          <Line type="monotone" dataKey="Eczema" stroke={skinColors[1]} />
          <Line type="monotone" dataKey="Psoriasis" stroke={skinColors[2]} />
          <Line type="monotone" dataKey="Rosacea" stroke={skinColors[3]} />
        </LineChart>
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Kidney Condition</Typography>
        <PieChart width={600} height={300}>
          <Pie dataKey="Number of Patients" isAnimationActive={false} data={kidneyData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
            {
              kidneyData.map(() => <Cell key={Math.random()} fill={kidneyColors[Math.floor(Math.random() * kidneyColors.length)]} />)
            }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Blood Pressure</Typography>
        <BarChart width={1200} height={300} data={bloodData}>
          <XAxis dataKey="name" /><YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Systolic Pressure" fill="#8884d8" />
          <Bar dataKey="Diastolic Pressure" fill="#82ca9d" />
        </BarChart>
      </Paper>
    </Grid>

    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Muscles Condition</Typography>
        <LineChart width={600} height={300} data={skinData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Acne" stroke={skinColors[0]} />
          <Line type="monotone" dataKey="Eczema" stroke={skinColors[1]} />
          <Line type="monotone" dataKey="Psoriasis" stroke={skinColors[2]} />
          <Line type="monotone" dataKey="Rosacea" stroke={skinColors[3]} />
        </LineChart>
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Veins Condition</Typography>
        <PieChart width={600} height={300}>
          <Pie dataKey="Number of Patients" isAnimationActive={false} data={kidneyData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
            {
              kidneyData.map(() => <Cell key={Math.random()} fill={kidneyColors[Math.floor(Math.random() * kidneyColors.length)]} />)
            }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Hair Condition</Typography>
        <BarChart width={1200} height={300} data={bloodData}>
          <XAxis dataKey="name" /><YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Systolic Pressure" fill="#8884d8" />
          <Bar dataKey="Diastolic Pressure" fill="#82ca9d" />
        </BarChart>
      </Paper>
    </Grid>

    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Mouth Condition</Typography>
        <LineChart width={600} height={300} data={skinData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Acne" stroke={skinColors[0]} />
          <Line type="monotone" dataKey="Eczema" stroke={skinColors[1]} />
          <Line type="monotone" dataKey="Psoriasis" stroke={skinColors[2]} />
          <Line type="monotone" dataKey="Rosacea" stroke={skinColors[3]} />
        </LineChart>
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Eyes Condition</Typography>
        <PieChart width={600} height={300}>
          <Pie dataKey="Number of Patients" isAnimationActive={false} data={kidneyData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
            {
              kidneyData.map(() => <Cell key={Math.random()} fill={kidneyColors[Math.floor(Math.random() * kidneyColors.length)]} />)
            }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Bones Condition</Typography>
        <BarChart width={1200} height={300} data={bloodData}>
          <XAxis dataKey="name" /><YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Systolic Pressure" fill="#8884d8" />
          <Bar dataKey="Diastolic Pressure" fill="#82ca9d" />
        </BarChart>
      </Paper>
    </Grid>

    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Brain Condition</Typography>
        <LineChart width={600} height={300} data={skinData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Acne" stroke={skinColors[0]} />
          <Line type="monotone" dataKey="Eczema" stroke={skinColors[1]} />
          <Line type="monotone" dataKey="Psoriasis" stroke={skinColors[2]} />
          <Line type="monotone" dataKey="Rosacea" stroke={skinColors[3]} />
        </LineChart>
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Nose Condition</Typography>
        <PieChart width={600} height={300}>
          <Pie dataKey="Number of Patients" isAnimationActive={false} data={kidneyData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
            {
              kidneyData.map(() => <Cell key={Math.random()} fill={kidneyColors[Math.floor(Math.random() * kidneyColors.length)]} />)
            }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Ear Condition</Typography>
        <BarChart width={1200} height={300} data={bloodData}>
          <XAxis dataKey="name" /><YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Systolic Pressure" fill="#8884d8" />
          <Bar dataKey="Diastolic Pressure" fill="#82ca9d" />
        </BarChart>
      </Paper>
    </Grid>

    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Nails Condition</Typography>
        <LineChart width={600} height={300} data={skinData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Acne" stroke={skinColors[0]} />
          <Line type="monotone" dataKey="Eczema" stroke={skinColors[1]} />
          <Line type="monotone" dataKey="Psoriasis" stroke={skinColors[2]} />
          <Line type="monotone" dataKey="Rosacea" stroke={skinColors[3]} />
        </LineChart>
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Kidney Condition</Typography>
        <PieChart width={600} height={300}>
          <Pie dataKey="Number of Patients" isAnimationActive={false} data={kidneyData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
            {
              kidneyData.map(() => <Cell key={Math.random()} fill={kidneyColors[Math.floor(Math.random() * kidneyColors.length)]} />)
            }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Heart Condition</Typography>
        <BarChart width={1200} height={300} data={bloodData}>
          <XAxis dataKey="name" /><YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Systolic Pressure" fill="#8884d8" />
          <Bar dataKey="Diastolic Pressure" fill="#82ca9d" />
        </BarChart>
      </Paper>
    </Grid>
  </Grid>
            
  </div>
</Layout>
);
};
export default Dashboard;