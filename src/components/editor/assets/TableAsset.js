import React from 'react';
import styles from './Assets.css';

class TableAsset extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    let styles={'border-style':'solid', ...this.props.asset.style};
    let getColumns=() => {
      return(
        this.props.asset.cells.map(function(row){
          return(
            <tr>
              {getRows(row)}
            </tr>            
            )
        })
      )
    }

    let getRows=(row) => {
      return(
        row.map(function(value){
          return(
            <td contentEditable={true} onChange="" style={{'border-spacing':'0', ...styles}}>
              {value}
            </td>
          )
        })
      )
    }

    return(
      <table style={{'border-spacing':'0', 'padding':'0', ...this.props.styles}}>
        <tbody>
          {getColumns()}
        </tbody>
      </table>
    )
  }
}

export default TableAsset;
