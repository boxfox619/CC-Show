import React from 'react';

import Asset from '../../components/Asset';

import styles from './style.css';

import * as DomController from './services/dom';
import * as Loader from './services/ShowLoader'
import Slide from "./services/Slide";

class SlideShow extends React.Component{

  constructor(props){
    super(props);

    this.state={
      currentSlide: 0,
      slides:[]
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.doSlide = this.doSlide.bind(this);
  }

  render(){
    let renderingSlides = (slides, currentSlideIdx) =>{
      if(slides.length>0){
        return slides.map((slide,idx)=>{
          return <Slide visible={idx == currentSlideIdx} slide={slide} />
        })
      }else{
        return (<img className={styles.loader} src='/images/progress.gif' />);
      }
    }
    return (
      <div className={styles.context}>
        {renderingSlides(this.state.slides, this.state.currentSlide)}
      </div>
    )
  }

  doSlide(change){
    let tmpSlideIndex = this.state.currentSlide + change;
    if(tmpSlideIndex<0||tmpSlideIndex>=this.state.slides.length){
      return;
    }
    this.setState({currentSlide: tmpSlideIndex});
  }

  componentDidMount(){
    DomController.initSlideShow.bind(this);
    Loader.load(function(slides){
      if(slides){
        this.setState({slides})
      }
    }.bind(this))
  }

  handleKeyDown(e){
    if(e.keyCode == 37){
      this.doSlide(-1);
    }else if(e.keyCode == 39){
      this.doSlide(1);
    }
  }

}
export default (SlideShow);
