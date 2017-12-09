import React from 'react';
import styles from './AssetEditorItem.css';
import { connect } from 'react-redux';
import FreeAsset from './FreeAsset';
import ChargeAsset from './ChargeAsset';
import * as actions from '../../../actions/asseteditor';
import Store from '../../../store';
import { bindActionCreators } from 'redux';
import * as uiActions from '../../../actions/ui';
import PreviewImage from './PreviewImage';
import Description from './Description';
import Thumbnail from './Thumbnail';

const selectMode = [
    {mode : '스토어 공개'},
    {mode : '유료로 전환'}
]

class AssetSetting extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
        ThumbnailUrl: undefined,
        addFileCNT : 0,
        defWidth : 434,
        myWidth : 286,
        isCheckedFree : true,
        isCheckedCharge : true,
    };
    this.handleChangeCharge = this.handleChangeCharge.bind(this);
    this.handleChangeFree = this.handleChangeFree.bind(this);
};

componentWillMount(){
    this.setState( { isChecked: this.props.isChecked } );
}

    priceHandler(e){
        var price = e.target.value
        this.props.getPrice(price)
    }
    contentHandler(e){
       var content = e.target.value
       this.props.getContent(content)
    }


    addFileChange(e){

        let add = 145;

        this.setState({
            ...this.state,
            addFileCNT : this.state.addFileCNT+1,
            defWidth : this.state.defWidth + add,
            myWidth : this.state.defWidth + "px"
        })
        // console.log(this.state.myWidth);
        if(this.state.addFileCNT === 3){
            console.log('e.preventDefault 실행');
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

    ImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
                this.setState({
                    ...this.state,
                    // file : file,
                    ThumbnailUrl : reader.result,
                });
                this.props.getPreviewImage(this.state.ThumbnailUrl);
        }
        reader.readAsDataURL(file)
    }



    render(){


        var renderForm = () => {

            if(this.state.isCheckedCharge == true && this.state.isCheckedFree == true){
                 return(
                     <FreeAsset />
                 )
            }

            if(this.state.isCheckedFree == true){
                return(
                     <ChargeAsset />
                )
            }

            if(this.state.isCheckedCharge == true){
                return(
                    <FreeAsset />
                )
            }

            if(this.state.isCheckedCharge == false && this.state.isCheckedFree == false){
                return(
                    <ChargeAsset />
                )
            }

        }


        return(
<div className = {styles.content}>
     <div className = {styles.AssetEditor_left}>
            <Thumbnail />
            <div className = {styles.AssetEditor_setting}>

                <div className = {styles.setting_first}>
                    <div className = {styles.cover}><span className = {styles.frontTitle}>제목</span>
                        <input type = "text" className = {styles.title} placeholder=" 타이틀을 입력하세요" onChange = {(e)=>this.titleHandler(e)} value = {this.props.title}/>
                    </div>
                </div>

                <div className = {styles.setting_second}>

                    <div className = {styles.openStoreDiv}>
                     <input type = "checkbox"  className = {styles.modebox} checked={this.state.isCheckedFree} onChange={this.handleChangeFree}/>
                     <label className = {styles.modeboxlabel}>
                         <span className = {styles.openStoreSpan}>스토어 공개</span>
                     </label>
                    </div>
                    <div className = {styles.openStoreDiv}>
                     <input type = "checkbox"  className = {styles.modebox} checked={this.state.isCheckedCharge} onChange={this.handleChangeCharge}/>
                     <label className = {styles.modeboxlabel}>
                         <span className = {styles.openStoreSpan}>유료로 변환</span>
                     </label>

                    </div>

                    <div className = {styles.cover2}>
                        <span className = {styles.frontTitle2}>￦</span>
                        <input type = "number" className = {styles.price} onChange = {(e)=> this.priceHandler(e)} />
                    </div>

                </div>

            <PreviewImage />

        </div>
            <Description />
    </div>
   {renderForm()}
    </div>
        );
    }

    handleChangeFree () {
        this.props.getOpenToStore(this.state.isCheckedFree);
        this.setState( { isCheckedFree: !this.state.isCheckedFree } );
    }

    handleChangeCharge(){
        this.setState({ isCheckedCharge : !this.state.isCheckedCharge});
    }
}

var mapStateToProps = (state) =>{
    return{
        htmlsource : state.asseteditor.htmlsource,
        title : state.asseteditor.title,
        thumbnail : state.asseteditor.previewImage
    }
}

var mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...actions, ...uiActions}, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(AssetSetting);
