import React from 'react';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired
};

class CustomAsset extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.value}}
        style={this.props.styles}
      />
    )
  }

  componentDidUpdate(){
    if(this.props.value.length>0){
      var extractscript=/<script>([\S\s]+)<\/script>/gi.exec(this.props.value);
      if(extractscript)
        window.eval(extractscript[extractscript.length-1]);
    }
  }
}

CustomAsset.propTypes = propTypes;

export default CustomAsset;
