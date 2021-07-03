import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles(() => ({
  cardContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
  },
  title: {
    fontSize: 25,
  },
  author: {
    textAlign: 'right',
    marginBottom: 12,
  },
  actions: {
    justifyContent:'space-between'
  }
}));

export const QuoteBox = () => {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs' className={classes.cardContainer}>
      <Card id='quote-box' className={classes.card}>
        <CardContent>
          <Typography
            id='text'
            className={classes.title}
            color='textPrimary'
            gutterBottom
          >
            <FormatQuoteIcon /> Your time is limited, so don’t waste it living
            someone else’s life.
          </Typography>
          <Typography
            id='author'
            className={classes.author}
            color='textSecondary'
          >
            - Steve Jobs
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Link
            id='tweet-quote'
            size='small'
            href='https://twitter.com/intent/tweet'
          >
            <TwitterIcon />
          </Link>
          <Button id='new-quote' size='small'>
            New quote
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
