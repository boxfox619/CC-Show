import React from 'react';
import styles from './AssetEditorItem.css';
import { connect } from 'react-redux';

class ChargeAsset extends React.Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }
    // submit(){
    //     let assetName = document.getElementsByClassName(styles.titleInput)[0].value;
    //     let source = this.props.html + this.props.css + this.props.js;
    
    //     let node = document.getElementById('preview').childNodes[0];
    //     let self = this;
    //       domtoimage.toPng(node, {filter: filter})
    //         .then(function (dataUrl) {
    //           let thumbnail = dataUrl;
    //             axios.post('/store/simple/create', {name:assetName, source, thumbnail}).then(response => {
    //               self.props.toggleAssetStore();
    //             });
    //         })
    //         .catch(function (error) {
    //             console.error(error);
    //         });
    
    //   }
    render(){
        return(
        <div className = {styles.AssetEditor_right}>
            <div className = {styles.AssetEditor_isAsset}>
                <div className = {styles.isAsset_Header}>
                    <span className = {styles.isAsset_titleText}>유효 에셋 라이센스 안내</span>
                </div>
                <div className = {styles.isAsset_Content}>
                </div>
            </div>

            <div className = {styles.AssetEditor_Process}>
                 <div className = {styles.isAsset_Header}>
                    <span className = {styles.isAsset_titleText}>유효 에셋 등록과정 안내</span>
                </div>
                <div className = {styles.isAsset_Content}></div>
            </div>

            <div className = {styles.AssetEditor_Process}>    
                <div className = {styles.isAsset_Header}>
                    <span className = {styles.isAsset_titleText}>판매자 이용약관 안내</span>
                </div>
                <div className = {styles.isAsset_Content}></div>
            </div>       
          
            <button type = "submit" className = {styles.AssetEditor_agreeButton} onClick = {submit()}> 해당 약관에 동의합니다 </button>
         
        </div>
        );
    }

   
}

export default ChargeAsset;