import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import ControllerWrapper from 'components/ControllerWrapper';

export default class VideoController extends React.Component {
    static propTypes = {
        onChangeAttribute: PropTypes.func.isRequired,
        url: PropTypes.string.isRequired,
        preview: PropTypes.bool.isRequired
    };

    render() {
        return (
            <ControllerWrapper title="비디오">
                <div className={styles["controller-container"]}>
                    <div id={styles['video-url']} className={styles.controller}>
                        <span className={styles.title}>URL :</span>
                        <input className={styles.input}
                               onChange={this.setUrl}
                               style={{'textAlign': 'left'}}
                               type="text"
                               value={this.props.url}
                        />
                    </div>
                    <div id={styles['video-preview-toggle']}
                         className={`${styles.controller} ${((this.props.preview) ? styles.active : '')}`}
                         onClick={this.togglePreview}>
                        미리보기
                    </div>
                </div>
            </ControllerWrapper>
        )
    }

    togglePreview = () => {
        this.props.onChangeAttribute('preview', !this.props.preview);
    };

    setUrl = (event) => {
        let {value} = event.target;
        this.props.onChangeAttribute('value', value);
    };
}