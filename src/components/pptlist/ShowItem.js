import React from 'react';

import styles from './ShowList.css';

const propTypes ={
  name: React.PropTypes.string.isRequired,
  open: React.PropTypes.func.isRequired,
  thumbnail: React.PropTypes.string,
  share: React.PropTypes.func.isRequired,
  delete: React.PropTypes.func.isRequired
}


class ShowItem extends React.Component{

  constructor(props){
    super(props);

    this.onShare = this.onShare.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  render(){
    let renderThumbnail = function(){
      if(this.props.thumbnail!=undefined&&this.props.thumbnail.length>0)
      return (
        <img className={styles.thumbnail} src={this.props.thumbnail}/>
      );
    }.bind(this);
    return (
      <div onClick={this.props.open} className={styles.showItem}>
      {renderThumbnail()}
        <div className={styles.footer}>
          <div className={styles.texts}>
            <div className={styles.title}>{this.props.name}</div>
          </div>
          <div className={styles.buttons}>
            <div onClick={this.onShare} id={styles.share} className={styles.imgBtn}></div>
            <div onClick={this.onDelete}  id={styles.delete} className={styles.imgBtn}></div>
          </div>
        </div>
      </div>
    )
  }
  onShare(e){
    e.stopPropagation();
    this.props.share();
  }
  onDelete(e){
    e.stopPropagation();
    this.props.delete();
  }
}
ShowItem.propTypes = propTypes;
export default (ShowItem);
