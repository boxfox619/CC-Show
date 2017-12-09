import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const propTypes = {
  codeType : React.PropTypes.string.isRequired,
  onChange : React.PropTypes.func.isRequired
}

class CodeEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            code : ''
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(newValue, e){
      this.setState({code: newValue});
      this.props.onChange(newValue);
    }

      editorDidMount(editor){}

      changeEditorValue(){
      }

      changeBySetState(){
      }

    render(){
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: 'line',
            automaticLayout: false,
        };
        return(
            <MonacoEditor height = "252" width = "110%" language = {this.props.codeType}
            value = {code} options = {options} onChange = {this.onChange}
            editorDidMount = {this.editorDidMount}/>
        );
    }
}

export default CodeEditor;
