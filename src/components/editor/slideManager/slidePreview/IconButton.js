import React from 'react';

console.log(React.PropTypes.func);
const defaultProps = {
  icon: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  className: React.PropTypes.string.isRequired
};

class IconButton extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <img className={this.props.className} onClick={this.props.onClick} src={'/images/ic_'+this.props.icon+'_white.png'}/>
    );
  }
}

IconButton.defaultProps = defaultProps;

export default IconButton;
