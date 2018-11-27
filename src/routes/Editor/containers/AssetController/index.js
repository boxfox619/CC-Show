import React from 'react';
import {connect} from 'react-redux';

import BasicController from './BasicController';
import AssetTypeController from './AssetTypeController';

import styles from './styles.css';
import {getCurrentAsset, setSelectedAssetAttribute, setSelectedAssetStyle} from "../../modules/asset";

class Index extends React.Component {
    constructor(props) {
        super(props);
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
                        onChangeAttribute={this.props.setSelectedAssetAttribute}
                        onChangeStyle={this.props.setSelectedAssetStyle}
                        showColorPicker={this.showColorPicker} />
                    <BasicController
                        angle={parseInt(selectedAsset.angle)}
                        backgroundColor={selectedAsset.style['background-color']}
                        borderColor={selectedAsset.style['border-color']}
                        borderWidth={parseInt(selectedAsset.style['border-width'])}
                        height={parseInt(selectedAsset.height)}
                        onChangeAttribute={this.props.setSelectedAssetAttribute}
                        onChangeStyle={this.props.setSelectedAssetStyle}
                        showColorPicker={this.showColorPicker}
                        style={selectedAsset.style}
                        width={parseInt(selectedAsset.width)}
                        x={parseInt(selectedAsset.x)}
                        y={parseInt(selectedAsset.y)}
                    />
                </div>
            )
    };

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

    showColorPicker = () =>{
        //@TODO show color picker
    }
}

const mapDispatchToProps = {
    setSelectedAssetAttribute,
    setSelectedAssetStyle
};

const mapStateToProps = (state) => ({
    selectedAsset: getCurrentAsset(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)