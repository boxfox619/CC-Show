import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

export default class ContextMenu extends React.Component {
    static propTypes = {
        context: PropTypes.any.isRequired,
        actions: PropTypes.array.isRequired,
        handleContextMenu: PropTypes.func.isRequired
    };

    static defaultProps = {
        handleContextMenu: (event) => {}
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            x: 0,
            y: 0,
        }
    }

    componentDidMount = () => {
        this.props.context.addEventListener('contextmenu', this.handleContextMenu);
        this.props.context.addEventListener('click', this.handleClick);
    };

    componentWillUnmount = () => {
        this.props.context.removeEventListener('contextmenu', this.handleContextMenu);
        this.props.context.removeEventListener('click', this.handleClick);
    };

    renderActions = (actions) => {
        return actions.map((action, i) =>
            <div>
                <div className={`${styles.option} ${action.enable ? '' : styles.disabled}`}>
                    {action.label}
                    {!!action.subLabel && <div className={styles['sub-label']}>{action.subLabel}</div>}
                    {!!action.childActions && <div className={styles.submenu}/>}
                    {!!action.childActions && (
                        <div className={styles['context-menu']}>
                            <div className={styles.content}>
                                {this.renderActions(action.childActions)}
                            </div>
                        </div>)}
                </div>
                {actions.length - 1 === i && (<div className={styles.separator}/>)}
            </div>)
    };

    render() {
        const {visible} = this.state;
        return (visible || null) &&
            <div>
                <div className={styles['context-menu']}
                     ref={root => this.root = root}
                     style={{'left': this.state.x, 'top': this.state.y}}>
                    <div className={styles.content}>
                        {this.renderActions(this.props.actions)}
                    </div>
                </div>
            </div>
    }

    handleContextMenu = (event) => {
        this.props.handleContextMenu(event);
        event.preventDefault();
        this.setState({visible: true});
        let rect = document.getElementById('SlideContext').getBoundingClientRect();
        let right = rect.right;
        let bottom = rect.bottom;
        let left = rect.left;
        let top = rect.top;
        let x = event.pageX - left;
        let y = event.pageY - top;

        if (right - event.pageX < this.root.offsetWidth) {
            x -= this.root.offsetWidth;
        }
        if (bottom - event.pageY < this.root.offsetHeight) {
            y -= this.root.offsetHeight;
        }
        this.setState({x, y});
    };

    handleClick = () => {
        if (this.state.visible) this.setState({visible: false});
    };
}