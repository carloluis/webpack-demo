import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import styles from './App.scss';

const App = ({ title }) => (
    <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.cards}>
            <Card title="Entrypoints">
                Starting points to create the dependency graphs
            </Card>
            <Card title="Mode">
                New property to reduce the required configuration for an useful build
            </Card>
            <Card title="Loaders" children="..." />
            <Card title="Plugins" children="..." />
        </div>
    </div>
);

App.propTypes = {
    title: PropTypes.string.isRequired
};

export default App;
