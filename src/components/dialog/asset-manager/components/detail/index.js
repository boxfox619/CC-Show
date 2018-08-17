import React from 'react';
import styles from './style.css';
import AssetCanvas from 'components/asset-canvas';
import * as assetTypes from 'constants/assetTypes';

const propTypes = {
  asset: React.PropTypes.object.isRequired
}

class Detail extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectedAsset: undefined,
      previewAsset: {
        id: '0',
        type: assetTypes.TYPE_PREVIEW,
        value: '',
        height: '50px',
        width: '50px',
        x: '0px',
        y: '0px',
        angle: '0',
        style: {}
      }
    };
  }
  render() {
    return (
      <div className={styles.asset_detail}>
        <h1 className={styles.title}>{this.props.asset.title}</h1>
        <div className={styles.description}>{this.props.asset.content}</div>
        <AssetCanvas
          assets={this.getPreviewAsset()}
          className={styles.previewArea}
          onAssetSelected={() => {}}
          onChangeAttributes={this.setAttributes}
          selectedAssetIndex={this.state.selectedAsset}
        />
      </div>
    );
  }

  getPreviewAsset() {
    return [{
      ...this.state.previewAsset,
      value: ''
    }];
  }

  setAttributes(attrs) {
    let asset = this.state.previewAsset;
    Object.keys(attrs).map(function (key) {
      asset[key] = attrs[key];
    });
    this.setState({previewAsset: asset});
  }
}

Detail.propTypes = propTypes;

export default Detail;
