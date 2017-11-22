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
      <div name={this.props.attrs.id} contentEditable={true} style={{...styleObj, 'width': '100%','height':'100%'}} dangerouslySetInnerHTML={{__html: this.props.value}}>
      </div>
    )
  }

  shouldComponentUpdate(nextProps){
         return nextProps.value !== ReactDOM.findDOMNode(this).innerHTML;
  }

  componentDidMount(){
    let config = {toolbar: [
		{ name: 'styles', items: [ 'Font', 'FontSize' ] },
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike'] },
		{ name: 'paragraph', items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
		{ name: 'colors', items: [ 'TextColor', 'BGColor' ] }
	]};
    let instance = CKEDITOR.inline(this.props.attrs.id, config);
    instance.on("change", function() {
        let data = instance.getData();
        this.props.handleChange(data);
    }.bind(this));
    CKEDITOR.disableAutoInline = true;
  }
}

TextAsset.propTypes = propTypes;

export default TextAsset;
