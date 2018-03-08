import React from 'react';

import styles from './style.css';

import assetEditorApi from './services/api';

import CodeEditor from './components/CodeEditor';
import TextInput from './components/textInput';
import Toggle from './components/Toggle';


class AssetEditor extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: '',
      openToStore: false,
      content: ''
    };
    this.codeHandle = this.codeHandle.bind(this);
    this.saveAsset = this.saveAsset.bind(this);
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
        <TextInput label={'제목'} text={this.state.title} onChange={this.titleHandle}/>
        <TextInput label={'태그'} text={this.state.title} onChange={this.titleHandle}/>
        <Toggle text={'스토어에 공개'} checked={this.state.openToStore} onChange={this.openToStoreHandle}/>
      </div>
        <CodeEditor
          onChangeJs={code=>this.codeHandle('js', code)}
          onChangeCss={code=>this.codeHandle('css', code)}
          onChangeHtml={code=>this.codeHandle('html', code)}
        />
      </div>
    );
  }

  codeHandle(type, code){
    this.setState({[type] : code});
  }

  saveAsset(){
    assetEditorApi.upload(this.state, function(result){

    });
  }

    componentDidMount(){
      document.getElementById('save').addEventListener('click', this.saveAsset);
    }
}

export default AssetEditor;
