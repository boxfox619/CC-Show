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
              <div className={styles.content}>
                <div className={styles.option}>복사<div className={styles.shortcut}>Ctrl + C</div></div>
                <div className={styles.option}>붙여넣기<div className={styles.shortcut}>Ctrl + V</div></div>
                <div className={styles.option}>삭제<div className={styles.shortcut}>Ctrl + D</div></div>
                <div className={styles.option}>자르기<div className={styles.shortcut}>Ctrl + X</div></div>
                <div className={styles.separator}/>
                <div className={styles.option}>변형<div className={styles.submenu}></div></div>
                <div className={styles.option}>정돈<div className={styles.submenu}></div></div>
                </div>
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
