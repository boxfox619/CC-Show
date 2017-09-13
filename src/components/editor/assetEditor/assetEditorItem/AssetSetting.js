import React from 'react';
import styles from './AssetEditorItem.css';

class AssetSetting extends React.Component{
    constructor(prop){
        super(prop);

        // this.previewImage = this.previewImage.bind(this);
        this.state = {file : ' ' , imagePreviewUrl: ''};
    };

    ImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }


    componentWillMount(){
        
    }
    
    componentDidMount(){
        // this.previewImage();
    }
    render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} accept="image/*"/>);
        } else {
          $imagePreview = (<div className="preview_Image">미리보기<br/>(파일을 선택하세요)</div>);
        }
        return(
     <div className = {styles.AssetEditor_left}>
            <div className = {styles.previewDiv}>
                <input type = "file" className = {styles.previewFile} onChange = {(e)=>this.ImageChange(e)}/>
                <button className = {styles.AssetEditor_preview}>{$imagePreview}</button>
            </div>
            {/* <div className = {styles.preview_Image}>{$imagePreview}</div> */}
            <div className = {styles.AssetEditor_setting}>

                <div className = {styles.setting_first}>
                    <div className = {styles.cover}><span className = {styles.frontTitle}>제목</span>
                        <input type = "text" className = {styles.title} placeholder=" 타이틀을 입력하세요"/>
                    </div>
                </div>

                <div className = {styles.setting_second}>

                    <div className = {styles.openStoreDiv}>
                        <button className = {styles.openStoreButton}>스토어 공개</button>
                    </div>

                    <div className = {styles.openStoreDiv}>
                        <button className = {styles.openStoreButton}>유료로 변환</button>
                    </div>
                    
                    <div className = {styles.cover2}>
                        <span className = {styles.frontTitle2}>￦</span>
                        <input type = "number" className = {styles.title2} />
                    </div>
                    
                </div>

                <div className = {styles.setting_third}>
                    <div className = {styles.imagePreview}><span className = {styles.previewText}>사진첨부</span></div>
                    <div className = {styles.imagePreview}><span className = {styles.previewText}>사진첨부</span></div>
                    <button className = {styles.filebutton}><input type = "file" className = {styles.filefile}/></button>
                </div> 

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