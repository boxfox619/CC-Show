import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import styles from './style.css';

export default class Guideline extends Component {

  static propTypes = {
    attribute: PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  render() {
    let type = (!!this.props.attribute.height) ? styles.vertical : styles.horizontal;
    return (
        <div className={classnames(styles.guideline, type)}
             style={this.props.attribute}/>
    );
  }
}
