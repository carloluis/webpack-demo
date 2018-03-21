import React from 'react';
import PropTypes from 'prop-types';
import Cards from '../cards/Cards';
import GitHub from '../github/GitHub';
import styles from './App.scss';

const App = ({ title }) => (
    <div className={styles.container}>
        <GitHub />
        <h1>{title}</h1>
        <Cards />
    </div>
);

App.propTypes = {
    title: PropTypes.string.isRequired
};

export default App;
