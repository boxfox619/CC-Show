import React from 'react';
import styles from './style.css';

const propTypes = {
  text: React.PropTypes.string.isRequired,
  img: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};

class AssetItem extends React.Component{
  render(){
    return (
      <div
        className={styles.asset +' '+styles.actionItem}
        onClick={this.props.onClick}
      >
        <div className={styles.description}>{this.props.text}</div>
        <img src={this.props.img} />
      </div>
    );
  }
}

AssetItem.propTypes = propTypes;

export default AssetItem;
