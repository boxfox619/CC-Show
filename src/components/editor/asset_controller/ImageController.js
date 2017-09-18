import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/assets';

import { bindActionCreators } from 'redux';
import styles from './AssetController.css';

class ImageController extends React.Component{
    constructor(prop) {
        super(prop);

        this.state={
            image:true,
            image_arrow_up:false,
            image_arrow_down:true    
        };

        this.imageOn=this.imageOn.bind(this);
        this.imageOff=this.imageOff.bind(this);
        this.setUrl=this.setUrl.bind(this);
    }

    render(){
        return(
            <div>
                <div className={styles.controller_sub_wrapper}>
                    <div className={styles.controller_sub_title}>이미지
                        <img onClick={this.imageOn.bind()} src="/images/ic_arrow_up.png" style={this.state.image_arrow_up ? {} : {display:'none'}} className={styles.show_items_button}/>
                        <img onClick={this.imageOff.bind()} src="/images/ic_arrow_down.png" style={this.state.image_arrow_down ? {} : {display:'none'}} className={styles.show_items_button}/>
                    </div>
                </div>
                <div className={styles.items} style={this.state.image ? {} : {display:'none'}}>
                       <div className={styles.control_item+' '+styles.URL_controller}>
                        <span className={styles.attribute_item_title+' '+styles.video_margin_zero} >URL :</span> <input type="text" value={this.props.url} className={styles.attribute_item_input} onChange={this.setUrl}/>
                    </div>
                </div>
            <hr className={styles.controller_hr}/>
            </div>
        )
    }

    imageOn(){
        this.setState({
            ...this.state,
            image:true,
            image_arrow_up:false,
            image_arrow_down:true
        });
    }

    imageOff(){
        this.setState({
            ...this.state,
            image:false,
            image_arrow_up:true,
            image_arrow_down:false
        });
    }
    setUrl(event) {
        let {value}=event.target;
        this.props.setAssetImageURL(value);
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageController);