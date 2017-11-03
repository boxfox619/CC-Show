import React from 'react';

import * as assetTypes from '../../assetTypes';

import Asset from '../editor/assets/Asset';

import styles from './Show.css';

import axios from 'axios';


class ShowListContext extends React.Component{

  constructor(props){
    super(props);

    this.state={
      currentSlide: 0,
      slides:[]
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.doSlide = this.doSlide.bind(this);
    this.convertSize = this.convertSize.bind(this);
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
        return <Asset controlable={false} key={this.state.currentSlide+'-'+asset.id+'-'+this.state.currentSlide} handleValueChange={this.props.setAssetValue} attribute={this.convertSize(asset)}/>
      })
    }
    return (
      <div className={styles.context}>
        {renderingSlides()}
        <div onClick={()=>this.doSlide(-1)} className={styles.left}></div>
        <div onClick={()=>this.doSlide(1)} className={styles.right}></div>
      </div>
    )
  }

  convertSize(asset){
  let assetItem = JSON.parse(JSON.stringify(asset));
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let editorHeight = 620;
    let editorWidth = 1080;
    let perX = windowWidth / editorWidth;
    let perY = windowHeight / editorHeight;
    if(asset.type!=assetTypes.TYPE_CUSTOM){
      assetItem.height = perY*parseInt(asset.height)+'px';
      assetItem.width = perX*parseInt(asset.width)+'px';
      assetItem.y = perY*parseInt(asset.y)+'px';
      assetItem.x = perX*parseInt(asset.x)+'px';
    }else{
      let halfHeight = parseInt(assetItem.height) / 2;
      let halfWidth = parseInt(assetItem.width) / 2;
      assetItem.y = perY*(parseInt(assetItem.y)+halfHeight) - halfHeight+'px';
      assetItem.x = perX*(parseInt(assetItem.x)+halfWidth) - halfWidth+'px';
    }
    return assetItem;
  }

  doSlide(change){
    let tmpSlideIndex = this.state.currentSlide + change;
    if(tmpSlideIndex<0||tmpSlideIndex>=this.state.slides.length){
      return;
    }
    this.setState({currentSlide: tmpSlideIndex});
  }

  componentDidMount(){
    window.addEventListener("keydown", this.handleKeyDown, true);
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    }, false);
    document.oncontextmenu = function () {
      return false;
    };
    var url = new URL(window.location.href);
    var showId = url.searchParams.get("show");
    if(showId != null){
      axios.post('/show/play/', {showId: showId})
      .then(response => {
        this.setState({slides: response.data});
      })
      .catch(e =>{
        console.log(e);
        alert('존재하지 않는 ppt 입니다!');
      });
    }
  }

  handleKeyDown(e){
    if(e.keyCode == 37){
      this.doSlide(-1);
    }else if(e.keyCode == 39){
      this.doSlide(1);
    }
  }

}
export default (ShowListContext);
