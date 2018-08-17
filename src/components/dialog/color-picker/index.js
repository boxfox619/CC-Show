import React from 'react';
import {SketchPicker} from 'react-color';
import * as uiActions from 'reducers/ui/ui.actions';
import * as assetsActions from 'reducers/editor/asset/asset.actions';

import styles from './style.css';
import modalStyles from '../style.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const propTypes = {
  color: React.PropTypes.string.isRequired,
  colorType: React.PropTypes.string.isRequired,
  releaseDialog: React.PropTypes.func.isRequired,
  setSelectedAssetStyle: React.PropTypes.func.isRequired
}

class ColorPicker extends React.Component {

  render() {
    return (
      <div className={modalStyles.modal}>
        <SketchPicker
          color={this.props.color}
          onChangeComplete={color => this.props.setSelectedAssetStyle(this.props.colorType, color.hex)}
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
