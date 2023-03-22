import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 'auto',
    marginTop: '50px',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
  },
  flipped: {
    transform: 'rotateY(180deg)'
  },
  front: {
    position: 'relative',
    backfaceVisibility: 'hidden',
    backgroundColor: '#00247d',
    color: '#fff',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
    borderRadius: '10px',
    backgroundImage: 'linear-gradient(to bottom right, #00247d, #0082c8)',
  },
  back: {
    position: 'absolute',
    // backfaceVisibility: 'hidden',
    backgroundColor: '#f2f2f2',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
    transform: 'rotateY(180deg)',
    backgroundImage: 'linear-gradient(to bottom right, #f2f2f2, #d4d4d4)',
  },
  media: {
    height: 80,
    width: 80,
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '5px',
  },
  cardSubtitle: {
    fontWeight: 'bold',
    fontSize: '12px',
    marginBottom: '5px',
  },
  cardNumber: {
    fontSize: '20px',
    letterSpacing: '4px',
    marginBottom: '10px',
  },
  cardHolder: {
    fontSize: '12px',
    marginBottom: '10px',
  },
  cardExpiration: {
    fontSize: '12px',
    letterSpacing: '1px',
  },
  cardBrand: {
    fontWeight: 'bold',
    fontSize: '14px',
    marginTop: '10px',
  },
  iconButton: {
    color: '#fff',
    position: 'absolute',
    right: '10px',
    top: '10px',
  },
  cardCVV: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.palette.grey[700],
  },

  cardAddress: {
    fontSize: '0.9rem',
    color: theme.palette.grey[600],
  },

  cardPhone: {
    fontSize: '0.9rem',
    color: theme.palette.grey[600],
  },

  cardSignature: {
    fontSize: '1.1rem',
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '20px',
  },
}));

const VirtualDebitCard = ({balance}) => {
  const classes = useStyles();
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const handleShowCardNumber = () => {
    setShowCardNumber(!showCardNumber);
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <>
    <Card className={`${classes.root} ${flipped ? classes.flipped : ''}`}>
      <CardContent className={classes.front}>
        <div>
          <Typography className={classes.cardTitle}>
            CareLink
          </Typography>
          <Typography className={classes.cardSubtitle}>
            Virtual Card
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
          <div >
            <Typography className={classes.cardNumber}>
              {showCardNumber ? '1234 5678 9012 3456' : '**** **** **** ****'}
            </Typography>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
          <div>
            <Typography className={classes.cardHolder}>
              BALANCE
            </Typography>
            <Typography className={classes.cardExpiration}>
              ${showCardNumber ? `${balance}.00` : 'xxxx'}
            </Typography>
          </div>
          <div
            className={classes.media}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/profile.jpg)`,
            }}
          />
          <div style={{ marginLeft: '10px' }}>
            <Typography className={classes.cardHolder}>
              John Doe
            </Typography>
            <Typography className={classes.cardExpiration}>
              Exp. 12/24
            </Typography>
          </div>
        </div>
        <IconButton
          className={classes.iconButton}
          onClick={handleShowCardNumber}
        >
          {showCardNumber ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </CardContent>
      <CardContent className={classes.back}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography className={classes.cardBrand}>
            CareLink
          </Typography>
          <Typography className={classes.cardCVV}>
            CVV
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <div className={classes.media} style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/chip.png)`,
            }}
          />
          <div style={{ marginLeft: '10px' }}>
            <Typography className={classes.cardCVV}>
              123
            </Typography>
            <Typography className={classes.cardExpiration}>
              Expires 12/23
            </Typography>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Typography className={classes.cardAddress}>
            CareLink, Inc.
          </Typography>
          <Typography className={classes.cardAddress}>
            123 Main Street
          </Typography>
          <Typography className={classes.cardAddress}>
            Anytown, USA 12345
          </Typography>
          <Typography className={classes.cardPhone}>
            Tel: 1-800-123-4567
          </Typography>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Typography className={classes.cardSignature}>
            Authorized Signature
          </Typography>
        </div>
      </CardContent>

  </Card>
  
  <div className="overlay" onClick={handleFlip}>Show Back</div>
  </>
  );
};

export default VirtualDebitCard;
