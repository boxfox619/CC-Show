import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import styles from './style.css';
import SideController from './components/side-controller';
import AssetController from './components/asset-controller';
import SlideContext from './components/slide-context';
import SlideManager from './components/slide-manager';
import AssetManager from 'components/dialog/asset-manager';
import ColorPicker from 'components/dialog/color-picker';
import SlideShow from './components/slide-show-dialog';
import ProgressDialog from 'components/dialog/progress';

import * as editorActions from 'services/editor/actions';
import * as uiActions from 'services/ui/actions';
import * as accountActions from 'services/account/actions';

import {getSelectedAsset} from "services/slide.state.util";
import KeyService from "./services/key.manage.service";
import dialogs from 'services/ui/dialogs';

class ShowEditor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {showId: undefined};

    this.renderDialog = this.renderDialog.bind(this);
    this.checkContextDisabled = this.checkContextDisabled.bind(this);
  }

  render() {
    let contextDisabled = this.checkContextDisabled();
    return (
      <div className={styles.showEditor}
        ref={root => {this.root = root}}
      >
        <SideController account={this.props.account}
          className={styles.sideController}
          editorActions={this.props.editorActions}
          uiActions={this.props.uiActions}
        />
        <SlideManager
          className={classnames(styles.slideManager, (this.props.visibleSlideManager ? styles.show : ''))}
          currentSlideIndex={this.props.showData.selectedSlide}
          editorActions={this.props.editorActions}
          slides={this.props.showData.slides}
          uiActions={this.props.uiActions}
        />
        {this.renderDialog(this.props.ui.dialog)}
        <div className={classnames(styles.contextWrap, (contextDisabled ? styles.disabled : ''))}>
          <div className={styles.contextSpace}>
            <SlideContext
              className={styles.slideContext}
              editorActions={this.props.editorActions}
              onModified={() => this.props.editorActions.saveShowDataAfterTimeout(this.props.showId)}
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
    );
  }

    renderDialog(dialog) {
        if (dialog) {
            switch (dialog) {
                case dialogs.ASSET_STORE:
                    return (<AssetManager />);
                case dialogs.COLOR_PICKER:
                    return (<ColorPicker />)
                case dialogs.SLIDE_SHOW:
                    return (<SlideShow />);
                case dialogs.PROGRESS:
                    return (<ProgressDialog />);
            }
        }
    }

  componentDidMount() {
      KeyService.registerKey({...this.props.editorActions, ...this.props.uiActions}, this.props.showId);
    this.props.editorActions.loadShowData();
  }

  componentWillUnmount() {
    KeyService.unregisterKey();
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
    showId: state.editor.showId,
      selectedAsset: getSelectedAsset(state)
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
