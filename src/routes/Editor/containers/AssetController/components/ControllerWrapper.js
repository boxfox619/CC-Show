import React from 'react';
import styles from '../styles.css';

export default class ControllerWrapper extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired
    };

    constructor(prop) {
        super(prop);

        this.state = {
            toggle: true
        }
    }

    render() {
        return (
            <div className={styles['controller-wrapper']}>
                <div className={styles['flipping-section']}>
                    <div className={styles['content']}>
                        <div className={styles['title']}>{this.props.title}
                            <img className={styles['flip-button']}
                                 onClick={() => this.setState({toggle: !this.state.toggle})}
                                 src={(this.state.toggle) ? '/images/ic_arrow_down.png' : '/images/ic_arrow_up.png'}
                            />
                        </div>
                    </div>
                    {this.state.toggle && this.props.children}
                </div>
                <hr className={styles['bottom-line']} />
            </div>
        );
    }
}