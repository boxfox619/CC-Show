import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ButtonGroup from './ButtonGroup';
import styles from './styles.css';
import * as assetTypes from "../../../../lib/constants/AssetTypes";
import * as slideActions from "../../modules/slide";
import {createAsset} from "../../modules/asset";

class Index extends React.Component {
    static propTypes = {
        className: PropTypes.string.isRequired,
        toggleSlideManager: PropTypes.func.isRequired,
        toggleAssetStore: PropTypes.func.isRequired,
        toggleSlideShow: PropTypes.func.isRequired
    };
    render() {
        return (
            <div className={this.props.className}>
                <div style={{'width': '80%', 'margin': '20px 10%'}}>
                    <div className={styles.profile}>
                        <div className={styles["profile-img-cover"]}>
                            <img src={this.props.account.profile} />
                        </div>
                        <div className={styles["text-wrap"]}>
                            <div className={styles["name"]}>{this.props.account.name}</div>
                            <div className={styles["sub-name"]}>{this.props.account.email}</div>
                        </div>
                    </div>
                    <ButtonGroup buttonMap={this.buttonMap}/>
                </div>
                <div className={styles.logo} />
            </div>
        );
    }

    get buttonMap() {
        const {createAsset, toggleSlideManager, toggleSlideShow, toggleAssetStore} = this.props;
        return [
            [
                {label: '텍스트', action: () => createAsset(assetTypes.TYPE_TEXT)},
                {label: '이미지', action: () => createAsset(assetTypes.TYPE_IMAGE)},
                {label: '비디오', action: () => createAsset(assetTypes.TYPE_VIDEO)},
                {label: '도형', action: () => createAsset(assetTypes.TYPE_SHAPE)},
                {label: '표', action: () => createAsset(assetTypes.TYPE_TABLE)},
                {label: '기타', action: () => toggleAssetStore()}
            ],
            [
                {label: '슬라이드 리스트', action: () => toggleSlideManager()},
                {label: '슬라이드 쇼', action: () => toggleSlideShow()}
            ]
        ];
    };
}


const mapDispatchToProps = {
    createAsset
};

const mapStateToProps = (state) => ({
    account: state.account
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)
