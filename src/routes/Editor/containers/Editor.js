import React from 'react'
import {connect} from 'react-redux'
import styles from 'styles.css'
import {SideController, SlideManager, AssetController} from '../components'
import Index from './SlideContext';

class Editor extends React.Component {

    render() {
        return (
            <div className={styles.showEditor} ref={root => {this.root = root}}>
                <SideController account={this.props.account}
                                 className={styles.sideController}
                                 editorActions={this.props.editorActions}
                                 uiActions={this.props.uiActions}
                />
                <SlideManager
                    className={`${styles.slideManager} ${this.props.visibleSlideManager ? styles.show : ''}`}
                    currentSlideIndex={this.props.showData.selectedSlide}
                    editorActions={this.props.editorActions}
                    slides={this.props.showData.slides}
                    uiActions={this.props.uiActions}
                />
                {this.renderDialog(this.props.ui.dialog)}
                <div className={`${styles.contextWrap} ${contextDisabled ? styles.disabled : ''}`}>
                    <div className={styles.contextSpace}>
                        <Index
                            className={styles.slideContext}
                            editorActions={this.props.editorActions}
                            onModified={() => this.props.editorActions.saveShowAfterTimeout(this.props.showId)}
                            showData={this.props.showData}
                        />
                    </div>
                </div>
                <AssetController
                    selectedAsset={this.props.selectedAsset}
                    onChangeAttribute={this.props.editorActions.setSelectedAssetAttribute}
                    onChangeStyle={this.props.editorActions.setSelectedAssetStyle}
                    showColorPicker={this.props.uiActions.showColorPicker} />
            </div>
        )
    }

}

const mapDispatchToProps = {

};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor)