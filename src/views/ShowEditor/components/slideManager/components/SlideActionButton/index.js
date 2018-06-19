import React from 'react';

const propTypes = {
  icon: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  className: React.PropTypes.string.isRequired
};

class SlideActionButton extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <img className={this.props.className}
        onClick={this.props.onClick}
        src={'/images/ic_'+this.props.icon+'_white.png'}
      />
    );
  }
}

SlideActionButton.propTypes = propTypes;

export default SlideActionButton;
