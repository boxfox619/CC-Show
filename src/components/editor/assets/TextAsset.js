import React from 'react';
import styles from './Assets.css';
import ReactDOM from 'react-dom';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired,
  attrs: React.PropTypes.object.isRequired
};

class TextAsset extends React.Component{

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    let styleObj = this.props.styles;
    if(this.props.attrs.edit){
      styleObj = {
        ...styleObj,
        'cursor': 'auto'
      }
    }
    return (
      <div name={this.props.attrs.id} contentEditable={true} style={styleObj}>

      </div>
    )
  }

  handleChange(event){
    this.props.handleChange(event);
  }

  componentDidMount(){
    let config = {toolbar: [
		{ name: 'styles', items: [ 'Font', 'FontSize' ] },
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike'] },
		{ name: 'paragraph', items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
		{ name: 'colors', items: [ 'TextColor', 'BGColor' ] }
	]};
    CKEDITOR.inline(this.props.attrs.id, config);
    CKEDITOR.instances[this.props.attrs.id].on("change", function() {
        let data = CKEDITOR.instances[this.props.attrs.id].getData();
        this.onInput(data);
    }.bind(this));
    CKEDITOR.disableAutoInline = true;
  }
}

TextAsset.propTypes = propTypes;

export default TextAsset;
