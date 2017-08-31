import React from 'react';
import { connect } from 'react-redux';
import styles from './AssetController.css';

class ImageController extends React.Component{
    constructor(prop) {
        super(prop);

        this.state={
            image:true,
            image_arrow_up:false,
            image_arrow_down:true    
        };

        this.videoOn=this.videoOn.bind(this);
        this.videoOff=this.videoOff.bind(this);
    }

    render(){
        return(
            <div>
                <div className={styles.controller_sub_wrapper}>
                    <div className={styles.controller_sub_title}>이미지
                        <img onClick={this.imageOn.bind()} src="/images/ic_arrow_up.png" style={this.state.image_arrow_up ? {} : {display:'none'}} className={styles.show_items_button}/>
                        <img onClick={this.imageOff.bind()} src="/images/ic_arrow_down.png" style={this.state.image_arrow_down ? {} : {display:'none'}} className={styles.show_items_button}/>
                    </div>
                </div>
                <div className={styles.items} style={this.state.image ? {} : {display:'none'}}>
                        <div className={styles.control_item}>
                            <input className={styles.attribute_item_title} type="text" name="" value="URL :" readonly/><input type="text" className={styles.attribute_item_input} value={this.props.width} onKeyDown={this.setWidth()}/>
                        </div>
                        <div className={styles.control_item}>
                            <input type="text" className={styles.attribute_item_input } value={this.props.height}/>
                        </div>
                        <div className={styles.control_item}>
                            <input type="text" className={styles.attribute_item_input} value={this.props.x}/>
                        </div>
                </div>
            </div>
        )
    }

    imageOn(){
        this.setState({
            ...this.state,
            image:true,
            image_arrow_up:false,
            image_arrow_down:true
        });
    }

    imageOff(){
        this.setState({
            ...this.state,
            image:false,
            image_arrow_up:true,
            image_arrow_down:false
        });
    }

}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageController);