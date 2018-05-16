import React from 'react';

import styles from './style.css';

const propTypes = {
  msg: React.PropTypes.string.isRequired,
  text: React.PropTypes.string,
  callback: React.PropTypes.func.isRequired
}

class Dialog extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      value:''
    }
  }

  render(){
    let renderInput = function() {
      if(this.props.text ==undefined){
        return (<input onChange={(e)=>{this.setState({value: e.target.value})}} type='text' className={styles.input} />);
      }else{
        return (<input type='text' className={styles.input} readOnly value={this.props.text} />);
      }
    }.bind(this);
    return (
      <div onClick={()=>this.props.callback()} className={styles.modal_wrapper}>
        <div onClick={(e)=>{e.stopPropagation()}} className={styles.modal}>
          <div className={styles.modal_header}>{this.props.msg}</div>
          <div className={styles.modal_content}>
            <div className={styles.input_wrapper}>
              {renderInput()}
            </div>
            <div onClick={()=>this.props.callback(this.state.value)} className={styles.bottomGroup}>
          확인
            </div>
          </div>
        </div>
      </div>
    )
  }
}
Dialog.propTypes = propTypes;
export default (Dialog);
