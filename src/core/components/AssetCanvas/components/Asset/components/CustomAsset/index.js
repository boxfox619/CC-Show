import React, {Component} from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

export default class CustomAsset extends Component {
    static propTypes = {
        styles: PropTypes.object.isRequired,
        value: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            code: ''
        }
        this.code = ''
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.code}}
                 style={this.props.styles}
            />
        )
    }

    componentDidUpdate() {
        if (!!this.state.code && this.state.code.length > 0) {
            var extractscript = /<script>([\S\s]+)<\/script>/gi.exec(this.state.code);
            if (!!extractscript && extractscript.length > 0)
                window.eval(extractscript[extractscript.length - 1]);
        }
    }

    componentDidMount() {
        axios.get('/store/simple/?id=' + this.props.value)
            .then(response => {
                this.setState({code: response.data.code});
            }).catch(err => {
        });
    }
}
