import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AssetDetail from './components/Detail';
import AssetStore from './components/Store';

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
        console.log(this.state.lookupAsset);
        let renderContent = () => {
            if (!this.state.lookupAsset) {
                return (
                    <AssetStore
                        onCloseDialog={this.props.toggleAssetManager}
                        onCreateCustomAsset={this.props.createCustomAsset}
                        onLookupAssetDetail={this.lookupAssetDetail}
                    />);
            } else {
                return (<AssetDetail asset={this.state.lookupAsset}/>);
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

export default connect(mapStateToProps, mapDispatchToProps)(AssetManager);
