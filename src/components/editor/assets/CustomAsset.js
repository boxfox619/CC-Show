import React from 'react';
import styles from './Assets.css';

import axios from 'axios';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  id: React.PropTypes.integer.isRequired
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
      <div style={this.props.styles} dangerouslySetInnerHTML={ {__html: this.state.code}}>
      </div>
    )
  }

  componentDidMount(){
    axios.post('/store/simple/?id='+this.props.id)
    .then(response => {
      this.setState(code : response.data.code);
    }).catch(err => {
    });
  }
}

CustomAsset.propTypes = propTypes;

export default CustomAsset;
