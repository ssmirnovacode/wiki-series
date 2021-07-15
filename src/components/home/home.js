import React from 'react';
import Content from '../content/content';
import useStyles from './styles';
import PageContext from '../../context/PageContext';

const Home = ({defQuery}) => {

  const classes = useStyles();  

    return(
        <section className={classes.container}>
          <h2 className={classes.title}>Trending TV shows</h2>
          <PageContext.Provider value={'shows'}>
            <Content home defQuery={defQuery}/>
          </PageContext.Provider>
          <h2 className={classes.title}>Trending actors</h2>
          <PageContext.Provider value={'people'}>
            <Content home defQuery={defQuery} />
          </PageContext.Provider>
        </section>
    )
}
  
export default Home;