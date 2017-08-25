import React from 'react';
import styles from './AssetEditor.css';
import Thumbnail from './Thumbnail';
import axios from 'axios';

const tabs = [
{name:'Details'},
{name:'Code'}];

const defaultProps = {
  assetData: React.PropTypes.object
}

class AssetStore extends React.Component{

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
            <Thumbnail id={this.state.id} />
          )
      }else{
      }
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
        <content>
          <div style={{'padding': '20px 2.5%'}}>
            {renderEditors()}
            {this.state.content}
          </div>
        </content>
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
    this.loadItems(tabs[index].filter);
  }

  getActiveTab(){

  }
}
export default AssetStore;
