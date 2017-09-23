import React from 'react';

import styles from './SlideManager.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SlidePreview from './slidePreview/SlidePreview';
import SlideCreator from './SlideCreator';
import * as assetsActions from '../../../actions/assets';
import * as slideActions from '../../../actions/slides';
import * as uiActions from '../../../actions/ui';

const defaultProps = {
  className: React.PropTypes.string.required
};

var placeholder = document.createElement("li");
placeholder.className = "placeholder";

class SlideManager extends React.Component{

  constructor(props){
    super(props);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.dragOver = this.dragOver.bind(this);
    this.selectSlide = this.selectSlide.bind(this);
  }

  render(){
      let renderSlidePreviews = (slides) => {
        return slides.map((slide, idx)=>{
          return <li
            data-id={idx}
            key={'slide'+slide.id}
            draggable="true"
            onDragEnd={this.dragEnd}
            onDragStart={this.dragStart}>
          <SlidePreview
          slide={slide}
          idx={idx}
          shareSlide={this.props.shareSlide}
          copySlide={this.props.copySlide}
          deleteSlide={this.props.deleteSlide}
          onClick={this.selectSlide}
          />
          </li>
        })
      };

    return (
      <div className={this.props.className}>
        <div className={styles.inner}>
          <div className={styles.title}>
            슬라이드 리스트
          </div>
          <div className={styles.hide} onClick={this.props.toggleSlideManager}>
          </div>
          <ul onDragOver={this.dragOver}>
          {renderSlidePreviews(this.props.slides)}
          </ul>
          <SlideCreator/>
        </div>
      </div>
    );
  }


  componentDidMount(){
  }

  selectSlide(target){
    this.props.selectSlide(target);
  }

  dragStart(e) {
    let target = e.currentTarget;
    while(target.tagName != 'LI'){
      target = target.parentNode;
    }
    this.dragged = target;
    e.dataTransfer.effectAllowed = 'move';
    // Firefox requires dataTransfer data to be set
    e.dataTransfer.setData("text/html", e.currentTarget);
  }

  dragEnd(e) {
    this.dragged.style.display = "block";
    if(!this.dragged.parentNode.contains(placeholder))return;
    this.dragged.parentNode.removeChild(placeholder);
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if(from < to) to--;
    if(this.nodePlacement == "after") to++;
    this.props.exchangeSlide(to, from);
  }

  dragOver(e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    let target = e.target;
    if(e.target.className == "placeholder" || target.tagName=='UL') return;
    while(target.tagName != 'LI'){
      target = target.parentNode;
    }
    this.over = target;
    var relY = e.clientY - this.over.offsetTop;
    var height = this.over.offsetHeight / 2;
    var parent = e.target;
    while(parent.tagName != 'UL'){
      parent = parent.parentNode;
    }
    while(target.tagName != 'LI'){
      target = target.parentNode;
    }
    if(relY > height) {
      this.nodePlacement = "after";
      parent.insertBefore(placeholder, target.nextElementSibling);
    }
    else if(relY < height) {
      this.nodePlacement = "before"
      parent.insertBefore(placeholder, target);
    }
  }
}

SlideManager.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    slides: state.editor.slides,
    currentSilde: state.editor.selectedSlide
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...assetsActions, ...slideActions, ...uiActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideManager);
