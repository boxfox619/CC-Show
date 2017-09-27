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
            image_arrow_down:true,
            src: ''
        };

        this.loadImage = this.loadImage.bind(this);

        this.imageOn=this.imageOn.bind(this);
        this.imageOff=this.imageOff.bind(this);
        this.setUrl=this.setUrl.bind(this);
    }

    render(){
        return(
            <div>
                <div style={{"height":"80px"}}>
                    <div className={styles.controller_sub_wrapper}>
                        <div className={styles.controller_sub_title}>이미지
                            <img onClick={this.imageOn.bind()} src="/images/ic_arrow_up.png" style={this.state.image_arrow_up ? {} : {display:'none'}} className={styles.show_items_button}/>
                            <img onClick={this.imageOff.bind()} src="/images/ic_arrow_down.png" style={this.state.image_arrow_down ? {} : {display:'none'}} className={styles.show_items_button}/>
                        </div>
                    </div>
                    <div className={styles.items} style={this.state.image ? {} : {display:'none'}}>
                        <div className={styles.control_item+' '+styles.URL_controller}>
                            <span className={styles.attribute_item_title+' '+styles.video_margin_zero} >URL :</span> <input type="file" value={this.props.url} className={styles.attribute_item_input} onChange={this.setUrl}/>
                        </div>
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

    // loadImage(){
    //     var fr = new FileReader();
    //     fr.onload = (e)=> {
    //     this.setState({
    //         ...this.state,
    //         src: e.target.result
    //     });
    //     axios.put('/store/update/',{
    //         id: this.props.id,
    //         target: 'thumbnail',
    //         data: e.target.result
    //     }).then(response => {
    //         console.log('test');
    //     });
    //     };
    //     var inputElement = document.createElement("input");
    //     inputElement.type = "file";
    //     inputElement.addEventListener("change", function(){
    //     fr.readAsDataURL(inputElement.files[0]);
    //     });
    //     inputElement.dispatchEvent(new MouseEvent("click"));

    // }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...actions }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageController);
