import React, {useState, useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as Constants from '../Constants';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    cursor: 'pointer'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const Dashboard = () => {
  const classes = useStyles();
  const [contents, setContents] = useState([]);
  
  const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit">
          Enterprise
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  useEffect(() => {
    axios.get(Constants.ENDPOINT_CHALLENGE_LIST)
    .then(function (response) {
      console.log(response);  
      setContents(response.data.body);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {
              contents.map((content) => 
              (
                <Grid item key={content.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      onClick={() => {console.log("Click on card")}}
                      className={classes.cardMedia}
                      image={content.imageUrl}
                      title={content.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {content.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => {console.log("Click on card")}} size="small" color="primary">
                        Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          By Ismael Nascimento
        </Typography>
        <Copyright />
      </footer>
    </Fragment>
  );
};

export default Dashboard;