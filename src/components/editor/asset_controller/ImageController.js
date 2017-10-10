import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/assets';
import * as uiActions from '../../../actions/ui';

import axios from 'axios';

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
        this.loadImage = this.loadImage.bind(this);
    }

    render(){
        return(
            <div>
                <div className={styles.fliping_controller_section}>
                    <div className={styles.controller_sub_wrapper}>
                        <div className={styles.controller_sub_title}>이미지
                            <img onClick={this.imageOn.bind()} src="/images/ic_arrow_up.png" style={this.state.image_arrow_up ? {} : {display:'none'}} className={styles.show_items_button}/>
                            <img onClick={this.imageOff.bind()} src="/images/ic_arrow_down.png" style={this.state.image_arrow_down ? {} : {display:'none'}} className={styles.show_items_button}/>
                        </div>
                    </div>
                    <div className={styles.items} style={this.state.image ? {} : {display:'none'}}>
                        <div className={styles.control_item+' '+styles.image_loader} onClick={this.loadImage}>
                          이미지 불러오기
                        </div>
                    </div>
                </div>
                <hr className={styles.controller_hr}/>
            </div>
        )
    }

    loadImage(){
      var fr = new FileReader();
      fr.onload = (e)=> {
        let data = e.target.result;
        this.props.toggleProgressDialog();
        axios.post('/assets/image', {data}).then(response => {
          console.log(response.data);
          this.props.setAssetImage(response.data);
          this.props.toggleProgressDialog();
        })
        .catch(e =>{
          console.log(e);
          this.props.toggleProgressDialog();
        });
      };
      var inputElement = document.createElement("input");
      inputElement.type = "file";
      inputElement.addEventListener("change", function(){
        fr.readAsDataURL(inputElement.files[0]);
      });
      inputElement.dispatchEvent(new MouseEvent("click"));

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
        this.props.setAssetImage(value);
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...actions, ...uiActions }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageController);
