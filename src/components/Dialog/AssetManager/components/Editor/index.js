import React from 'react';
import styles from './style.css';
import DialogHeader from 'components/Dialog/components/Header';
import DetailEditor from './components/DetailEditor';

const tabs = ['DETAIL', 'CODE'];

class Editor extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: '',
      tags: [],
      openToStore: false,
      thumbnails: [],
      content: '',
      css: '',
      html: '',
      js: '',
      selectedTab: 0
    };
    this.codeHandle = this.codeHandle.bind(this);
    this.saveAsset = this.saveAsset.bind(this);
    this.titleHandle = this.titleHandle.bind(this);
    this.openToStoreHandle = this.openToStoreHandle.bind(this);
    this.visible = this.visible.bind(this);
    this.onUpdateThumbnail = this.onUpdateThumbnail.bind(this);
    this.selectTab = this.selectTab.bind(this);
  }

  render() {
    return (
      <div>
        <DialogHeader
          onTabSelected={this.selectTab}
          tabs={tabs}
          title={'ASSET EDITOR'}
        />
        {this.state.selectedTab == 0 &&
          <DetailEditor
            onToggleStore={(openToStore)=>this.setState({openToStore})}
            onUpdateTags={(tags)=>this.setState({tags})}
            onUpdateThumbnails={(thumbnails)=>this.setState({thumbnails})}
            onUpdateTitle={(title)=>this.setState({title})}
            onUpdateContent={(content)=>this.setState({content})}
            openToStore={this.state.openToStore}
            tags={this.state.tags}
            thumbnails={this.state.thumbnails}
            title={this.state.title}
            content={this.state.content}
          />
        }
      </div>
    );
  }

  selectTab(tab, idx){
    this.setState({selectedTab: idx});
  }

  onUpdateThumbnail() {

  }

  visible(page){
    if(page==this.state.selectedPage){
      return styles.visible;
    }
    return '';
  }

  titleHandle(e) {
    this.setState({title: e.target.value});
  }

  openToStoreHandle(e) {
    this.setState({openToStore: e.target.checked});
  }

  codeHandle(type, code) {
    this.setState({[type]: code});
  }

  saveAsset() {
  }
}

export default Editor;
