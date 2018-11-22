import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class ImageActionCard extends React.Component {

    static propTypes = {
        className: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired,
        clickable: PropTypes.bool.isRequired,
        actions: PropTypes.array.isRequired
    };

    static defaultProps = {
        clickable: true,
        thumbnail: 'none',
        className: '',
        actions: []
    };

    render() {
        return (
            <div className={`${styles["image-card"]} ${this.clickableClass} ${this.activeClass} ${this.props.className}`}
                 onClick={() => this.props.onClick(this.props.slide)}>
                <div className={styles.thumbnail}>
                    <div className={styles.content} style={{'backgroundImage': 'url(' + this.props.thumbnail + ')'}}/>
                </div>
                <div className={styles.controller}>
                    <div className={styles.info}>
                        <div className={styles['title']}>
                            {this.props.title}
                        </div>
                        <div className={styles["sub-title"]}>
                            {this.props.subTitle}
                        </div>
                    </div>
                    <div className={styles.actions}>
                        {this.props.actions.map(action => <ActionButton icon={action.icon} onClick={action.onClick}/>)}
                    </div>
                </div>
            </div>
        );
    }

    get clickableClass() {
        return  (this.props.clickable) ? styles.clickable : '';
    }

    get activeClass() {
        return  (this.props.active) ? styles.active : '';
    }


}

const ActionButton = ({icon, onClick}) => (
    <img className={styles["action-button"]}
         onClick={onClick}
         src={'/images/ic_'+icon+'_white.png'}
    />
);