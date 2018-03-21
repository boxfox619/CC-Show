import React from 'react';
import GradientButton from './GradientButton';

import styles from './style.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as assetsActions from 'services/editor/asset/actions';
import * as slideActions from 'services/editor/slide/actions';
import * as assetTypes from 'services/editor/asset/assetTypes';
import * as uiActions from 'services/ui/actions';

class SideController extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <div style={{'width': '80%', 'margin': '20px 10%'}}>
                    <div className={styles.profile}>
                        <div className={styles.profileImgCover}>
                            <img className={styles.profileImg} src={this.props.profile}/>
                        </div>
                        <div className={styles.textWrap}>
                            <div className={styles.name}>{this.props.name}</div>
                            <div className={styles.subName}>{this.props.email}</div>
                        </div>
                    </div>
                    <span className={styles.hr}/>
                    <GradientButton label={'텍스트'} onClick={() => this.createAsset(assetTypes.TYPE_TEXT)}/>
                    <GradientButton label={'이미지'} onClick={() => this.createAsset(assetTypes.TYPE_IMAGE)}/>
                    <GradientButton label={'비디오'} onClick={() => this.createAsset(assetTypes.TYPE_VIDEO)}/>
                    <GradientButton label={'도형'} onClick={() => this.createAsset(assetTypes.TYPE_SHAPE)}/>
                    <GradientButton label={'표'} onClick={() => this.createAsset(assetTypes.TYPE_TABLE)}/>
                    <GradientButton label={'기타'} onClick={() => this.props.toggleAssetStore()}/>
                    <span className={styles.hr}/>
                    <GradientButton label={'슬라이드 리스트'} onClick={() => this.props.toggleSlideManager()}/>
                    <GradientButton label={'슬라이드 쇼'} onClick={() => this.props.toggleSlideShow()}/>
                </div>
                <div className={styles.logo}/>
            </div>
        );
    }

    createAsset(type) {
        this.props.createAssetByType(type);
    }

}

const mapStateToProps = (state) => {
    return {
        name: state.account.name,
        email: state.account.email,
        profile: state.account.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...assetsActions, ...slideActions, ...uiActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideController);
