import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'services/editor/asset/video/actions';

import { bindActionCreators } from 'redux';
import styles from '../../style.css';
import ControllerHeader from '../controllerHeader';

const propTypes = {
    onChangeAttribute: React.PropTypes.func.isRequired,
    url: React.PropTypes.string.isRequired,
    preview: React.PropTypes.bool.isRequired
}

class VideoController extends React.Component {
    constructor(props){
        super(props);

        this.state={
            video:true,
            video_arrow_up:false,
            video_arrow_down:true
        };

        this.setUrl=this.setUrl.bind(this);
        this.togglePreview = this.togglePreview.bind(this);
    }
    render() {
        return (
            <div>
                <div className={styles.fliping_controller_section}>
                    <ControllerHeader title={'비디오'}  onToggle={(toggle)=>{this.setState({video : toggle})}}/>
                <div className={styles.items} style={this.state.video ? {} : {display:'none'}}>
                    <div className={styles.control_item+' '+styles.URL_controller}>
                        <span className={styles.attribute_item_title} >URL :</span>
                        <input type="text" value={this.props.url} className={styles.attribute_item_input} style={{'textAlign': 'left'}} onChange={this.setUrl}/>
                    </div>
                    <div className={styles.control_item+' '+styles.video_preview_toggle+' '+((this.props.preview)?styles.active:'')} onClick={this.togglePreview}>
                      미리보기
                    </div>
                </div>
                </div>
                <hr className={styles.controller_hr}/>
            </div>
        )
    }

    togglePreview(){
      this.props.onChangeAttribute('preview', !this.props.preview);
    }

    setUrl(event) {
        let {value}=event.target;
        this.props.onChangeAttribute('value', value);
    }
}

VideoController.propTypes = propTypes;

export default VideoController;
