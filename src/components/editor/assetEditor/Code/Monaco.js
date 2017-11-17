/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-unresolved, import/extensions
import MonacoEditor from 'react-monaco-editor';
/* eslint-enable import/no-extraneous-dependencies */

// Using with webpack
class Monaco extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code... \n',
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

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: false,
    };
    return (
      <div>

        <MonacoEditor
          height="500"
          width = "300"
          language="css"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

export default Monaco;



// eslint-disable-next-line react/no-multi-comp
