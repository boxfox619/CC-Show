import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AssetDetail from './components/assetDetail';
import AssetStore from './components/AssetStore';

import * as assetsActions from 'services/editor/asset/actions';
import * as uiActions from 'services/ui/actions';

class AssetManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lookupAsset: null
        }

        this.lookupAssetDetail = this.lookupAssetDetail.bind(this);
    }

    render() {

        return (
            <div className={this.props.className}>
                <AssetStore
                    onCloseDialog={this.props.toggleAssetManager}
                    onCreateCustomAsset={this.props.createCustomAsset}
                    onLookupAssetDetail={this.lookupAssetDetail}
                />
            </div>
        );
    }

    lookupAssetDetail(asset) {
        this.setState({lookupAsset: asset});
    }

}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...assetsActions, ...uiActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetManager);
