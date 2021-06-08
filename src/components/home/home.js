import React from 'react';
import Content from '../content/content';
import useStyles from './styles';

const Home = (props) => {

  const classes = useStyles();

    return(
        <section className={classes.container}>
          <h2 className={classes.title}>Trending TV shows</h2>
          <Content home query={props.query} page='shows' />
          <h2 className={classes.title}>Trending actors</h2>
          <Content home query={props.query} page='people' />
        </section>
    )
}
  
export default Home;