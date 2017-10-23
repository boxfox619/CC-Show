import React from 'react';
import styles from './Assets.css';

class TableAsset extends React.Component{

  render() {
    return (
        this.getTable()
    )
  }

  getTable() {
    let table= this.props.asset.value;

    console.log(table);


  }

  getRows(){

  }

  getColumn(){

  }
}

export default TableAsset;
