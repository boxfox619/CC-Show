import React from 'react';
import styles from './AssetEditorItem.css';
import { connect } from 'react-redux';
import FreeAsset from './FreeAsset';
import ChargeAsset from './ChargeAsset';
import * as actions from '../../../../actions/asseteditor';
import Store from '../../../../store';
import { bindActionCreators } from 'redux';
import * as uiActions from '../../../../actions/ui';
import PreviewImage from './PreviewImage';

class AssetSetting extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
        cnt : 2,
        addFileCNT : 0,
        defWidth : 434,
        myWidth : 286,
        isCheckedFree : true,
        isCheckedCharge : true,
    };
    this.handleChangeCharge = this.handleChangeCharge.bind(this);
    this.handleChangeFree = this.handleChangeFree.bind(this);
};
    priceHandler(e){
        var price = e.target.value
        this.props.getPrice(price)
    }
    contentHandler(e){
       var content = e.target.value
       this.props.getContent(content)
    }

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

    addFileChange(e){

        this.state.cnt ++;
        console.log(this.state.cnt);
        
        let add = 145;
                    
        this.setState({
            ...this.state,
            addFileCNT : this.state.addFileCNT+1,
            defWidth : this.state.defWidth + add,
            myWidth : this.state.defWidth + "px"
        })
        // console.log(this.state.myWidth);
        if(this.state.addFileCNT === 3){
            e.preventDefault();
        }
        if(this.state.myWidth === '724px'){
            this.setState({
                myWidth : 724 + "px"
            })
        }        
    }
    
    titleHandler(e){
        this.props.setTitle(e.target.value);
    }

    render(){
        
        
        var renderForm = () => {
            
            if(this.state.isCheckedFree == true && this.state.isCheckedCharge == true){
                return(
                    <ChargeAsset />
                )
            }
            if(this.state.isCheckedFree == false && this.state.isCheckedCharge == false){
                return(
                    <FreeAsset />
                )
            }
            if(this.state.isCheckedFree == true && this.state.isCheckedCharge == false){
                return(
                    <FreeAsset />
                )
            }

            if(this.state.isCheckedCharge == true && this.state.isCheckedFree == false){
                return(
                    <ChargeAsset />
                )
            }
        }


        
        return(
<div className = {styles.content}>
     <div className = {styles.AssetEditor_left}>
            <div className = {styles.previewDiv}>
                <input type = "file" className = {styles.previewFile} onClick = {(e)=>this.thumbNail(e)} onChange = {(e)=>this.ImageChange(e)}/>
                <button className = {styles.AssetEditor_preview}><img className = {styles.thumbnailImg} src = {this.props.thumbnail} /></button>
            </div>
            <div className = {styles.AssetEditor_setting}>

                <div className = {styles.setting_first}>
                    <div className = {styles.cover}><span className = {styles.frontTitle}>제목</span>
                        <input type = "text" className = {styles.title} placeholder=" 타이틀을 입력하세요" onChange = {(e)=>this.titleHandler(e)} value = {this.props.title}/>
                    </div>
                </div>

                <div className = {styles.setting_second}>

                    <div className = {styles.openStoreDiv}>
                     <input type = "checkbox"  className = {styles.modebox} defaultChecked={this.state.isCheckedFree}  onChange={this.handleChangeFree}/>
                     <label className = {styles.modeboxlabel}>
                         <span className = {styles.openStoreSpan}>스토어 공개</span>
                     </label>
                    </div>
                    <div className = {styles.openStoreDiv}>
                     <input type = "checkbox"  className = {styles.modebox} defaultChecked = {this.state.isCheckedCharge} onChange={this.handleChangeCharge}/>
                     <label className = {styles.modeboxlabel}>
                         <span className = {styles.openStoreSpan}>유료로 변환</span>
                     </label>
                        
                    </div>

                    <div>
                    </div>
                    
                    <div className = {styles.cover2}>
                        <span className = {styles.frontTitle2}>￦</span>
                        <input type = "number" className = {styles.price} onChange = {(e)=> this.priceHandler(e)} />
                    </div>
                    
                </div>

              <PreviewImage />

        </div>
            <div className = {styles.AssetEditor_description}>
                <div className = {styles.AssetEditor_topbar}>
                    <span className = {styles.topbar_title}>부가설명</span>
                </div>
                <div className = {styles.AssetEditor_content}>
                    <textarea cols = "107" rows = "50" className = {styles.description_content} onChange = {(e)=> this.contentHandler(e)} placeholder ="텍스트를 입력하세요." />
                </div>
            </div>  
    </div>
   {renderForm()}
    </div>
        );
    }

    handleChangeFree () {
        this.setState( { isCheckedFree: !this.state.isCheckedFree } );
        this.props.getOpenToStore(this.state.isCheckedFree);  
        console.log(this.state.isCheckedFree);      
    }

    handleChangeCharge(){
        this.setState({ isCheckedCharge : !this.state.isCheckedCharge });        
        this.props.getChangeToCharge(this.state.isCheckedCharge);
        console.log(this.state.isCheckedCharge);
    }
}

var mapStateToProps = (state) =>{
    return{
        htmlsource : state.asseteditor.htmlsource,
        title : state.asseteditor.title,
        thumbnail : state.asseteditor.previewImage,
    }
}

var mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...actions, ...uiActions}, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(AssetSetting);