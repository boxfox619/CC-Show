import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ImageAsset extends Component {
    static propTypes = {
        styles: PropTypes.object.isRequired,
        value: PropTypes.string.isRequired
    };

    render() {
        return (
            <img onDragStart={(e) => {e.preventDefault()}}
                 src={this.props.value}
                 style={this.props.styles}
            />
        )
    }
}