import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import Dialog from "../../../../core/components/Dialog/Dialog";

export default class ActionDialog extends React.Component{
    static propTypes = {
        message: PropTypes.string.isRequired,
        text: PropTypes.string,
        callback: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.state = {value: ''}
    }

    render() {
        return (
            <Dialog>
                <div className={styles["modal-header"]}>{this.props.msg}</div>
                <div className={styles["modal-content"]}>
                    <div className={styles["input-wrapper"]}>
                        {this.renderInput()}
                    </div>
                    <div className={styles["bottom-group"]} onClick={() => this.props.callback(this.state.value)}>
                        확인
                    </div>
                </div>
            </Dialog>
        );
    }

    renderInput = () => {
        if (this.props.text === undefined) {
            return (<input className={styles.input}
                           onChange={(e) => {this.setState({value: e.target.value})}}
                           type="text"
            />);
        } else {
            return (<input className={styles.input}
                           readOnly
                           type="text"
                           value={this.props.text}
            />);
        }
    };

}