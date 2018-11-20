import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SketchPicker} from 'react-color';

import styles from './style.css';
import modalStyles from '../style.css';

export default class ColorPicker extends Component {

    static propTypes = {
        color: PropTypes.string.isRequired,
        releaseDialog: PropTypes.func.isRequired,
        colorSelected: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className={modalStyles.modal}>
                <SketchPicker
                    color={this.props.color}
                    onChangeComplete={color => this.props.colorSelected(color.hex)}
                    style={{'box-shadow': 'none'}}
                />
                <div className={styles.closer}
                     onClick={this.props.releaseDialog}>
                    닫기
                </div>
            </div>
        )
    }
}