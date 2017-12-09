import React from 'react';
import ProgressDialog from '../editor/progressDialog/ProgressDialog';
import { bindActionCreators } from 'redux';
import AssetEditorItem from './AssetEditorItem';
import CodeEditorItem from './Code/CodeEditor';
import axios from 'axios';

import styles from './style.css';


class AssetEditor extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      activeTab: 0,
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

    this.state = {showId: undefined};
  }

  render(){
    return (
      <div ref={root => {this.root = root}} >
        <AssetEditorItem />
      </div>
    );
  }
}

export default AssetEditor;
