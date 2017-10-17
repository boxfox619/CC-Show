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
import Previews from './Previews';

class PreviewInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSrc : [],
            file: '',
            imagePreviewUrl: ''
        }
    }
    render(){
        return(
            <div className = {styles.previewBox} id = {this.props.cnt} >
                {this.props.cnt}
                <input type = "file" className = {styles.inputFile}  onChange = {(e)=> this.imageChange(e)}/>
                <button className = {styles.inputButton}></button>
            </div>
        );
    }

    imageChange(e){      
        e.preventDefault();
        // var reader = new FileReader();
        // var file = e.target.files[0];
        // var currentId = this.props.cnt;       
        // var imageUrl; 

        var fr = new FileReader();
        fr.onload = (e) => {
            this.setState({
                ...this.state,
                imagePreviewUrl : e.target.result
            });            
        }
        console.log(e.target.result);        
        console.log(this.props.cnt);
    }
    
}

export default PreviewInfo;