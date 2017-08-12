import React from 'react';
import CodeMirror from 'react-codemirror';
import style from './codemirror.css';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css');
require('codemirror/mode/htmlembedded/htmlembedded');


class CodeEditor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        code: ""
    }

    this.updateCode = this.updateCode.bind(this);
  }

  
  updateCode(newCode) {
    this.setState({
      code: newCode
    })
  }

  render(){
    return (
      <div>
        <CodeMirror className='CodeMirror' value={this.state.code} onChange={this.updateCode} options={this.props.options}/>
      </div>
    )

  }
}

export default CodeEditor;
