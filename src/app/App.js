import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';

const App = ({ title }) => (
    <div className={styles.container}>
        <h1>{title}</h1>
    </div>
);

App.propTypes = {
    title: PropTypes.string.isRequired
};

export default App;
