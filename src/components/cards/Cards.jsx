import React from 'react';
import Card from './card/Card';

const Cards = () => (
    <React.Fragment>
        <Card title="Entrypoints" description="Starting points to create the dependency graphs" />
        <Card title="Mode" description="New property to reduce the required configuration for an useful build" />
        <Card title="Loaders" description="Preprocessing files..." />
        <Card title="Plugins" description="Does anything else that a loader cannot do" />
    </React.Fragment>
);

export default Cards;
