import React from 'react';
import styles from './Assets.css';

import axios from 'axios';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.number.isRequired
};

class CustomAsset extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      code:''
    }
  }

  render() {
    return (
      <div style={this.props.styles} dangerouslySetInnerHTML={ {__html: this.state.code}}/>
    )
  }

  componentDidUpdate(){
    if(!!this.state.code&&this.state.code.length>0){
      var extractscript=/<script>([\S\s]+)<\/script>/gi.exec(this.state.code);
      if(!!extractscript&&extractscript.length>0)
        window.eval(extractscript[extractscript.length-1]);
    }
  }

  componentDidMount(){
    axios.get('/store/simple/?id='+this.props.value)
    .then(response => {
      this.setState({code : response.data.code});
    }).catch(err => {
    });
  }
}

CustomAsset.propTypes = propTypes;

export default CustomAsset;
