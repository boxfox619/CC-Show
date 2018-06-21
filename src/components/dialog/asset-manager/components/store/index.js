import React from 'react';
import AssetItem from './components/action-item/index';
import ActionItem from './components/asset-item/index';

import * as Request from '../../services/request';
import DialogHeader from '../header';

const tabs = [
  {name: '추천', filter: 'recommend'},
  {name: '신규', filter: 'new'},
  {name: '인기', filter: 'popular'},
  {name: '찜', filter: 'liked'},
  {name: '보관함', filter: 'saved'}];

const propTypes = {
  className: React.PropTypes.string.isRequired,
  closeDialog: React.PropTypes.func.isRequired,
  createCustomAsset: React.PropTypes.func.isRequired
};

function renderActionItem(_self) {
  if (_self.state.activeTab == tabs.length - 1) {
    return (
      <ActionItem
        img={'/images/ic_add_white.png'}
        onClick={_self.props.createCustomAsset}
        text={'새 에셋 만들기'}
      />);
  }
}

function renderAssetItems(_self) {
  return _self.state.assets.map((asset) => {
    return (
      <AssetItem
        id={asset.id}
        key={'assetitem' + asset.id}
        onClick={() => _self.props.onLookupAssetDetail(asset)}
        onDelete={() => _self.deleteAsset(asset.id)}
        onUse={() => _self.useAsset(asset.id)}
        star={asset.star}
        subTitle={asset.user}
        thumbnail={asset.thumbnail}
        title={asset.title}
      />);
  });
}

class AssetStore extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      assets: []
    };

    this.selectTab = this.selectTab.bind(this);
    this.loadItems = this.loadItems.bind(this);
    this.useAsset = this.useAsset.bind(this);
    this.deleteAsset = this.deleteAsset.bind(this);
  }

  render() {
    return (
      <div className={this.props.className}>
        <DialogHeader
          onTabSelected={this.selectTab}
          tabs={tabs.map((val) => {
            return val.name;
          })}
          title={'ASSET STORE'}
        />
        <content>
          <div style={{'padding': '20px 2.5%'}}>
            {renderAssetItems(this)}
            {renderActionItem(this)}
          </div>
        </content>
      </div>
    );
  }

  useAsset(id) {
    this.props.closeDialog();
    this.props.createCustomAsset(id);
  }

  deleteAsset(id) {
    let _self = this;
    Request.deleteAsset(id, function () {
      _self.loadItems(tabs[_self.state.activeTab].filter);
    });
  }

  componentDidMount() {
    this.loadItems(tabs[0].filter);
  }

  selectTab(tab, idx) {
    this.setState({activeTab: idx});
    this.loadItems(tabs[idx].filter);
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
}

AssetStore.propTypes = propTypes;

export default AssetStore;
