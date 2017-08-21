import React from 'react';

import * as assetsActions from '../../../actions/assets';

const defaultProps = {
  icon: React.PropTypes.string.required,
  onClick: React.PropTypes.function.required,
  className: Reacat.PropTypes.string.required
};

class IconButton extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div onClick={this.props.onClick} >

      </div>
    );
  }
}

IconButton.defaultProps = defaultProps;

export default IconButton;
