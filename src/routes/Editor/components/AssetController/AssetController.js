import React from 'react';
import PropTypes from 'prop-types';

import BasicController from 'BasicController';
import AssetTypeController from 'AssetTypeController';

import styles from 'styles.css';

class AssetController extends React.Component {
    static propTypes = {
        selectedAsset: PropTypes.object,
        onChangeAttribute: PropTypes.func.isRequired,
        onChangeStyle: PropTypes.func.isRequired,
        showColorPicker: PropTypes.func.isRequired,
    }
    constructor(prop) {
        super(prop);
        this.state = {
            text: true,
            video: true
        }
    }
    renderController = (selectedAsset) => {
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
            <div id={styles['asset-controller']}>
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