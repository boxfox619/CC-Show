import React from 'react';
import MonacoEditor from 'react-monaco-editor';

class JSCode extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            code : '// type your js code .. \n'
        }
    }
    onChange(newValue, e){
        console.log('onChange', newValue, e); // eslint-disable-line no-console
      }

      editorDidMount(editor){
        console.log('editorDidMount', editor);
        editor.focus();
      }

      changeEditorValue(){
        if (this.editor) {
          this.editor.setValue('// code changed! \n');
        }
      }

      changeBySetState(){
        this.setState({ code: '// code changed by setState! \n' });
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
            <MonacoEditor height = "252" width = "450" language = "javascript"
            value = {code} options = {options} onChange = {this.onChange}
            editorDidMount = {this.editorDidMount}/>
        )
    }
}

export default JSCode;
