import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CustomAsset extends Component {
    static propTypes = {
        styles: PropTypes.object.isRequired,
        value: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.value}}
                 style={this.props.styles}
            />
        )
    }

    componentDidUpdate() {
        if (this.props.value.length > 0) {
            var extractscript = /<script>([\S\s]+)<\/script>/gi.exec(this.props.value);
            if (extractscript)
                window.eval(extractscript[extractscript.length - 1]);
        }
    }
}
