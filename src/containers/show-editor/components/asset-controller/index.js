import React from 'react';

import BasicController from './components/basic-controller';
import AssetTypeController from './type.controller.component';

import styles from './style.css';

const propTypes = {
    selectedAsset: React.PropTypes.object,
    onChangeAttribute: React.PropTypes.func.isRequired,
    onChangeStyle: React.PropTypes.func.isRequired,
  showColorPicker: React.PropTypes.func.isRequired,
}

class AssetController extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      text: true,
      video: true
    }
    this.renderController = this.renderController.bind(this);
  }

  renderController(selectedAsset) {
    if (!!selectedAsset)
      return (
        <div>
          <AssetTypeController
            selectedAsset={selectedAsset}
            onChangeAttribute={this.props.onChangeAttribute}
            onChangeStyle={this.props.onChangeStyle}
            showColorPicker={this.props.showColorPicker} />
          <BasicController
            angle={parseInt(selectedAsset.angle)}
            backgroundColor={selectedAsset.style['background-color']}
            borderColor={selectedAsset.style['border-color']}
            borderWidth={parseInt(selectedAsset.style['border-width'])}
            height={parseInt(selectedAsset.height)}
            onChangeAttribute={this.props.onChangeAttribute}
            onChangeStyle={this.props.onChangeStyle}
            showColorPicker={this.props.showColorPicker}
            style={selectedAsset.style}
            width={parseInt(selectedAsset.width)}
            x={parseInt(selectedAsset.x)}
            y={parseInt(selectedAsset.y)}
          />
        </div>
      )
  }

  render() {
    return (
      <div className={styles.assetController}>
        <div className={styles.title}>
          <div>Asset Controller</div>
        </div>
        {this.renderController(this.props.selectedAsset)}
      </div>
    )
  }
}

AssetController.propTypes = propTypes;

export default AssetController;
