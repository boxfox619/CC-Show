import React from 'react';
import {connect} from 'react-redux';
import styles from 'style.css';
import SideController from './SideController';
import SlideManager from './SlideManager';
import AssetController from './AssetController';
import SlideContext from './SlideContext';
import ProgressDialog from "../../../core/components/Dialog/Progress";
import {saveShowData} from '../modules/editor';
import {setSlideNote} from "../modules/slide";
import SlideShowDialog from "../components/SlideShowDialog/SlideShowDialog";

class Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideManager: false,
            assetStore: false,
            slideShow: false
        }
    }

    render() {
        const {slideManager, assetStore, slideShow} = this.state;
        const {showId, slides, setSlideNote} = this.props;
        const {contextDisabled, progress} = this.props;
        return (
            <div className={styles["show-editor"]} ref={root => this.root = root}>
                {progress && <ProgressDialog/>}
                {slideShow && <SlideShowDialog slides={slides} showId={showId} setSlideNote={setSlideNote}/>}
                <SideController
                    account={this.props.account}
                    className={styles["side-controller"]}
                    toggleAssetStore={this.setState({assetStore: !assetStore})}
                    toggleSlideManager={this.setState({slideManager: !slideManager})}
                    toggleSlideShow={this.setState({slideShow: !slideShow})}
                />
                <SlideManager
                    className={`${styles["slide-manager"]} ${slideManager ? styles.show : ''}`}
                    onClose={() => this.setState({slideManager: false})}
                />
                {this.renderDialog(this.props.ui.dialog)}
                <div className={`${styles["context-wrap"]} ${contextDisabled ? styles.disabled : ''}`}>
                    <div className={styles["context-space"]}>
                        <SlideContext className={styles["slide-context"]}/>
                    </div>
                </div>
                <AssetController/>
            </div>
        )
    }

}

const mapDispatchToProps = {
    saveShowData,
    setSlideNote
};

const mapStateToProps = (state) => ({
    slides: state.editor.slides,
    showId: state.editor.showId,
    progress: state.editor.progressDialog,
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor)