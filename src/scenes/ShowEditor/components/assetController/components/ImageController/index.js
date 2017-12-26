import React from 'react';
import { connect } from 'react-redux';
import * as assetsActions from 'services/editor/asset/actions';
import * as uiActions from 'services/ui/actions';

import axios from 'axios';

import { bindActionCreators } from 'redux';
import styles from '../../style.css';

import ControllerHeader from '../controllerHeader';
import Request from './services/request';

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

        this.setUrl=this.setUrl.bind(this);
        this.loadImage = this.loadImage.bind(this);
    }

    render(){
        return(
            <div>
                <div className={styles.fliping_controller_section}>
                    <ControllerHeader title={'이미지'}  onToggle={(toggle)=>{this.setState({image : toggle})}}/>
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
        Request.uploadImage(data, function(response){
          if(response.result == true)
            this.props.setAssetImage(response.data);
          this.props.toggleProgressDialog();
        })
      };
      var inputElement = document.createElement("input");
      inputElement.type = "file";
      inputElement.addEventListener("change", function(){
        fr.readAsDataURL(inputElement.files[0]);
      });
      inputElement.dispatchEvent(new MouseEvent("click"));

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
