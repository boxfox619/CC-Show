import React from 'react';
import styles from './AssetEditor.css';
import Thumbnail from './Thumbnail';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AssetEditorItem from './Details/AssetEditorItem';
import CodeEditorItem from './Code/CodeEditor';
import Asset from '../assets/Asset';
import * as assetTypes from '../../../assetTypes';

import domtoimage from 'dom-to-image';
// import CodeMirror from 'react-codemirror';
// import jsMode from 'codemirror/mode/javascript/javascript';
// import htmlMode from 'codemirror/mode/htmlmixed/htmlmixed';
// import cssMode from 'codemirror/mode/css/css';
import * as uiActions from '../../../actions/ui';


function getAssetNode(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node.tagName == parent) {
             return node;
         }
         node = node.parentNode;
     }
     return null;
}

function filter (node) {
    return (node.tagName !== 'SELECTORLINE'&&node.tagName !== 'SELECTORDOT');
}


const tabs = [
{name:'Details'},
{name:'Code'}
];

const defaultProps = {
  assetData: React.PropTypes.object
}

class AssetEditor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeTab: 1,
      id: '',
      title: '',
      openToStore: false,
      thumbnail: '',
      images: [],
      content: '',
      price: 0,
      license: '',
      value : '',
      nowMode : '',
      code : '',
      html : '',
      css : '',
      js : '',
      mouseAction: 'none',
      previewAsset:{
        id: 'preview',
        type: assetTypes.TYPE_PREVIEW,
        value: '',
        height: '50px',
        width: '50px',
        x: '0px',
        y: '0px',
        angle: '0',
        style: {}
      }
    };

    this.selectTab = this.selectTab.bind(this);

   }


  render(){
    console.log(this.state.activeTab);

    let renderTabs = (tabs) =>{
      return tabs.map((tab,idx)=>{
        if(idx == this.state.activeTab){
          return (<activetab key={"tab"+idx}>{tab.name}</activetab>)
        }else{
          return (<tab onClick={()=>this.selectTab(tab)} key={"tab"+idx}>{tab.name}</tab>)          
        }
      });
    }

    let renderEditors = () =>{
      if(this.state.activeTab==0){
        if(!!this.state.id){
          return(
            <div>
            <Thumbnail id={this.state.id} />

            </div>
          );
      }else{
      }
    }
  }
  let renderDetailsItems = () => {
    
    if(this.state.activeTab == 0){
      return (<AssetEditorItem />);
    }

    if(this.state.activeTab == 1){
      return(<CodeEditorItem />);
    }
   
  }
    return (
      <div className={this.props.className}>
        <header>
          <h1>ASSET EDITOR</h1>
          <tabholder>
            {renderTabs(tabs)}
          </tabholder>
      
        
        </header>
          {renderDetailsItems()}
          {/* <AssetEditorItem /> */}

    </div>

        );
      
      }
      selectTab(tab){
        // this.loadItems(tabs[index].filter);
  
       };
   
    }

   
    export default AssetEditor;