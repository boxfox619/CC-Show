import React from 'react';
import styles from './AssetEditorItem.css';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/asseteditor';
import { bindActionCreators }from 'redux';
import * as uiActions from '../../../../actions/ui';
import domtoimage from 'dom-to-image';
import Store from '../../../../store';
import newId from './newid';

import * as assetTypes from '../../../../assetTypes';
import Asset from '../../assets/Asset';

import axios from 'axios';

function filter (node) {
    return (node.tagName !== 'SELECTORLINE'&&node.tagName !== 'SELECTORDOT');
}

class FreeAsset extends React.Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.state={
            isCheckedCon1 : false,
            isCheckedCon2 : false,
            isCheckedCon3 : false,
            isCheckedCon4 : false, 
            isCheckedCon5 : false,
            con2margin : 10,
            con3margin : 10,
            con4margin : 10,
            con5margin : 10,
            con6margin : 10


        }
        this.gpiHandler = this.gpiHandler.bind(this);
        this.lgpiHanlder = this.lgpiHanlder.bind(this);
        this.bsdHandler = this.bsdHandler.bind(this);
        this.mitHandler = this.mitHandler.bind(this);
        this.cclHandler = this.cclHandler.bind(this);
    }
    componentWillMount() {
        this.id = newId();
        this.id2 = newId();
        this.id3 = newId();
        this.id4 = newId();
        this.id5 = newId();
    }
    submit(){
        
                let assetName = this.props.assetName;
                assetName = String(assetName);
                let source = this.props.htmlsource + this.props.csssource + this.props.jssource;
                let self = this;
                // let node = this.props.image;
                
               
                    // domtoimage.toPng(node, {filter: filter})
                    // .then
                    // (function (dataUrl) {
                    //   let thumbnail = this.props.previewImage;
                    //     axios.post('/store/simple/create', {name:assetName, source, thumbnail}).then(response => {
                    //       self.props.toggleAssetStore;
                    //     });
                    // })
                    // .catch(function (error) {
                    //     console.error(error);
                    // });
                
            
              }
    render(){

        return(
            <div className = {styles.AssetEditor_right}>
            <div className = {styles.select_license}>
                <span className = {styles.select_license_text}>라이센스를 선택하세요. (GPI, LGPI, BSD, MIT, CCL 중 택1)</span>
                
            </div>


             <div>
                <div className = {styles.license_content}>
                    <input type="checkbox" name="toggle" id={this.id} className = {styles.license_input} checked = {this.state.isCheckedCon1} onChange = {this.gpiHandler} onClick = {this.submit}/>
                    <label htmlFor={this.id} className = {styles.license_label}>
                        <span className = {styles.license_text}>GPI</span>
                        <div className = {styles.dropdownButt}></div>
                    </label>
                    <div className = {styles.dropdownContent}></div>
                 </div>

                 <div className = {styles.license_content2} style = {{marginTop : this.state.con2margin+"px"}}>
                    <input type="checkbox" name="toggle" id={this.id2} className = {styles.license_input2} checked = {this.state.isCheckedCon2} onChange = {this.lgpiHanlder} onClick = {this.submit} />
                    <label htmlFor={this.id2} className = {styles.license_label2}>
                        <span className = {styles.license_text}>LGPI</span>
                        <div className = {styles.dropdownButt}></div>
                    </label>
                    <div className = {styles.dropdownContent2}></div>
                 </div>

                 <div className = {styles.license_content3} style = {{marginTop : this.state.con3margin+"px"}}>
                    <input type="checkbox" name="toggle" id={this.id3} className = {styles.license_input3} checked = {this.state.isCheckedCon3} onChange = {this.bsdHandler} onClick = {this.submit}/>
                    <label htmlFor={this.id3} className = {styles.license_label3}>
                        <span className = {styles.license_text}>BSD</span>
                        <div className = {styles.dropdownButt}></div>
                    </label>
                    <div className = {styles.dropdownContent3}></div>
                 </div>

                 <div className = {styles.license_content4} style = {{marginTop : this.state.con4margin+"px"}}>
                    <input type="checkbox" name="toggle" id={this.id4} className = {styles.license_input4} checked = {this.state.isCheckedCon4} onChange = {this.mitHandler} onClick = {this.submit}/>
                    <label htmlFor={this.id4} className = {styles.license_label4}>
                        <span className = {styles.license_text}>MIT</span>
                        <div className = {styles.dropdownButt}></div>
                    </label>
                    <div className = {styles.dropdownContent4}></div>
                 </div>

                 <div className = {styles.license_content5} style = {{marginTop : this.state.con5margin+"px"}}>
                    <input type="checkbox" name="toggle" id={this.id5} className = {styles.license_input5} checked = {this.state.isCheckedCon5} onChange = {this.cclHandler} onClick = {this.submit}/>
                    <label htmlFor={this.id5} className = {styles.license_label5}>
                        <span className = {styles.license_text}>CCL</span>
                        <div className = {styles.dropdownButt}></div>
                    </label>
                    <div className = {styles.dropdownContent5}></div>
                 </div>
    
                {/* <div className = {styles.toggleDown}></div> */}

                </div>
                
            </div>

             

     
        );
    }

    gpiHandler(){
        this.setState({ isCheckedCon1 : !this.state.isCheckedCon1});    
        if(this.state.isCheckedCon1 == false){
            if(this.state.isCheckedCon2 == true || this.state.isCheckedCon3 == true || this.state.isCheckedCon4 == true || this.state.isCheckedCon5 == true){
                this.setState({
                    isCheckedCon2 : false,
                    con2margin : 10,
                    isCheckedCon3 : false, 
                    con3margin : 10,
                    isCheckedCon4 : false,
                    con4margin : 10,
                    isCheckedCon5 : false
                })
            }
            this.setState({
                con2margin : 220 
            })
        }
        if(this.state.isCheckedCon1 == true){
            this.setState({
                con2margin : 10
            })
        }
    }
    lgpiHanlder(){
        this.setState({ isCheckedCon2 : !this.state.isCheckedCon2});    
        if(this.state.isCheckedCon2 == false){
            if(this.state.isCheckedCon1 == true || this.state.isCheckedCon3 == true || this.state.isCheckedCon4 == true || this.state.isCheckedCon5 == true){
                this.setState({
                    isCheckedCon1 : false,
                    con2margin : 10,
                    isCheckedCon3 : false,
                    con3margin : 10,
                    isCheckedCon4 : false,
                    con4margin : 10,
                    isCheckedCon5 : false,
                    con5margin : 10
                })
            }
            this.setState({
                con3margin : 220 
            })
        }
        if(this.state.isCheckedCon2 == true){
            this.setState({
                con3margin : 10
            })
        }
    }
    bsdHandler(){
        this.setState({ isCheckedCon3 : !this.state.isCheckedCon3});    
        if(this.state.isCheckedCon3 == false){
            if(this.state.isCheckedCon1 == true || this.state.isCheckedCon2 == true || this.state.isCheckedCon4 == true || this.state.isCheckedCon5 == true){
                this.setState({
                    isCheckedCon1 : false,
                    con2margin : 10,
                    con3margin : 10,
                    isCheckedCon2 : false,
                    con5margin : 10,
                    isCheckedCon4 : false,
                    con4margin : 10,
                    isCheckedCon5 : false,
                })
            }
            this.setState({
                con4margin : 220 
            })
        }
        if(this.state.isCheckedCon3 == true){
            this.setState({
                con4margin : 10
            })
        }
    }
    mitHandler(){
        this.setState({ isCheckedCon4 : !this.state.isCheckedCon4});    
        if(this.state.isCheckedCon4 == false){
            if(this.state.isCheckedCon1 == true || this.state.isCheckedCon2 == true || this.state.isCheckedCon3 == true || this.state.isCheckedCon5 == true){
                this.setState({
                    isCheckedCon1 : false,
                    isCheckedCon2 : false,
                    isCheckedCon3 : false,
                    isCheckedCon5 : false,
                    con2margin : 10,
                    con3margin : 10,
                    con4margin : 10,
                    con5margin : 10
                })
            }
            this.setState({
                con5margin : 220 
            })
        }
        if(this.state.isCheckedCon4 == true){
            this.setState({
                con5margin : 10
            })
        }
    }
    cclHandler(){
        this.setState({ isCheckedCon5 : !this.state.isCheckedCon5});    
        if(this.state.isCheckedCon5 == false){
            if(this.state.isCheckedCon1 == true || this.state.isCheckedCon2 == true || this.state.isCheckedCon3 == true || this.state.isCheckedCon4 == true){
                this.setState({
                    isCheckedCon1 : false,
                    isCheckedCon2 : false,
                    isCheckedCon3 : false,
                    isCheckedCon4 : false,
                    con2margin : 10,
                    con3margin : 10,
                    con4margin : 10,
                    con5margin : 10
                })
            }
            this.setState({
                con6margin : 220 
            })
        }
        if(this.state.isCheckedCon5 == true){
            this.setState({
                con6margin : 10
            })
        }
    }
}

var mapStateToProps = (state) => {
    return{
        assetName : state.asseteditor.title,
        htmlsource : state.asseteditor.htmlsource,
        csssource : state.asseteditor.csssource,
        jssource : state.asseteditor.jssource,
        image : state.asseteditor.image,
        previewImage : state.asseteditor.previewImage
    }
}

var mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...actions, ...uiActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FreeAsset);
{/* <script>
    $(document).ready(function(){
        $('.license_content').on('click', function(event){
            $('.dropdownContent').toggle('show')
        })
    });
</script> */}
