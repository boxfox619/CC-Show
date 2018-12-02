import React from 'react';
import PropTypes from 'prop-types';

import AssetCanvas from '../../../../core/components/AssetCanvas';

export default class Slide extends React.Component {
    static propTypes = {
        slide: PropTypes.object.isRequired,
        visible: PropTypes.bool.isRequired
    };
    render() {
        let {slide, visible} =  this.props;
        return (<div style={{'display': visible ? 'block' : 'none'}}>
            <AssetCanvas
                assets={slide.assets}
            />
        </div>);
    }
}