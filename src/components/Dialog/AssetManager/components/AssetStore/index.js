import React from 'react';
import AssetItem from './components/AssetItem';
import ActionItem from './components/ActionItem';

import * as Request from '../../services/request';

const tabs = [
    {name: '추천', filter: 'recommend'},
    {name: '신규', filter: 'new'},
    {name: '인기', filter: 'popular'},
    {name: '찜', filter: 'liked'},
    {name: '보관함', filter: 'saved'}];

const propTypes = {
    onCloseDialog: React.PropTypes.func.isRequired,
    onCreateCustomAsset: React.PropTypes.func.isRequired,
    onLookupAssetDetail: React.PropTypes.func.isRequired
}

const renderActionItem = (onClick) => {
    if (this.state.activeTab == tabs.length - 1) {
        return (
            <ActionItem
                img={'/images/ic_add_white.png'}
                text={'새 에셋 만들기'}
                onClick={onClick}
            />);
    }
}

const renderAssetItems = () => {
    console.log(this);
    return this.state.assets.map((asset) => {
        return (
            <AssetItem
                key={'assetitem' + asset.id}
                onDelete={() => this.deleteAsset(asset.id)}
                onClick={() => this.props.onLookupAssetDetail(asset)}
                onUse={() => this.useAsset(asset.id)}
                id={asset.id}
                title={asset.title}
                subTitle={asset.user}
                star={asset.star}
                thumbnail={asset.thumbnail}
            />)
    });
}

const renderTabs = () => {
    return tabs.map((tab, idx) => {
        if (idx == this.state.activeTab) {
            return (<activetab key={"tab" + idx}>{tab.name}</activetab>)
        } else {
            return (<tab onClick={() => this.selectTab(tab)} key={"tab" + idx}>{tab.name}</tab>)
        }
    });
}

class AssetStore extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0,
            assets: []
        }

        this.selectTab = this.selectTab.bind(this);
        this.getActiveTab = this.getActiveTab.bind(this);
        this.loadItems = this.loadItems.bind(this);
        this.useAsset = this.useAsset.bind(this);
        this.deleteAsset = this.deleteAsset.bind(this);
    }

    render() {
        let _self = this;
        return (
            <div className={this.props.className}>
                <header>
                    <h1>ASSET STORE</h1>
                    <tabholder>
                        {renderTabs.call(_self)}
                    </tabholder>
                </header>
                <content>
                    <div style={{'padding': '20px 2.5%'}}>
                        {renderAssetItems.call(_self)}
                        {renderActionItem.call(_self)}
                    </div>
                </content>
            </div>
        );
    }

    useAsset(id) {
        this.props.onCloseDialog();
        this.props.onCreateCustomAsset(id);
    }

    deleteAsset(id) {
        let _self = this;
        Request.deleteAsset(id, function (result) {
            _self.loadItems(tabs[_self.state.activeTab].filter);
        })
    }

    componentDidMount() {
        this.loadItems(tabs[0].filter);
    }

    selectTab(tab) {
        let index = tabs.findIndex((obj => obj.name == tab.name));
        this.setState({activeTab: index});
        this.loadItems(tabs[index].filter);
    }

    loadItems(filter) {
        let _self = this;
        Request.load(filter, function (response) {
            _self.setState({
                ..._self.state,
                assets: response.data
            });
        });
    }

    getActiveTab() {

    }
}

AssetStore.propTypes = propTypes;

export default AssetStore;
