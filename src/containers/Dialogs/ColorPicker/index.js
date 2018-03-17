import React from 'react';
import {SketchPicker} from 'react-color';
import * as uiActions from 'services/ui/actions';
import * as assetsActions from 'services/editor/asset/actions';
import {colorPicker} from 'services/ui/colorPicker';

import styles from './style.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.className} style={{'width': 'auto', 'height': 'auto'}}>
                <SketchPicker
                    style={{'box-shadow': 'none'}} color={this.props.color}
                    onChangeComplete={color => this.props.setSelectedAssetStyle(this.props.colorType, color.hex)}
                />
                <div className={styles.closer} onClick={this.props.releaseDialog}>닫기</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.ui.colorPicker.defaultColor,
        colorType: state.ui.colorPicker.styleClass
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...assetsActions, ...uiActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
