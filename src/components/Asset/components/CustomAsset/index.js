import React from 'react';

import axios from 'axios';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired
};

function generateRandomCode(howMany, chars) {
  chars = chars
        || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';
  var rnd = crypto.randomBytes(howMany)
    , value = new Array(howMany)
    , len = chars.length;

  for (var i = 0; i < howMany; i++) {
    value[i] = chars[rnd[i] % len]
  }

  return value.join('');
}


class CustomAsset extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      code:''
    }
    this.code = ''
    this.clearCode = ''
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.code}}
        style={this.props.styles}
      />
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
