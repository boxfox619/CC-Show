import React from 'react'

class AssetCreateButton extends React.Component{
  render(){
    return (
      <h1 onClick={this.createAsset} >{ this.props.type }</h1>
    );
  }

  createAsset: function(type) {
    console.log('Clicked!');
  }

}

export default AssetCreateButton;
