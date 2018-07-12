import React from 'react';
import GradientButton from 'components/form/button-gradient';

import styles from './style.css';
import * as assetTypes from "../../../../services/editor/asset/asset.types";

const propTypes = {
    className: React.PropTypes.string.isRequired,
    editorActions: React.PropTypes.object.isRequired,
    uiActions: React.PropTypes.object.isRequired
}

const getButtonMap = (editorActions, uiActions) =>{
    let actions = {...editorActions, ...uiActions};
    return [
        [
            {label: '텍스트', action: () => actions.createAssetByType(assetTypes.TYPE_TEXT)},
            {label: '이미지', action: () => actions.createAssetByType(assetTypes.TYPE_IMAGE)},
            {label: '비디오', action: () => actions.createAssetByType(assetTypes.TYPE_VIDEO)},
            {label: '도형', action: () => actions.createAssetByType(assetTypes.TYPE_SHAPE)},
            {label: '표', action: () => actions.createAssetByType(assetTypes.TYPE_TABLE)},
            {label: '기타', action: () => actions.toggleAssetStore()}
        ],
        [
            {label: '슬라이드 리스트', action: () => actions.toggleSlideManager()},
            {label: '슬라이드 쇼', action: () => actions.toggleSlideShow()}
        ]
    ];
}

const renderGroup = (editorActions, uiActions) => {
    let buttonMap = getButtonMap(editorActions, uiActions);
    return buttonMap.map((group, idx) => {
        return (
          <div key={idx}>
            <span className={styles.hr} />
            {
                group.map((btn, btnIdx) => {
                    return (
                      <GradientButton
                        key={idx + '-' + btnIdx}
                        label={btn.label}
                        onClick={btn.action}
                    />)
                })
            }
          </div>);


    });
}

class SideController extends React.Component {

    render() {
        return (
          <div className={this.props.className}>
            <div style={{'width': '80%', 'margin': '20px 10%'}}>
              <div className={styles.profile}>
                <div className={styles.profileImgCover}>
                  <img className={styles.profileImg} src={this.props.account.profile} />
                </div>
                <div className={styles.textWrap}>
                  <div className={styles.name}>{this.props.account.name}</div>
                  <div className={styles.subName}>{this.props.account.email}</div>
                </div>
              </div>
              {renderGroup(this.props.editorActions, this.props.uiActions)}
            </div>
            <div className={styles.logo} />
          </div>
        );
    }
}

SideController.propTypes = propTypes;

export default SideController;
