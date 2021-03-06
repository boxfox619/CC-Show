import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import update from 'react-addons-update';
import AssetItem from './assetItem/AssetItem';
import ActionItem from './assetItem/ActionItem';
import axios from 'axios';

import * as assetsActions from '../../../actions/assets';
import * as uiActions from '../../../actions/ui';

const tabs = [
{name:'추천', filter: 'recommend'},
{name:'신규', filter: 'new'},
{name:'인기', filter: 'popular'},
{name:'찜', filter: 'liked'},
{name:'보관함', filter: 'saved'}]

class AssetStore extends React.Component{

  constructor(props){
    super(props);

    this.state = {activeTab: 0, assets:[]}
    this.selectTab = this.selectTab.bind(this);
    this.getActiveTab = this.getActiveTab.bind(this);
    this.loadItems = this.loadItems.bind(this);
    this.useAsset = this.useAsset.bind(this);
    this.deleteAsset = this.deleteAsset.bind(this);
  }

  render(){
    let renderTabs = (tabs) =>{
      return tabs.map((tab, idx)=>{
        if(idx == this.state.activeTab){
          return (<activetab key={"tab"+idx}>{tab.name}</activetab>)
        }else{
          return (<tab onClick={()=>this.selectTab(tab)} key={"tab"+idx}>{tab.name}</tab>)
        }
      });
    }

    let renderAssetItems = (assets) =>{
      return assets.map((asset)=>{
        return (<AssetItem key={'assetitem'+asset.id} deleteAsset={()=>this.deleteAsset(asset.id)} useAsset={()=>this.useAsset(asset.id)} id={asset.id} title={asset.title} subTitle={asset.user} star={asset.star} thumbnail={asset.thumbnail}/>)
      });
    }

    let renderActionItem = () => {
      if(this.state.activeTab==tabs.length-1){
        return (<ActionItem img={'/images/ic_add_white.png'} text={'새 에셋 만들기'} onClick={()=>this.props.toggleAssetEditor()}/>);
      }
    }

    return (
      <div className={this.props.className}>
        <header>
          <h1>ASSET STORE</h1>
          <tabholder>
            {renderTabs(tabs)}
          </tabholder>
        </header>
        <content>
          <div style={{'padding': '20px 2.5%'}}>
            {renderAssetItems(this.state.assets)}
            {renderActionItem()}
          </div>
        </content>
      </div>
    );
  }

  useAsset(id){
    this.props.toggleAssetStore();
    this.props.createCustomAsset(id);
  }

  componentDidMount(){
      this.loadItems(tabs[0].filter);
  }

  selectTab(tab){
    let index = tabs.findIndex((obj => obj.name == tab.name));
    this.setState(
      {
        ...this.state,
        activeTab: index
      }
    );
    this.loadItems(tabs[index].filter);
  }

  loadItems(filter){
    axios.get('/store/assets?filter='+filter).then(response => {
      this.setState({
        ...this.state,
        assets: response.data
      });
    });
  }

  deleteAsset(assetID){
    axios.get('/store/simple/delete/?id='+assetID).then(response => {
      this.loadItems(tabs[this.state.activeTab].filter);
    });
  }

  getActiveTab(){

  }
}

const mapStateToProps = (state) => {
  return {
    visible: state.ui.visibleAssetStore
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...assetsActions, ...uiActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetStore);
