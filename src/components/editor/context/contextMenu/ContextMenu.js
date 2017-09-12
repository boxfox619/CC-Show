import React from 'react';
import ReactDOM from 'react-dom';

import styles from './ContextMenu.css';

class ContextMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      x: 0,
      y: 0
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

    componentDidMount () {
        document.getElementById('SlideContext').addEventListener('contextmenu', this.handleContextMenu);
        document.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
        document.getElementById('SlideContext').parentNode.removeEventListener('contextmenu', this.handleContextMenu);
        document.removeEventListener('click', this.handleClick);
    }

    render() {
        const { visible } = this.state;

        return(visible || null) &&
            <div ref={root => {this.root = root}} style={{'left':this.state.x, 'top':this.state.y}} className={styles.contextMenu}>
                <div className={styles.option}>Share this</div>
                <div className={styles.option}>New window</div>
                <div className={styles.option}>Visit official site</div>
                <div className={styles.option}>View full version</div>
                <div className={styles.option}>Settings</div>
                <div className={styles.separator}/>
                <div className={styles.option}>About this app</div>
            </div>
    }

    handleContextMenu(event){
        event.preventDefault();
        this.setState({ visible: true });
        let rect = document.getElementById('SlideContext').getBoundingClientRect();
        let right = rect.right;
        let bottom = rect.bottom;
        let left = rect.left;
        let top = rect.top;
        let x = event.pageX - left;
        let y = event.pageY - top;

        if(right-event.pageX<this.root.offsetWidth){
          x -= this.root.offsetWidth;
        }
        if(bottom-event.pageY<this.root.offsetHeight){
          y -= this.root.offsetHeight;
        }
        this.setState({ x, y });
    }

    handleClick(event){
      if (this.state.visible) this.setState({ visible: false });
    }
}

export default ContextMenu;
