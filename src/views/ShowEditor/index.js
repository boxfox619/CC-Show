import React from 'react';
import SideController from 'components/Controller/SideController';
import AssetController from 'components/Controller/AssetController';
import AssetStore from 'components/Dialog/AssetStore';
import SlideContext from './components/slideContext';
import SlideManager from './components/slideManager';
import ColorPicker from 'components/Dialog/ColorPicker';
import SlideShow from './components/slideShow';
import ProgressDialog from 'components/Dialog/Progress';
import dialogs from 'services/ui/dialogs';

import * as editorActions from 'services/editor/actions';
import * as uiActions from 'services/ui/actions';
import * as accountActions from 'services/account/actions';

import classnames from 'classnames';

import {bindActionCreators} from 'redux';

import styles from './style.css';
import {connect} from 'react-redux';
import * as assetTypes from "../../services/editor/asset/assetTypes";

class ShowEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {showId: undefined};

        this.checkContextDisabled = this.checkContextDisabled.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.onUnload = this.onUnload.bind(this);
    }

    render() {
        let renderDialogs = () => {
            if (this.props.ui.dialog != undefined) {
                switch (this.props.ui.dialog) {
                    case dialogs.ASSET_STORE:
                        return (<AssetStore className={styles.modal}/>);
                    case dialogs.ACCOUNT_WITH_SNS:
                        return (<AccountDialog className={styles.modal}/>);
                    case dialogs.COLOR_PICKER:
                        return (<ColorPicker className={styles.modal}/>)
                    case dialogs.SLIDE_SHOW:
                        return (<SlideShow className={styles.modal}/>);
                    case dialogs.PROGRESS:
                        return (<ProgressDialog className={styles.modal}/>);
                }
            }
        }
        let contextDisabled = this.checkContextDisabled();
        return (
            <div ref={root => {this.root = root}} className={styles.showEditor}>
              <SideController className={styles.sideController}
                              buttonMap={this.sideControllerActions}
                              account={this.props.account}/>
              <SlideManager
                    className={classnames(styles.slideManager, (this.props.visibleSlideManager ? styles.show : ''))}
                    slides={this.props.showData.slides}
                    currentSlideIndex={this.props.showData.selectedSlide}
                    uiActions={this.props.uiActions}
                    editorActions={this.props.editorActions}
                />
                {renderDialogs()}
                <div onClick={this.handleClick} className={classnames(styles.contextWrap, (contextDisabled ? styles.disabled : ''))}>
                    <div className={styles.contextSpace}>
                        <SlideContext
                            className={styles.slideContext}
                            onModified={() => this.props.editorActions.saveShowDataAfterTimeout(this.props.showId)}
                            showData={this.props.showData}
                            editorActions={this.props.editorActions}
                        />
                    </div>
                </div>
                <AssetController className={styles.assetController}/>
            </div>
        );
    }

    get sideControllerActions(){
        return [
          [
            { label: '텍스트',  action: () => this.props.createAssetByType(assetTypes.TYPE_TEXT) },
            { label: '이미지',  action: () => this.props.createAssetByType(assetTypes.TYPE_IMAGE) },
            { label: '비디오',  action: () => this.props.createAssetByType(assetTypes.TYPE_VIDEO) },
            { label: '도형',  action: () => this.props.createAssetByType(assetTypes.TYPE_SHAPE) },
            { label: '표',  action: () => this.props.createAssetByType(assetTypes.TYPE_TABLE) },
            { label: '기타',  action: () => this.props.toggleAssetStore() }
          ],
          [
            { label: '슬라이드 리스트',  action: () => this.props.toggleSlideManager() },
            { label: '슬라이드 쇼',  action: () => this.props.toggleSlideShow() }
          ]
        ];
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown, true);
        window.addEventListener("beforeunload", this.onUnload);
        this.props.editorActions.loadShowData();
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("beforeunload", this.onUnload)
    }

    handleKeyDown(e) {
        if (e.keyCode === 27) {
            this.props.uiActions.releaseDialog();
        } else if ((e.which == 83 && e.ctrlKey)) {
            this.props.editorActions.saveShowData(this.props.showId);
            e.preventDefault()
        }
    }

    handleClick(event) {
        if (this.checkContextDisabled()) {
            this.props.uiActions.releaseDialog();
        }
    }

    onUnload(event) {
        return event.returnValue = "발표자료를 저장하셨나요? (Ctrl + S)";
    }

    checkContextDisabled() {
        let check = false;
        if (this.props.visibleSlideManager || this.props.ui.dialog != undefined) {
            check = true;
        }
        return check;
    }

}

const mapStateToProps = (state) => {
    return {
        ui: state.ui,
        showData: state.editor,
        account: state.account,
        visibleSlideManager: state.ui.visibleSlideManager,
        showId: state.editor.showId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        accountActions : bindActionCreators(accountActions, dispatch),
        uiActions : bindActionCreators(uiActions, dispatch),
        editorActions : bindActionCreators(editorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowEditor);
