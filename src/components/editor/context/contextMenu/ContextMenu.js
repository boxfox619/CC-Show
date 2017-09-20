import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as assetsActions from '../../../../actions/assets';

import styles from './ContextMenu.css';

class ContextMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      x: 0,
      y: 0,
      assetId: undefined,
      copyAsset: undefined,
      targetAssetId: undefined
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

    componentDidMount () {
        document.getElementById('SlideContext').addEventListener('contextmenu', this.handleContextMenu);
        document.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
        document.getElementById('SlideContext').parentNode.removeEventListener('contextmenu', this.handleContextMenu);
        document.removeEventListener('click', this.handleClick);
    }

    render() {
        const { visible } = this.state;

        return(visible || null) &&
            <div>
            <div ref={root => {this.root = root}} style={{'left':this.state.x, 'top':this.state.y}} className={styles.contextMenu}>
              <div className={styles.content}>
                <div onClick={this.handleOptionClick} className={styles.option+' '+((!!this.state.assetId)?'':styles.disabled)}>복사<div className={styles.shortcut}>Ctrl + C</div></div>
                <div onClick={this.handleOptionClick} className={styles.option+' '+((!!this.state.copyAsset)?'':styles.disabled)}>붙여넣기<div className={styles.shortcut}>Ctrl + V</div></div>
                <div onClick={this.handleOptionClick} className={styles.option+' '+((!!this.state.assetId)?'':styles.disabled)}>삭제<div className={styles.shortcut}>Ctrl + D</div></div>
                <div onClick={this.handleOptionClick} className={styles.option+' '+((!!this.state.assetId)?'':styles.disabled)}>잘라내기<div className={styles.shortcut}>Ctrl + X</div></div>
                <div className={styles.separator}/>
                <div className={styles.option+' '+((!!this.state.assetId)?'':styles.disabled)}>변형<div className={styles.submenu}></div>
                <div className={styles.contextMenu}>
                  <div className={styles.content}>
                    <div onClick={this.handleOptionClick} className={styles.option}>이동<div className={styles.shortcut}>SHIFT+CTRL+M</div></div>
                    <div onClick={this.handleOptionClick} className={styles.option}>회전</div>
                    <div onClick={this.handleOptionClick} className={styles.option}>반사</div>
                    <div onClick={this.handleOptionClick} className={styles.option}>크기조절</div>
                    <div onClick={this.handleOptionClick} className={styles.option}>기울이기</div>
                    </div>
                    </div>
                </div>
                <div className={styles.option+' '+((!!this.state.assetId)?'':styles.disabled)}>정렬<div className={styles.submenu}></div>
                <div className={styles.contextMenu}>
                  <div className={styles.content}>
                    <div onClick={this.handleOptionClick} className={styles.option} style={{'width': '190px'}}>맨 앞으로 가져오기<div className={styles.shortcut}>SHIFT+CTRL+]</div></div>
                    <div onClick={this.handleOptionClick} className={styles.option}>앞으로 가져오기<div className={styles.shortcut}>CTRL+]</div></div>
                    <div onClick={this.handleOptionClick} className={styles.option}>뒤로 보내기<div className={styles.shortcut}>CTRL+[</div></div>
                    <div onClick={this.handleOptionClick} className={styles.option}>맨 뒤로 보내기<div className={styles.shortcut}>SHIFT+CTRL+[</div></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    }

    handleOptionClick(event){
      let action = event.target.textContent;
      if(action.includes("붙여넣기")&&!!this.state.copyAsset){
        this.props.copyAsset(this.state.copyAsset.id, this.state.copyAsset.slide, this.state.x+'px', this.state.y+'px');
      }else if(!!this.state.assetId){
        if(action.includes("복사")){
          this.setState({copyAsset: {id: this.state.assetId, slide: this.props.currentSlide}});
        }else if(action.includes("삭제")){

        }else if(action.includes("잘라내기")){

        }
      }
    }

    handleContextMenu(event){
      let enable = false;
      let pasteable = false;
      let assetId = undefined;
        if(event.target.parentNode.parentNode.tagName == 'ASSET'){
          enable = true;
          assetId = event.target.parentNode.parentNode.id;
        }
        if(!!this.cachedAsset){
          pasteable = true;
        }
        event.preventDefault();
        this.setState({ visible: true, enable, pasteable, assetId });
        let rect = document.getElementById('SlideContext').getBoundingClientRect();
        let right = rect.right;
        let bottom = rect.bottom;
        let left = rect.left;
        let top = rect.top;
        let x = event.pageX - left;
        let y = event.pageY - top;

        if(right-event.pageX<this.root.offsetWidth){
          x -= this.root.offsetWidth;
        }
        if(bottom-event.pageY<this.root.offsetHeight){
          y -= this.root.offsetHeight;
        }
        this.setState({ x, y });
    }

    handleClick(event){
      if (this.state.visible) this.setState({ visible: false });
    }
}

const mapStateToProps = (state) => {
  if(state.editor.slides.length > 0){
    return {
      currentSlide: state.editor.selectedSlide
    }
  } else {
    return{
      currentSlide: -1
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...assetsActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu);
