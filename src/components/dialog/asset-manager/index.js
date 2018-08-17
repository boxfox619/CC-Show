import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AssetDetail from './components/detail';
import AssetStore from './components/store';
import AssetEditor from './components/editor';

import * as assetsActions from 'services/editor/asset/asset.actions';
import * as uiActions from 'services/ui/ui.actions';
import modalStyles from '../style.css';

const AssetManagerMode = {
  EDITOR : 'editor',
  DEFAULT: 'default'
}

class AssetManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lookupAsset: null,
      mode: AssetManagerMode.DEFAULT
    };

    this.lookupAssetDetail = this.lookupAssetDetail.bind(this);
  }

  render() {
    let renderContent = () => {
      if (this.state.mode === AssetManagerMode.DEFAULT) {
        if (!this.state.lookupAsset) {
          return (
            <AssetStore
              className={this.props.className}
              closeDialog={this.props.toggleAssetManager}
              createCustomAsset={this.props.createCustomAsset}
            />);
        } else {
          return (
            <AssetDetail asset={this.state.lookupAsset}
              closeDialog={this.props.toggleAssetManager}
            />);
        }
      } else if(this.state.mode === AssetManagerMode.EDITOR) {
        return (
          <AssetEditor
            finish={this.setState({mode: AssetManagerMode.DEFAULT})}
          />);
      }
    };
    return (
      <div className={modalStyles.modal}>
        {renderContent()}
      </div>
    );
  }

  lookupAssetDetail(asset) {
    this.setState({lookupAsset: asset});
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...assetsActions, ...uiActions}, dispatch);
};

export default connect(undefined, mapDispatchToProps)(AssetManager);
