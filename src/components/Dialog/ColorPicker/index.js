import React from 'react';
import {SketchPicker} from 'react-color';
import * as uiActions from 'services/ui/actions';
import * as assetsActions from 'services/editor/asset/actions';
import {colorPicker} from 'services/ui/colorPicker';

import styles from './style.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const propTypes = {
  className: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  colorType: React.PropTypes.string.isRequired,
  releaseDialog: React.PropTypes.func.isRequired,
  setSelectedAssetStyle: React.PropTypes.func.isRequired
}

class ColorPicker extends React.Component {

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

ColorPicker.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
