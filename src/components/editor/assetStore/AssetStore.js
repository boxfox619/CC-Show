import React from 'react';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import AssetItem from './assetItem/AssetItem';

const tabs = [
{name:'추천'},
{name:'신규'},
{name:'인기'},
{name:'찜'},
{name:'보관함'}]

class AssetStore extends React.Component{

  constructor(props){
    super(props);

    this.state = {activeTab: 0}
    this.selectTab = this.selectTab.bind(this);
    this.getActiveTab = this.getActiveTab.bind(this);
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
            <AssetItem />
            <AssetItem />
            <AssetItem />
            <AssetItem />
            <AssetItem />
            <AssetItem />
            <AssetItem />
            <AssetItem />
            <AssetItem />
          </div>
        </content>
      </div>
    );
  }

  selectTab(tab){
    let index = tabs.findIndex((obj => obj.name == tab.name));
    this.setState(
      {
        ...this.state,
        activeTab: index
      }
    );
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

export default connect(mapStateToProps)(AssetStore);
