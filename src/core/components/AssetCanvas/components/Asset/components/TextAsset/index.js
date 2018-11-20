import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class TextAsset extends Component {
    static propTypes = {
        styles: PropTypes.object.isRequired,
        value: PropTypes.string.isRequired,
        attrs: PropTypes.object.isRequired,
        handleChange: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        let styleObj = this.props.styles;
        if (this.props.attrs.edit) {
            styleObj = {
                ...styleObj,
                'cursor': 'auto'
            }
        }
        return (
            <div contentEditable={this.props.attrs.controlable}
                 dangerouslySetInnerHTML={{__html: this.props.value}}
                 id={this.props.attrs.id}
                 name={this.props.attrs.id}
                 style={{...styleObj}}
            />
        )
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.attrs.edit) {
            document.getElementById(this.props.attrs.id).focus();
        } else {
            document.getElementById(this.props.attrs.id).blur();
        }
        return nextProps.value !== ReactDOM.findDOMNode(this).innerHTML || nextProps.attrs.edit !== this.props.attrs.edit;
    }

    componentDidMount() {
        let config = {
            toolbar: [
                {name: 'styles', items: ['Font', 'FontSize']},
                {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike']},
                {name: 'paragraph', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},
                {name: 'colors', items: ['TextColor', 'BGColor']}
            ]
        };
        if (this.props.attrs.controlable && typeof CKEDITOR !== 'undefined') {
            let instance = CKEDITOR.inline(this.props.attrs.id, config);
            instance.on('change', function () {
                let data = instance.getData();
                this.props.handleChange(data);
            }.bind(this));
            CKEDITOR.on('instanceReady', function (ck) {
                ck.editor.removeMenuItem('paste');
            });
            CKEDITOR.disableAutoInline = true;
        }
    }
}
