import React from 'react';

class TableAsset extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <table style={{'borderSpacing':'0', 'padding':'0', ...this.props.styles}}>
        <tbody>
        </tbody>
      </table>
    )
  }
}

export default TableAsset;
