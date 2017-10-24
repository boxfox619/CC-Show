import React from 'react';
import styles from './Assets.css';
import ReactTable from 'react-table'

class TableAsset extends React.Component{
  constructor(props){
    super(props);
  }
  render() {

    let getColumns=() => {
      let columns=[];
      for(let i=0;i<this.props.asset.value.column; i++) columns.push('a');
      
      return(
        columns.map(function(i){
          return(
            <tr>
              {getRows()}
            </tr>            
            )
        })
      )
    }

    let getRows=() => {
      let rows=[];
      for(let i=0;i<this.props.asset.value.row; i++) rows.push('a');
      
      return(
        rows.map(function(str){
          return(
            <td>
              {str}
            </td>
          )
        })
      )
    }

    return(
      <table>
        {getColumns()}
      </table>
    )
  }
}

export default TableAsset;
