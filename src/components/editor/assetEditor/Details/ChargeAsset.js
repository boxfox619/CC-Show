import React from 'react';
import styles from './AssetEditorItem.css';

class ChargeAsset extends React.Component{
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
          
            <button type = "submit" className = {styles.AssetEditor_agreeButton}> 해당 약관에 동의합니다 </button>
         
        </div>
        );
    }
}

export default ChargeAsset;