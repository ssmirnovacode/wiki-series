import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setQuery} from '../../redux/actions';
import Content from '../content/content';

const Home = (props) => {

  const {setQuery} = props;

    useEffect( () => {
        setQuery('black');
        console.log('Initial query set');
    }, [setQuery])

    return(
        <section>
        <Content home page='shows' />
        <Content home page='people' />
        </section>
    )
}

const mapStateToProps = (state) => ({
    items: state.items,
    query: state.query
  });

  const mapDispatchToProps = {
    setQuery
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);