import React from 'react';
import styles from './AssetEditorItem.css';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/asseteditor';
import Store from '../../../../store';
import { bindActionCreators } from 'redux';

class Thumbnail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ThumbnailUrl : undefined
        }
    }
    render(){
        return(
        <div className = {styles.previewDiv}>
            <input type = "file" className = {styles.previewFile} onChange = {(e)=>this.ImageChange(e)}/>
            <button className = {styles.AssetEditor_preview}><img src = {this.props.thumbnail}/></button>
        </div>
        );
    }
    ImageChange(e){
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                ...this.state,
                ThumbnailUrl : reader.result,
            });
            this.props.getPreviewImage(this.state.ThumbnailUrl);
        }
        reader.readAsDataURL(file)
    }
}

var mapStateToProps = (state) => {
    return{
        thumbnail : state.asseteditor.previewImage
    }
}

var mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...actions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);