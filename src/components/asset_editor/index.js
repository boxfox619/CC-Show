import React from 'react';
import ProgressDialog from '../editor/progressDialog/ProgressDialog';
import { bindActionCreators } from 'redux';
import CodeEditorItem from './Code';
import * as assetTypes from '../../assetTypes'
import axios from 'axios';

import styles from './style.css';


class AssetEditor extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      activeTab: 0,
      title: '',
      openToStore: false,
      content: ''
    };

    this.state = {showId: undefined};
  }

  render(){
    return (
      <div ref={root => {this.root = root}}>
      <div className={styles.attribute_editor}>
      </div>
        <CodeEditorItem/>
      </div>
    );
  }
}

export default AssetEditor;
