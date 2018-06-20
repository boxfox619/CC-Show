import React from 'react';
import styles from './style.css';
import DialogHeader from '../header';
import DetailEditor from './components/detail';
import CodeEditor from './components/code';
import Button from 'components/form/button';
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
            content={this.state.content}
            onToggleStore={(openToStore)=>this.setState({openToStore})}
            onUpdateContent={(content)=>this.setState({content})}
            onUpdateTags={(tags)=>this.setState({tags})}
            onUpdateThumbnails={(thumbnails)=>this.setState({thumbnails})}
            onUpdateTitle={(title)=>this.setState({title})}
            openToStore={this.state.openToStore}
            tags={this.state.tags}
            thumbnails={this.state.thumbnails}
            title={this.state.title}
          />
          <CodeEditor
            className={classnames(styles.codeEditor, this.visible('CODE'))}
            css={this.state.css}
            html={this.state.html}
            js={this.state.js}
            onChangeCode={(type, code) => this.setState({[type]: code})}
          />

          <div style={{'position': 'relative'}}>
            <Button label={'임시저장'}
              margin={'15px 0 0 0'}
              onClick={()=>this.save(false)}
              width={'150px'}
            />
            <div style={{'position': 'absolute', 'right': '0px', 'top': '0px'}}>
              <Button label={'취소'}
                margin={'15px 2px 0 2px'}
                onClick={this.cancel}
                width={'150px'}
              />
              <Button label={'등록'}
                margin={'15px 2px 0 2px'}
                onClick={()=>this.save(true)}
                thema={'blue'}
                width={'150px'}
              />
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
