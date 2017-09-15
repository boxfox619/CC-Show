import React from 'react';
import styles from './AssetEditorItem.css';

class AssetSetting extends React.Component{
    constructor(prop){
        super(prop);
        // this.previewImage = this.previewImage.bind(this);
        this.state = {file : ' ' , file2 : ' ', file3 : ' ', ThumbnailUrl: undefined, previewInputUrl : undefined, previewInputUrl2 : '',  currentImageUpload: undefined};
    };

    thumbNail (e){
        this.setState({
            ...this.state,
            currentImageUpload : 'previewThumbnail'
        });
    }
    
    inputimg(e){
        this.setState({
            ...this.state,
            currentImageUpload : 'previewInputimg'
        });
    }

    inputimg2(e){
        this.setState({
            ...this.state,
            currentImageUpload : 'previewInputimg2'
        });
    }


    ImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
        let file2 = e.target.files[0];
        let file3 = e.target.files[0];

        reader.onloadend = () => {
            switch(this.state.currentImageUpload){

                case 'previewThumbnail':
                this.setState({
                    ...this.state,
                    file : file,
                    ThumbnailUrl : reader.result,
                });
                break;

                case 'previewInputimg': 
                this.setState({
                    ...this.state,
                    file2 : file2,
                    previewInputUrl : reader.result,
                });
                break;

                case 'previewInputUrl2':
                this.setState({
                    ...this.state,
                    file3 : file3,
                    previewInputUrl2 : reader.result,
                });
                break;
            }
        }
        reader.readAsDataURL(file)
      }


    componentWillMount(){
        
    }

    componentDidUpdate(){
        
    }
    render(){

        let $imagePreview = null;
        let $imagePreview2 = null;
        let $imagePreview3 = null;

            if(this.state.ThumbnailUrl){
                $imagePreview = (<img src={this.state.ThumbnailUrl} accept="image/*"/>);
            }else{
                $imagePreview = (<div className="preview_Image">미리보기<br/>(파일을 선택하세요)</div>);
            }
       
            if(this.state.previewInputUrl){
                $imagePreview2 = (<img src={this.state.previewInputUrl} accept="image/*"/>);
            }else{
                $imagePreview2 = (<div className="previewinputimg"><br/>(파일을 선택하세요)</div>);
            }

            if(this.state.previewInputUrl2){
                $imagePreview3 = (<img src={this.state.previewInputUrl2} accept="image/*"/>);
            }else{
                $imagePreview3 = (<div className="previewinputimg"><br/>(파일을 선택하세요)</div>);                
            }
        


        return(
     <div className = {styles.AssetEditor_left}>
            <div className = {styles.previewDiv}>
                <input type = "file" className = {styles.previewFile} onClick = {(e)=>this.thumbNail(e)} onChange = {(e)=>this.ImageChange(e)}/>
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
                    <div className = {styles.imagePreview}>
                        <input type = "file" className = {styles.inputImage} onClick = {(e)=>this.inputimg(e)} onChange = {(e)=> this.ImageChange(e)}/>
                        <button className = {styles.previewText}>{$imagePreview2}</button>
                    </div>

                    <div className = {styles.imagePreview}>
                        <input type = "file" className = {styles.inputImage} onClick = {(e)=> this.inputimg2(e)} onChange = {(e)=>this.ImageChange(e)}/>
                        <button className = {styles.previewText}>{$imagePreview3}</button>
                    </div>

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