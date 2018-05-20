import React from 'react';
import styles from './style.css';
import Label from '../Label';

const propTypes = {
    text: React.PropTypes.string.isRequired,
};

class Label extends React.Component {
    constructor(prop) {
        super(prop);
    };

    render() {
        return (
          <div style={styles.label}>
              {this.props.text}
          </div>
        );
    }
}
Label.propTypes = propTypes;

export default Label;
