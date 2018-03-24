import React from 'react';
import SideController from './components/SideController';
import SlideContext from './components/slideContext';
import AssetController from './components/assetController';
import SlideManager from './components/slideManager';
import AssetStore from 'components/Dialog/AssetStore';
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
                <SideController className={styles.sideController}/>
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
