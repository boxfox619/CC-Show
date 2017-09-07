import React from 'react';
import styles from './AssetEditorItem.css';

class AssetSetting extends React.Component{
    render(){
        return(
     <div className = {styles.AssetEditor_left}>
            <div className = {styles.AssetEditor_preview}>
                <span className = {styles.preview_text}>미리보기</span>
            </div>
            
            <div className = {styles.AssetEditor_setting}>
                <div className = {styles.setting_first}>
                    <div className = {styles.cover}><span className = {styles.frontTitle}>제목</span>
                    <input type = "text" className = {styles.title} placeholder=" 타이틀을 입력하세요"/>
                    </div>
                </div>
                <div className = {styles.setting_second}>
                    <a className = {styles.openStore}><span className = {styles.text}>스토어 공개</span></a>
                    <a className = {styles.changeCharge}><span className = {styles.text}>유료로 변환</span></a>
                    <div className = {styles.cover2}><span className = {styles.frontTitle2}>￦</span>
                    <input type = "number" className = {styles.title2} />
                    </div>
                    
                </div>
                {/* <div className = {styles.setting_third}>
                    <button className = {styles.box}><input type = "file" className = {styles.input_image} value = "등록"/></button>
                    <button className = {styles.box}><input type = "file" className = {styles.input_image}/></button>
                    <input type = "button" className = {styles.add}/>
                </div> */}
            </div>
            <div className = {styles.AssetEditor_description}>
                <div className = {styles.AssetEditor_topbar}>
                    <span className = {styles.topbar_title}>부가설명</span>
                </div>
                <div className = {styles.AssetEditor_content}>
                    <textarea cols = "107" rows = "50" className = {styles.description_content} placeholder ="텍스트를 입력하세요."/>
                </div>
            </div>
      </div>
        );
    }
}
export default AssetSetting;