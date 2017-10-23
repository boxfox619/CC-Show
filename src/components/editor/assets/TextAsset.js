import React from 'react';
import styles from './Assets.css';
import ReactDOM from 'react-dom';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired,
  attrs: React.PropTypes.object.isRequired
};

var ContentEditable = React.createClass({
    render: function(){
        return <div
            onInput={this.emitChange}
            onBlur={this.emitChange}
            style={this.props.style}
            contentEditable
            dangerouslySetInnerHTML={{__html: this.props.html}}></div>;
    },
    shouldComponentUpdate: function(nextProps){
        return nextProps.html !== ReactDOM.findDOMNode(this).innerHTML;
    },
    emitChange: function(){
        var html = ReactDOM.findDOMNode(this).innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {

            this.props.onChange({
                target: {
                    value: html
                }
            });
        }
        this.lastHtml = html;
    }
});
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
      <div style={styleObj}>
        <ContentEditable style={{'width':'100%', 'height':'100%'}} onChange={this.handleChange} html={this.props.value} disabled={false}/>
      </div>
    )
  }

  handleChange(event){
    this.props.handleChange(event);
  }
}

TextAsset.propTypes = propTypes;

export default TextAsset;
