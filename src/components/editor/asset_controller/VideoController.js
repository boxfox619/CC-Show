import React from 'react';
import { connect } from 'react-redux';

class VideoController extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            video:false,
            video_arrow_up:true,
            video_arrow_down:false    
        };

        this.videoOn=this.videoOn.bind(this);
        this.videoOff=this.videoOff.bind(this);
    }
    render() {
        return (
            <div>
                <div className={styles.controller_sub_wrapper}>
                    <div className={styles.controller_sub_title}>비디오
                        <img onclick={this.videoOn.bind()} src="/images/ic_arrow_up.png" style={this.state.video_arrow_up ? {} : {display:'none'}} className={styles.show_items_button}/>
                        <img onclick={this.videoOff.bind()} src="/images/ic_arrow_down.png" style={this.state.video_arrow_down ? {} : {display:'none'}} className={styles.show_items_button}/>
                    </div>
                </div>
                <div className={styles.items} style={this.state.video ? {} : {display:'none'}}>
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

    videoOn(){
        this.setState({
            ...this.state,
            video:true,
            video_arrow_up:false,
            video_arrow_down:true
        });
    }

    videoOff(){
        this.setState({
            ...this.state,
            video:false,
            video_arrow_up:true,
            video_arrow_down:false
        });
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
