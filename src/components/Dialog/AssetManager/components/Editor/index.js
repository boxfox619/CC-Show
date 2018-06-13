import React from 'react';
import styles from './style.css';
import DialogHeader from 'components/Dialog/components/Header';
import DetailEditor from './components/DetailEditor';
import CodeEditor from "./components/CodeEditor";
import Button from 'components/Form/Button';
import classnames from 'classnames';

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
    this.cancel = this.cancel.bind(this);
    this.save = this.save.bind(this);
  }

  render() {
    return (
      <div>
        <DialogHeader
          onTabSelected={this.selectTab}
          tabs={tabs}
          title={'ASSET EDITOR'}
        />
        <div style={{'padding': '16px'}}>
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
        <CodeEditor
          className={classnames(styles.codeEditor, (this.state.selectedTab == 1)? '': styles.invisible)}
          onChangeCode={(type, code) => this.setState({[type]: code})}
          html={this.state.html}
          css={this.state.css}
          js={this.state.js}
        />

          <div style={{'position': 'relative'}}>
              <Button label={"임시저장"} margin={'15px 0 0 0'} width={'150px'} onClick={()=>this.save(false)} />
              <div style={{'position': 'absolute', 'right': '0px', 'top': '0px'}}>
                  <Button label={"취소"} margin={'15px 2px 0 2px'} width={'150px'} onClick={this.cancel} />
                  <Button label={"등록"} thema={'blue'} margin={'15px 2px 0 2px'} width={'150px'} onClick={()=>this.save(true)} />
              </div>
          </div>
        </div>
      </div>
    );
  }

  cancel(){

  }

  save(){

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
