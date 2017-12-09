import React from 'react';
import styles from './styles.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Asset from '../../editor/assets/Asset';
import * as assetTypes from '../../../assetTypes';
import domtoimage from 'dom-to-image';
import CodeEditor from './CodeEditor';

import * as actions from '../../../actions/asseteditor';
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

const defaultProps = {
  assetData: React.PropTypes.object
}

class AssetEditor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
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

    this.htmlHandler = this.htmlHandler.bind(this);
    this.cssHandler = this.cssHandler.bind(this);
    this.jsHandler = this.jsHandler.bind(this);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseRelese = this.handleMouseRelese.bind(this);

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
              <CodeEditor codeType={'html'} onChange = {this.htmlHandler} value = {this.props.htmlsource}/>
            </div>
            <div className = {styles.codeArea}>
              <div className = {styles.topArea}>
                <span className = {styles.topLan}>CSS</span>
              </div>
              <CodeEditor codeType={'css'} onChange = {this.cssHandler} value = {this.props.csssource} />

            </div>
            <div className = {styles.codeArea}>
              <div className = {styles.topArea}>
                <span className = {styles.topLan}>JS</span>
              </div>
              <CodeEditor codeType={'javascript'} onChange = {this.jsHandler} value = {this.props.jssource} />

            </div>
          </div>

          <div className = {styles.preview}>
            <div className = {styles.preTop}>
              <span className = {styles.preLan}>PREVIEW</span>
            </div>
            <div className = {styles.previewArea}
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseRelese}
            onMouseLeave={this.handleMouseRelese}>
              <Asset id={'previewAsset'} isSelected={this.state.mouseAction != 'none'} handleValueChange={()=>{}} attribute={{...this.state.previewAsset, value: this.state.css + this.state.html + this.state.js}}/>
            </div>
          </div>
        </div>
      </div>
    );
    document.getElementById('Editor');
  }


  handleMouseMove(e){
    if(this.state.mouseAction != 'none'&& this.mouseDowned){
      if(this.state.mouseAction=='move'){
        let x = e.pageX;
        let y = e.pageY;
        let afterX = parseInt((this.state.previewAsset.x)) + (x - this.xInElement) +'px';
        let afterY = parseInt((this.state.previewAsset.y)) + (y - this.yInElement) + 'px';
        this.xInElement = x;
        this.yInElement = y;
        this.setState({previewAsset: {...this.state.previewAsset, x: afterX, y: afterY}});
      } else if(this.state.mouseAction=='resize'){
        let devX = (this.resizeTarget.includes('left'))? this.xInElement - e.pageX : e.pageX - this.xInElement;
        let devY = (this.resizeTarget.includes('top'))? this.yInElement - e.pageY : e.pageY - this.yInElement;
        let currentX = parseInt(this.state.previewAsset.x);
        let currentY = parseInt(this.state.previewAsset.y);
        let currentWidth = parseInt(this.state.previewAsset.width);
        let currentHeight = parseInt(this.state.previewAsset.height);
        let afterHeight = currentHeight+devY+'px';
        let afterWidth = currentWidth+devX+'px';
        let afterX = currentX-devX+'px';
        let afterY = currentY-devY+'px';
        if(parseInt(afterWidth)<5||parseInt(afterHeight)<5){
          return;
        }
        let modifyAttrs;
        switch(this.resizeTarget){
          case 'topleft':
            modifyAttrs = {'height':afterHeight, 'y':afterY, 'width':afterWidth, 'x':afterX};
            break;
          case 'topright':
            modifyAttrs = {'height':afterHeight, 'y':afterY, 'width':afterWidth};
            break;
          case 'bottomleft':
            modifyAttrs = {'height':afterHeight, 'width':afterWidth, 'x':afterX};
            break;
          case 'bottomright':
            modifyAttrs = {'height':afterHeight, 'width':afterWidth};
            break;
          case 'top':
            modifyAttrs = {'height':afterHeight, 'y':afterY};
            break;
          case 'left':
            modifyAttrs = {'width':afterWidth, 'x':afterX};
            break;
          case 'bottom':
            modifyAttrs = {'height':afterHeight};
            break;
          case 'right':
            modifyAttrs = {'width':afterWidth};
            break;
        }
        this.setState({previewAsset: {...this.state.previewAsset, ...modifyAttrs}});
        this.xInElement = e.pageX;
        this.yInElement = e.pageY;
      }
    }
  }

  handleMouseDown(e){
    document.activeElement.blur();
    e.target.focus();
    this.mouseDowned = true;
    if(!!getAssetNode('ASSET', e.target)){
        this.setState({mouseAction: 'move'});
        if(e.target.tagName=='SELECTORDOT'||e.target.tagName=='SELECTORLINE'){
            this.setState({mouseAction: 'resize'});
          this.resizeTarget = e.target.getAttribute('target');
        }
        this.xInElement = e.pageX;
        this.yInElement = e.pageY;
    }else{
      this.setState({mouseAction: 'none'});
    }
    e.preventDefault();
  }

  handleMouseRelese(e){
    this.mouseDowned = false;
  }

  htmlHandler(currentText) {
    var node = document.getElementById('preview').childNodes[0]
      this.setState({
      html: currentText
    });
    this.props.setHtml(currentText);
  }
  cssHandler(currentText) {
      this.setState({
      css: '<style>'+currentText+'</style>'
    });
    this.props.setCSS(currentText);
  }
  jsHandler(currentText) {
      this.setState({
      js: '<script>' + currentText + '</script>'
    });
    this.props.setJS(currentText);
  }
}

  var mapStateToProps = (state) => {
  return {
    visible : state.ui.visibleAssetEditor,
    htmlsource : state.asseteditor.htmlsource,
    csssource : state.asseteditor.csssource,
    jssource : state.asseteditor.jssource
  }
}

  var mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...actions}, dispatch);
  }



export default connect(mapStateToProps, mapDispatchToProps)(AssetEditor);
