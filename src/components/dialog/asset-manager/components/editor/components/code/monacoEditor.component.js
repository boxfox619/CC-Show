import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const propTypes = {
  codeType: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  code: React.PropTypes.string.isRequired
}

export default function CodeEditor({codeType, onChange, value}) {
  const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: false,
    autoClosingBrackets: true,
    contextmenu: false,
    disableLayerHinting: false,
    minimap: {enabled: false},
  };
  const requireConfig = {
    paths: {'vs': '/vs'}
  }

  const editorDidMount = (editor) => {
    editor.focus();
  }

  return (
    <MonacoEditor editorDidMount={editorDidMount}
      height="252"
      language={codeType}
      onChange={onChange}
      options={options}
      requireConfig={requireConfig}
      value={value}
      width="100%"
    />
  );

}

CodeEditor.propTypes = propTypes;
