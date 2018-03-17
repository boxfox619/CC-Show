import React from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired,
  attrs: React.PropTypes.object.isRequired
};

class TextAsset extends React.Component{

  constructor(props){
    super(props);
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
      <div id={this.props.attrs.id} name={this.props.attrs.id} contentEditable={this.props.attrs.controlable} style={{...styleObj}} dangerouslySetInnerHTML={{__html: this.props.value}}>
      </div>
    )
  }

  shouldComponentUpdate(nextProps){
    if(nextProps.attrs.edit){
      document.getElementById(this.props.attrs.id).focus();
    }else{
      document.getElementById(this.props.attrs.id).blur();
    }
    return nextProps.value !== ReactDOM.findDOMNode(this).innerHTML||nextProps.attrs.edit!=this.props.attrs.edit;
  }

  componentDidMount(){
    let config = {toolbar: [
  		{ name: 'styles', items: [ 'Font', 'FontSize' ] },
  		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike'] },
  		{ name: 'paragraph', items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
  		{ name: 'colors', items: [ 'TextColor', 'BGColor' ] }
	  ]};
    if(this.props.attrs.controlable && typeof CKEDITOR !== 'undefined'){
      let instance = CKEDITOR.inline(this.props.attrs.id, config);
      instance.on("change", function() {
          let data = instance.getData();
          this.props.handleChange(data);
      }.bind(this));
      CKEDITOR.disableAutoInline = true;
    }
  }
}

TextAsset.propTypes = propTypes;

export default TextAsset;
