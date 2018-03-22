import React from 'react';

import Asset from '../../components/Asset';

import styles from './style.css';

import axios from 'axios';

import * as DomController from './services/dom';
import * as Loader from './services/SlideLoader'


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
    let renderingSlides = () =>{
      if(this.state.slides.length>0){
        return renderingAssets(this.state.slides[this.state.currentSlide].assets);
      }else{
        return (<img className={styles.loader} src="/images/progress.gif"/>);
      }
    }
    let renderingAssets = (assets) => {
      return assets.map((asset)=>{
        return <Asset controlable={false} key={this.state.currentSlide+'-'+asset.id+'-'+this.state.currentSlide} onChangeAttributes={this.props.setSelectedAssetAttributes} attribute={Loader.convertSize(asset)}/>
      })
    }
    return (
      <div className={styles.context}>
        {renderingSlides()}
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
      }else{
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
