import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

import AssetCanvas from 'components';
import * as assetTypes from 'lib/constants/assetTypes';
import MonacoEditor from './MonacoEditor';

export default class CodeEditor extends Component {

    static propTypes = {
        onChangeCode: PropTypes.func.isRequired,
        css: PropTypes.string.isRequired,
        js: PropTypes.string.isRequired,
        html: PropTypes.string.isRequired,
        className: PropTypes.string
    }

    constructor(props) {
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
            <div className={this.props.className}>
                <div className={styles.content}>
                    <div className={styles.code}>
                        <div className={styles.codeArea}>
                            <div className={styles.topArea}>
                                <span className={styles.topLan}>HTML</span>
                            </div>
                            <MonacoEditor codeType={'html'}
                                          onChange={(code) => this.props.onChangeCode('html', code)}
                                          value={this.state.html}
                            />
                        </div>
                        <div className={styles.codeArea}>
                            <div className={styles.topArea}>
                                <span className={styles.topLan}>CSS</span>
                            </div>
                            <MonacoEditor codeType={'css'}
                                          onChange={(code) => this.props.onChangeCode('css', code)}
                                          value={this.state.css}
                            />

                        </div>
                        <div className={styles.codeArea}>
                            <div className={styles.topArea}>
                                <span className={styles.topLan}>JS</span>
                            </div>
                            <MonacoEditor codeType={'javascript'}
                                          onChange={(code) => this.props.onChangeCode('js', code)}
                                          value={this.state.js}
                            />

                        </div>
                    </div>

                    <div className={styles.preview}>
                        <div className={styles.preTop}>
                            <span className={styles.preLan}>PREVIEW</span>
                        </div>
                        <AssetCanvas
                            assets={this.getPreviewAsset()}
                            className={styles.previewArea}
                            onAssetSelected={this.assetSelected}
                            onChangeAttributes={this.setAttributes}
                            selectedAssetIndex={this.state.selectedAsset}
                        />
                    </div>
                </div>
            </div>
        );
    }

    assetSelected = (target) => {
        this.setState({selectedAsset: target});
    };

    setAssetXY = (x, y) => {
        this.setState(
            {
                previewAsset: {
                    ...this.state.previewAsset,
                    x,
                    y
                }
            }
        );
    };

    setAttributes = (attrs) => {
        let asset = this.state.previewAsset;
        Object.keys(attrs).map(function (key) {
            asset[key] = attrs[key];
        });
        this.setState({previewAsset: asset});
    };

    getPreviewAsset = () => {
        let css = '<style>' + this.props.css + '</style>';
        let js = '<script>' + this.props.js + '</script>';
        return [{
            ...this.state.previewAsset,
            value: css + this.props.html + js
        }];
    };
}

CodeEditor.propTypes = propTypes;

export default CodeEditor;
