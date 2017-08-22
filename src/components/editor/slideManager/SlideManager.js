import React from 'react';

import styles from './SlideManager.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SlidePreview from './slidePreview/SlidePreview';
import * as assetsActions from '../../../actions/assets';

const defaultProps = {
  className: React.PropTypes.string.required
};

class SlideManager extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
      let renderSlidePreviews = (slides) => {
        return slides.map((slide, idx)=>{
          return <SlidePreview key={slide.name+idx} name={slide.name} no={1}/>
        })
      };
    return (
      <div className={this.props.className}>
        <div style={{'padding': '20px 13px'}}>
          <div className={styles.title}>
            슬라이드 리스트
          </div>
          <div className={styles.hide}>
          </div>
          {renderSlidePreviews(this.props.slides)}
        </div>
      </div>
    );
  }
}

SlideManager.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    slides: state.editor.slides
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(assetsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideManager);
