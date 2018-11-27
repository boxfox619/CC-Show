import React, {Component} from 'react';
import Dialog from '../Dialog';

import styles from './style.css';

export default class ProgressDialog extends Component {

    render() {
        return (
            <Dialog className={styles.customize}>
                    <div className={styles.container}>
                        <div className={styles.progress}>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                </div>
            </Dialog>
        )
    }
}
