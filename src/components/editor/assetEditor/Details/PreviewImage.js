import React from 'react';
import styles from './AssetEditorItem.css';
import { connect } from 'react-redux';
import FreeAsset from './FreeAsset';
import ChargeAsset from './ChargeAsset';
import * as actions from '../../../../actions/asseteditor';
import Store from '../../../../store';
import { bindActionCreators } from 'redux';
import * as uiActions from '../../../../actions/ui';

class PreviewImage extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            cnt : [
                {cnt : 0},
                {cnt : 1}
            ],
            cntNum : 2
        }
    }
    
    render(){
        return(           
            <div className = {styles.setting_third}>
            {this.state.cnt.map((content,index)=>{
                return(
                    <div>
                    <PreviewInfo cnt = {content.cnt}/>
                    </div>
                )
            })}
                <button className = {styles.addButton} onClick = {(e)=> this.addFile(e)}></button>
            </div>
        );
    }

    addFile(e){
        var currentNum = this.state.cntNum++
        this.setState({
            cnt : this.state.cnt.concat({cnt : currentNum})
        })
        console.log(this.state.cnt);
        this.forceUpdate();
    }
}

class PreviewInfo extends React.Component(){
    render(){
        return(
            <div className = {styles.previewBox}  >
                {this.props.cnt}
                <input type = "file" className = {styles.inputFile} />
                <button className = {styles.inputButton}></button>
            </div>
        );
    }
}

export default PreviewImage;