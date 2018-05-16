import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AssetDetail from './components/Detail';
import AssetStore from './components/Store';

import * as assetsActions from 'services/editor/asset/actions';
import * as uiActions from 'services/ui/actions';
import Editor from "./components/Editor";

const propTypes = {
  className: React.PropTypes.string.isRequired,
  toggleAssetManager: React.PropTypes.func.isRequired,
  createCustomAsset: React.PropTypes.func.isRequired
}

class AssetManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lookupAsset: null,
            mode: 'editor'
        }
        this.lookupAssetDetail = this.lookupAssetDetail.bind(this);
    }

    render() {
        let renderContent = () => {
            if (this.state.mode === 'default') {
                if (!this.state.lookupAsset) {
                    return (
                      <AssetStore
                        onCloseDialog={this.props.toggleAssetManager}
                        onCreateCustomAsset={this.props.createCustomAsset}
                        onLookupAssetDetail={this.lookupAssetDetail}
                        />);
                } else {
                    return (<AssetDetail asset={this.state.lookupAsset} />);
                }
            } else {
                return (<Editor />)
            }
        }
        return (
          <div className={this.props.className}>
            {renderContent()}
          </div>
        );
    }

    lookupAssetDetail(asset) {
        console.log('adasas'+ asset);
        this.setState({lookupAsset: asset});
    }

}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...assetsActions, ...uiActions}, dispatch);
}

AssetManager.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AssetManager);
