import React from 'react';

import classnames from 'classnames';
import styles from './style.css';

const propTypes = {
    attribute: React.PropTypes.object
}

class Guideline extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        let type = (!!this.props.attribute.left)? styles.vertical : styles.horizontal;
        return (
          <div className={classnames(styles.guideline, type)} style={this.props.attribute} />
        );
    }
}

Guideline.propTypes = propTypes;

export default Guideline;
