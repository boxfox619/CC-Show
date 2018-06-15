import React from 'react';
import styles from './style.css';
import DialogHeader from 'components/Dialog/components/Header';
import DetailEditor from './components/DetailEditor';
import CodeEditor from "./components/CodeEditor";
import Button from 'components/Form/Button';
import RequestService from '../../services/request';
import classnames from 'classnames';

const tabs = ['DETAIL', 'CODE'];

const propTypes = {
  closeDialog: React.PropTypes.func.isRequired,
    assetId: React.PropTypes.string
}

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
      selectedTab: tabs[0]
    };
    this.visible = this.visible.bind(this);
    this.cancel = this.cancel.bind(this);
    this.save = this.save.bind(this);
  }

  render() {
    return (
      <div>
        <DialogHeader
          onTabSelected={(idx) => this.setState({selectedTab: idx})}
          tabs={tabs}
          title={'ASSET EDITOR'}
        />
        <div style={{'padding': '16px'}}>
          <DetailEditor
            className={this.visible('DETAIL')}
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
          <CodeEditor
            className={classnames(styles.codeEditor, this.visible('CODE'))}
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

    cancel() {
        this.props.closeDialog();
    }

    save(upload) {
    console.log(this.state);
        RequestService.saveAsset({...this.state, 'assetId': this.props.assetId}, (res) => {

        });
    }

  visible(page){
    if(page!==this.state.selectedTab){
      return styles.invisible;
    }
    return '';
  }
}

Editor.propTypes = propTypes;

export default Editor;
