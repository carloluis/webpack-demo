import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { more: false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({ more: !state.more }));
    }
    render() {
        const { title, description } = this.props;
        return (
            <div className={styles.container} onClick={this.handleClick}>
                <h2>{title}</h2>
                {this.state.more && <div className={styles.description}>{description}</div>}
            </div>
        );
    }
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Card;
