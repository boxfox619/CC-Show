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
        return (<input className={styles.input}
          onChange={(e)=>{this.setState({value: e.target.value})}}
          type="text"
                />);
      }else{
        return (<input className={styles.input}
          readOnly
          type="text"
          value={this.props.text}
        />);
      }
    }.bind(this);
    return (
      <div className={styles.modal_wrapper}
        onClick={()=>this.props.callback()}
      >
        <div className={styles.modal}
          onClick={(e)=>{e.stopPropagation()}}
        >
          <div className={styles.modal_header}>{this.props.msg}</div>
          <div className={styles.modal_content}>
            <div className={styles.input_wrapper}>
              {renderInput()}
            </div>
            <div className={styles.bottomGroup}
              onClick={()=>this.props.callback(this.state.value)}
            >
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
