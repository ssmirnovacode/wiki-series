import React from 'react';
import Content from '../content/content';
import useStyles from './styles';

const Home = ({defQuery}) => {

  const classes = useStyles();  

    return(
        <section className={classes.container}>
          <h2 className={classes.title}>Trending TV shows</h2>
          <Content home defQuery={defQuery} page='shows' />
          <h2 className={classes.title}>Trending actors</h2>
          <Content home defQuery={defQuery} page='people' />
        </section>
    )
}
  
export default Home;