import React from 'react';
import styles from './style.css';

import AssetRenderer from 'components/AssetRenderer';
import * as assetTypes from 'services/editor/asset/assetTypes';
import MonacoEditor from './MonacoEditor';

const propTypes = {
    onChangeCode: React.PropTypes.func.isRequired,
    css: React.PropTypes.string.isRequired,
    js: React.PropTypes.string.isRequired,
    html: React.PropTypes.string.isRequired,
}

class AssetEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAsset: undefined,
            previewAsset: {
                id: 'preview',
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

        this.assetSelected = this.assetSelected.bind(this);
        this.assetDeselected = this.assetDeselected.bind(this);
        this.setAssetXY = this.setAssetXY.bind(this);
        this.setAttributes = this.setAttributes.bind(this);
    }


    render() {
        return (
            <div className={this.props.className}>
                <div className={styles.content}>
                    <div className={styles.code}>
                        <div className={styles.codeArea}>
                            <div className={styles.topArea}>
                                <span className={styles.topLan}>HTML</span>
                            </div>
                            <MonacoEditor codeType={'html'} onChange={(code) => this.props.onChangeCode('html', code)}
                                          value={this.state.html}/>
                        </div>
                        <div className={styles.codeArea}>
                            <div className={styles.topArea}>
                                <span className={styles.topLan}>CSS</span>
                            </div>
                            <MonacoEditor codeType={'css'} onChange={(code) => this.props.onChangeCode('css', code)}
                                          value={this.state.css}/>

                        </div>
                        <div className={styles.codeArea}>
                            <div className={styles.topArea}>
                                <span className={styles.topLan}>JS</span>
                            </div>
                            <MonacoEditor codeType={'javascript'}
                                          onChange={(code) => this.props.onChangeCode('js', code)}
                                          value={this.state.js}/>

                        </div>
                    </div>

                    <div className={styles.preview}>
                        <div className={styles.preTop}>
                            <span className={styles.preLan}>PREVIEW</span>
                        </div>
                        <AssetRenderer
                            className={styles.previewArea}
                            assets={this.previewAsset}
                            selectedAsset={this.state.selectedAsset}
                            assetSelected={this.assetSelected}
                            assetDeselected={this.assetDeselected}
                            setAssetXY={this.setAssetXY}
                            setAttributes={this.setAttributes}
                            setAssetValue={this.setAssetValue}/>
                    </div>
                </div>
            </div>
        );
    }

    assetSelected() {
        this.setState({selectedAsset: 0});
    }

    assetDeselected() {
        this.setState({selectedAsset: undefined});
    }

    setAssetXY(x, y) {
        this.setState(
            {
                previewAsset: {
                    ...this.state.previewAsset,
                    x,
                    y
                }
            }
        );
    }

    setAttributes(attrs) {
        let asset = this.state.previewAsset;
        Object.keys(attrs).map(function (key, index) {
            asset[key] = attrs[key];
        });
        this.setState({previewAsset: asset});
    }

    setAssetValue(id, value) {
        this.setState(
            {
                previewAsset: {
                    ...this.state.previewAsset,
                    value
                }
            }
        );
    }

    get previewAsset() {
        return [{
            ...this.state.previewAsset,
            value: this.state.css + this.state.html + this.state.js
        }];
    }
}

AssetEditor.propTypes = propTypes;

export default AssetEditor;
