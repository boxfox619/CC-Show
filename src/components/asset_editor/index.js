import React from 'react';
import ProgressDialog from '../editor/progressDialog/ProgressDialog';
import { bindActionCreators } from 'redux';
import CodeEditorItem from './Code';
import * as assetTypes from '../../assetTypes'
import axios from 'axios';

import styles from './style.css';

import Title from './title';
import Toggle from './toggle';


class AssetEditor extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: '',
      openToStore: false,
      content: ''
    };
    this.titleHandle = this.titleHandle.bind(this);
    this.openToStoreHandle = this.openToStoreHandle.bind(this);
  }

  titleHandle(e){
    this.setState({title:e.target.value});
  }
  openToStoreHandle(e){
    this.setState({openToStore: e.target.checked});
  }

  render(){
    let headerHeight = document.getElementsByTagName('header')[0].scrollHeight;
    return (
      <div style={{'marginTop':headerHeight}} ref={root => {this.root = root}}>
      <div className={styles.attribute_editor}>
      <Title title={this.state.title} onChange={this.titleHandle}/>
      <Toggle text={'스토어에 공개'} checked={this.state.openToStore} onChange={this.openToStoreHandle}/>
      </div>
        <CodeEditorItem/>
      </div>
    );
  }
}

export default AssetEditor;
