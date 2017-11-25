import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import styles from './styles.css';

class CSSCode extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            code : '/*   type your css code ..*/ \n'
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
            <MonacoEditor
            className = "monaco"
            height = "200" width = "380" language = "css "
            value = {code} options = {options} onChange = {this.onChange}
            editorDidMount = {this.editorDidMount} />

        )
    }
}

export default CSSCode;