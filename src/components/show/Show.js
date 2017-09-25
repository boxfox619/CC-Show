import React from 'react';

import styles from './Show.css';

import axios from 'axios';


class ShowListContext extends React.Component{

  constructor(props){
    super(props);

    this.state={
      currentSlide: 0,
      slides:['http://cfile7.uf.tistory.com/image/247486435884DAC80A37B7', 'https://www.kbrockstar.com/wp-content/uploads/2016/03/05-10.png']
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.doSlide = this.doSlide.bind(this);
  }

  render(){
    let renderingSlides = () => {
      if(this.state.slides.length>0)
      return (
        <img className={styles.slide} src={this.state.slides[this.state.currentSlide]}/>
      )
    }
    return (
      <div className={styles.context}>
        {renderingSlides()}
        <div onClick={()=>this.doSlide(-1)} className={styles.left}></div>
        <div onClick={()=>this.doSlide(1)} className={styles.right}></div>
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
