import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from '../../images/Frame-1.png';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Book({book}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="byke"
          height="150px"
          width="150px"
          image={Img}
          title="byke"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Bike
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Button size="small" color="primary">
         Book Now
        </Button>
      </CardActions>
    </Card>
  );
}


