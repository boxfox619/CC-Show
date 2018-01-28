import React from 'react';
import styles from './styles.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Asset from 'components/Asset';
import AssetRenderer from 'components/assetRenderer';
import * as assetTypes from 'services/editor/asset/assetTypes';
import domtoimage from 'dom-to-image';
import MonacoEditor from './MonacoEditor';

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

const propTypes = {
  onChangeJs: React.PropTypes.func.isRequired,
  onChangeCss: React.PropTypes.func.isRequired,
  onChangeHtml: React.PropTypes.func.isRequired
}

class AssetEditor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      html : '',
      css : '',
      js : '',
      selectedAsset: undefined,
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

    this.htmlHandler = this.htmlHandler.bind(this);
    this.cssHandler = this.cssHandler.bind(this);
    this.jsHandler = this.jsHandler.bind(this);

    this.assetSelected = this.assetSelected.bind(this);
    this.assetDeselected = this.assetDeselected.bind(this);
    this.setAssetXY = this.setAssetXY.bind(this);
    this.setAttributes = this.setAttributes.bind(this);

    // this.submit = this.submit.bind(this);
  }


  render(){
    return (
      <div className={this.props.className}>
        <div className = {styles.content}>
          <div className = {styles.code}>
            <div className = {styles.codeArea}>
              <div className = {styles.topArea}>
                <span className = {styles.topLan}>HTML</span>
              </div>
              <MonacoEditor codeType={'html'} onChange = {this.htmlHandler} value = {this.state.html}/>
            </div>
            <div className = {styles.codeArea}>
              <div className = {styles.topArea}>
                <span className = {styles.topLan}>CSS</span>
              </div>
              <MonacoEditor codeType={'css'} onChange = {this.cssHandler} value = {this.state.css} />

            </div>
            <div className = {styles.codeArea}>
              <div className = {styles.topArea}>
                <span className = {styles.topLan}>JS</span>
              </div>
              <MonacoEditor codeType={'javascript'} onChange = {this.jsHandler} value = {this.state.js} />

            </div>
          </div>

          <div className = {styles.preview}>
            <div className = {styles.preTop}>
              <span className = {styles.preLan}>PREVIEW</span>
            </div>


          <AssetRenderer
            className={styles.previewArea}
            assets={[{...this.state.previewAsset, value: this.state.css + this.state.html + this.state.js}]}
            selectedAsset={this.state.selectedAsset}
            assetSelected={this.assetSelected}
            assetDeselected={this.assetDeselected}
            setAssetXY={this.setAssetXY}
            setAttributes={this.setAttributes}
            setAssetValue={this.setAssetValue}/>
          </div>
        </div>
      </div>
    );
    document.getElementById('Editor');
  }
  assetSelected(){
    this.setState({selectedAsset:0});
  }
  assetDeselected(){
    this.setState({selectedAsset:undefined});
  }
  setAssetXY(x, y){
    this.setState(
      {previewAsset:{
        ...this.state.previewAsset,
        x,
        y
      }}
    );
  }

  setAttributes(attrs){
    let asset = this.state.previewAsset;
    Object.keys(attrs).map(function (key, index) {
      asset[key] = attrs[key];
    });
    this.setState({previewAsset:asset});
  }

  setAssetValue(id, value){
    this.setState(
      {previewAsset:{
        ...this.state.previewAsset,
        value
      }}
    );
  }

  htmlHandler(currentText) {
    var node = document.getElementById('preview').childNodes[0]
      this.setState({
      html: currentText
    });
    this.props.onChangeHtml(currentText);
  }
  cssHandler(currentText) {
      this.setState({
      css: '<style>'+currentText+'</style>'
    });
    this.props.onChangeCSS(currentText);
  }
  jsHandler(currentText) {
      this.setState({
      js: '<script>' + currentText + '</script>'
    });
    this.props.onChangeJs(currentText);
  }
}

export default AssetEditor;
