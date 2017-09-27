import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/assets';

import { bindActionCreators } from 'redux';
import styles from './AssetController.css';

class VideoController extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            video:true,
            video_arrow_up:false,
            video_arrow_down:true
        };

        this.videoOn=this.videoOn.bind(this);
        this.videoOff=this.videoOff.bind(this);
        this.setUrl=this.setUrl.bind(this);
    }
    render() {
        return (
            <div>
                <div style={{"height":"110px"}}>
                    <div className={styles.controller_sub_wrapper}>
                    <div className={styles.controller_sub_title}>비디오
                        <img onClick={this.videoOn.bind()} src="/images/ic_arrow_up.png" style={this.state.video_arrow_up ? {} : {display:'none'}} className={styles.show_items_button}/>
                        <img onClick={this.videoOff.bind()} src="/images/ic_arrow_down.png" style={this.state.video_arrow_down ? {} : {display:'none'}} className={styles.show_items_button}/>
                    </div>
                </div>
                <div className={styles.items} style={this.state.video ? {} : {display:'none'}}>
                    <div className={styles.control_item+' '+styles.URL_controller}>
                        <span className={styles.attribute_item_title+' '+styles.video_margin_zero} >URL :</span> <input type="text" value={this.props.url} className={styles.attribute_item_input} onChange={this.setUrl}/>
                    </div>
                    <div>
                        <div onClick={this.props.setAssetVideoController} className={styles.control_item+' '+styles.video} style={this.props.videoController ? {'background-color': '#5a84b3'} : {}}>
                            <span className={styles.attribute_item_title+' '+styles.video_margin_zero} style={this.props.videoController ? {color:'#fff'} : {}}>컨트롤러</span>
                        </div>
                        <div onClick={this.props.setAssetVideoAutoplay} className={styles.control_item+' '+styles.video} style={this.props.videoAutoplay ? {'background-color': '#5a84b3'} : {}}>
                            <span className={styles.attribute_item_title+' '+styles.video_margin_zero} style={this.props.videoAutoplay ? {color:'#fff'} : {}}>자동재생</span>
                        </div>
                        <div onClick={this.props.setAssetVideoLoop} className={styles.control_item+' '+styles.video} style={this.props.videoLoop ? {'background-color': '#5a84b3'} : {}}>
                            <span className={styles.attribute_item_title+' '+styles.video_margin_zero} style={this.props.videoLoop ? {color:'#fff'} : {}}>반복</span>
                        </div>
                    </div>
                </div>
                </div>
                <hr className={styles.controller_hr}/>
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

    setUrl(event) {
        let {value}=event.target;
        this.props.setAssetVideoURL(value);
    }
}

const mapStateToProps = (state) => {
    return{
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoController);