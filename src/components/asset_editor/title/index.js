import React from 'react';
import styles from './style.css';

const propTypes = {
  onChange: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired
}

class Title extends React.Component{
    constructor(prop){
        super(prop);
    };

    render(){
        return(
          <div className = {styles.cover}><span className = {styles.title_label}>제목</span>
              <input type = "text" className = {styles.title} placeholder=" 타이틀을 입력하세요" onChange = {(e)=>this.onChange(e)} value = {this.props.title}/>
          </div>
        );
    }
}

Title.propTypes = propTypes;


export default Title;
