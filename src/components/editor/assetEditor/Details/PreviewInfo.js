import React from 'react';
import styles from './AssetEditorItem.css';
import { connect } from 'react-redux';
import FreeAsset from './FreeAsset';
import ChargeAsset from './ChargeAsset';
import * as actions from '../../../../actions/asseteditor';
import Store from '../../../../store';
import { bindActionCreators } from 'redux';
import * as uiActions from '../../../../actions/ui';
import update from 'react-addons-update'
import PreviewImage from './PreviewImage';

class PreviewInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSrc : [],
            previewUrl : '',
            images : [],
            defaultNum : 0
        }
    }
    render(){
        return(
            <div className = {styles.previewBox} id = {this.props.cnt} >
                {this.props.cnt}
                <input type = "file" className = {styles.inputFile}  onChange = {(e)=> this.ImageChange(e)} />
                <button className = {styles.inputButton}></button>
            </div>
        );
    }

    ImageChange(e){      
        
        var currentId = this.props.cnt;               
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.state.previewUrl = reader.result;
            console.log(this.state.previewUrl);
        }
        console.log('hello');
        this.setState({
            imageSrc : update(
                this.state.imageSrc,
                {
                    $push : [ this.state.previewUrl]
                }
            )
        })
        console.log(this.state.previewUrl);      
        reader.readAsDataURL(file);
       

    }
    
}

var mapStateToProps = (state) => {
    return{
        
    }
}

var mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...actions, ...uiActions}, dispatch);
}


export default PreviewInfo;