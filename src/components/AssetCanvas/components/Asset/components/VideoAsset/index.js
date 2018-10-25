import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class VideoAsset extends Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        value: PropTypes.string.isRequired,
        attrs: PropTypes.object.isRequired
    };

    render() {
        let code = this.getVideoCode(this.props.value);
        let renderVideo = (visible) => {
            if (visible)
                return (<iframe frameBorder="0"
                                src={'https://www.youtube.com/embed/' + code}
                                style={{'width': '100%', 'height': '100%'}}
                />);
            else return (
                <div className={styles.blankVideo}><img src={'/images/ic_play_circle_outline_white.png'}/></div>);
        }
        return (
            <div style={this.props.styles}>
                {renderVideo(this.props.attrs.preview)}
            </div>
        )
    }

    getVideoCode = (url) => {
        return url.split('?v=')[1];
    }
}
