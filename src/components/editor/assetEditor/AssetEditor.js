import React from 'react';
import styles from './AssetEditor.css';
import Thumbnail from './Thumbnail';
import axios from 'axios';
import { connect } from 'react-redux';

import CodeMirror from 'react-codemirror';
import jsMode from 'codemirror/mode/javascript/javascript';
import htmlMode from 'codemirror/mode/htmlmixed/htmlmixed';
import cssMode from 'codemirror/mode/css/css';


const tabs = [
// {name:'Details'},
{name:'Code'}];

const defaultProps = {
  assetData: React.PropTypes.object
}

class AssetEditor extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      activeTab:0,
      id: '',
      title: '',
      openToStore: false,
      thumbnail: '',
      images: [],
      content: '',
      price: 0,
      license: ''
    };

    this.selectTab = this.selectTab.bind(this);
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
      return(<CodeEditor />);
    }
  }

    var options = {
      lineNumbers: true,
      // mode: 'javascript'
    };
    return (
      <div className={this.props.className}>
        <header>
          <h1>ASSET EDITOR</h1>
          <tabholder>
            {renderTabs(tabs)}
          </tabholder>
        </header>

        <div className = {styles.content}>
          <div className = {styles.code}>
            <div className = {styles.htmlArea}>
              <div className = {styles.topArea}>
                <span className = {styles.topLan}>HTML</span>
              </div>
              <CodeMirror className={styles.codeEditor} value={'<html><body></body></html>'}  options={{lineNumbers: true, mode: 'htmlmixed'}} />

            </div>
            <div className = {styles.cssArea}>
              <div className = {styles.topArea}>
                <span className = {styles.topLan}>CSS</span>
              </div>
              <div className = {styles.sideBar}></div>
              <CodeMirror className={styles.codeEditor} value={'@import url("something.css");'}  options={{lineNumbers: true, mode: 'css'}} />

            </div>
            <div className = {styles.jsArea}>
              <div className = {styles.topArea}>
                <span className = {styles.topLan}>JS</span>
              </div>
              <CodeMirror className={styles.codeEditor} value={'function hey(){}'}  options={{lineNumbers: true, mode: 'javascript'}} />

            </div>
          </div>

          <div className = {styles.preview}>
            <div className = {styles.preTop}>
              <span className = {styles.preLan}>PREVIEW</span>
            </div>
            <div className = {styles.previewArea}>
              {/* here is preview area */}
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    );
  }

  componentDidMount(){
    if(!(!!this.props.assetData)){
      axios.post('/store/new').then(response => {
        this.setState({
          ...state,
          id: response.data.id
        });
      });
    }else{
      this.setState({
        ...state,
        id: this.props.data.id,
        title: this.props.data.title,
        openToStore: this.props.data.openToStore,
        thumbnail: this.props.data.thumbnail,
        images: this.props.data.images,
        content: this.props.data.content,
        price: this.props.data.price,
        license: this.props.data.license
      });
    }
  }

  selectTab(tab){
    let index = tabs.findIndex((obj => obj.name == tab.name));
    this.setState(
      {
        ...this.state,
        activeTab: index
      }
    );
    // this.loadItems(tabs[index].filter);
    //오류나서 주석해놨어요
  }

  getActiveTab(){

  }
}

const mapStateToProps = (state) => {
  return {
    visible : state.ui.visibleAssetEditor
  }
}

export default connect(mapStateToProps)(AssetEditor);
