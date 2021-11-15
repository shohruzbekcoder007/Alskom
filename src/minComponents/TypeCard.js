import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 230,
    margin: "10px"
  }
});

export default function TypeCard({textTitle,textBody}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        
        <Typography
            variant="h6"
            component="p"
            style={{lineHeight: 1,marginBottom: 5}}
        >
          {textTitle}
        </Typography>
        <Typography color="textSecondary">
          {textBody}
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}
