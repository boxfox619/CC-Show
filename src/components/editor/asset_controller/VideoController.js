import React from 'react';
import { connect } from 'react-redux';

class VideoController extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.controller_sub_wrapper}>
                    <div className={styles.controller_sub_title}>비디오</div>
                    <img onclick="textOn()" src="/images/ic_arrow_up.png" id="video-on" className={styles.show_items_button}/>
                    <img onclick="textOff()" src="/images/ic_arrow_down.png" id="video-off" className={styles.show_items_button}/>
                </div>
                <div className={styles.items} id={styles.text_items}>
                        <div className={styles.control_item}>
                            <input className={styles.attribute_item_title} type="text" name="" value="URL :" readonly/><input type="text" className={styles.attribute_item_input} value={this.props.width} onKeyDown={this.setWidth()}/>
                        </div>
                        <div className={styles.control_item}>
                            <input type="text" className={styles.attribute_item_input } value={this.props.height} onKeyDown={this.setHeight()}/>
                        </div>
                        <div className={styles.control_item}>
                            <input type="text" className={styles.attribute_item_input} value={this.props.x} onKeyDown={this.setX_location()}/>
                        </div>
                        <div className={styles.control_item}>
                            <input type="text" className={styles.attribute_item_input} value={this.props.y} onKeyDown={this.setY_location()}/>
                        </div>
                        <div className={styles.control_item}>
                            <input type="text" className={styles.attribute_item_input} value={this.props.angle} onKeyDown={this.setAngle()}/>
                        </div>
                </div>
            </div>
        )
    }

    componentWillUpdate(){
        if(this.props.controller) document.getElementById('controller').checked=true;
        else if(this.props.autoplay) document.getElementById('autoplay').checked=true;
        else if(this.props.loop) document.getElementById('loop').check=true;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setURL: (url) => {
            dispatch(actions.setAssetVideoURL(url));
        },
        setcontroller: (controller) => {
            dispatch(actions.setAssetVideoURL(controller));
        },
        setAutoplay: (autoplay) => {
            dispatch(actions.setAssetVideoURL(autoplay));
        },
        setLoop: (loop) => {
            dispatch(actions.setAssetVideoURL(loop));
        }
    }
}

export default VideoController;
